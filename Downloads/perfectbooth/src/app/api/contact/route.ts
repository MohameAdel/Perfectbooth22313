import { NextResponse } from 'next/server';

const MAX_PAYLOAD_BYTES = 50 * 1024; // 50 KB

const SERVICE_MAP: Record<string, string> = {
  booths: 'أجنحة المعارض',
  planning: 'تخطيط وتنسيق الفعاليات',
  tents: 'الخيام والتجهيزات الخارجية',
  printing: 'المطبوعات والهوية البصرية',
  audio: 'أنظمة الصوت والإضاءة',
  registration: 'حلول التسجيل',
  conferences: 'المؤتمرات وورش العمل',
  other: 'أخرى'
};

const TIMELINE_MAP: Record<string, string> = {
  urgent: 'عاجل',
  weeks: 'خلال أسبوعين إلى 4 أسابيع',
  months1: 'خلال شهر إلى شهرين',
  months2: 'أكثر من شهرين',
  planning: 'ما زلنا في مرحلة التخطيط'
};

export async function POST(request: Request) {
  try {
    // 1. Payload size check
    const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
    if (contentLength > MAX_PAYLOAD_BYTES) {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    const bodyText = await request.text();
    if (Buffer.byteLength(bodyText, 'utf8') > MAX_PAYLOAD_BYTES) {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    let body: Record<string, any>;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    const { 
      fullName, 
      company, 
      email, 
      phone, 
      service, 
      timeline, 
      eventLocation, 
      location, 
      projectDetails, 
      details, 
      website 
    } = body;

    // 2. Honeypot check
    if (website && String(website).trim() !== '') {
      // Fake success for bots
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 3. Extract & sanitize text fields
    const cleanFullName = typeof fullName === 'string' ? fullName.trim() : '';
    const cleanCompany = typeof company === 'string' ? company.trim() : '';
    const cleanEmail = typeof email === 'string' ? email.trim() : '';
    const cleanPhone = typeof phone === 'string' ? phone.trim() : '';
    const cleanService = typeof service === 'string' ? service.trim() : '';
    const cleanTimeline = typeof timeline === 'string' ? timeline.trim() : '';
    const rawLocation = typeof eventLocation === 'string' ? eventLocation : typeof location === 'string' ? location : '';
    const cleanLocation = rawLocation.trim();
    const rawDetails = typeof projectDetails === 'string' ? projectDetails : typeof details === 'string' ? details : '';
    const cleanDetails = rawDetails.trim();

    // 4. Validation
    if (!cleanFullName || !cleanEmail || !cleanPhone || !cleanService || !cleanTimeline) {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,40}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    // Length limit checks
    if (
      cleanFullName.length > 120 ||
      cleanCompany.length > 160 ||
      cleanEmail.length > 254 ||
      cleanPhone.length > 40 ||
      cleanService.length > 150 ||
      cleanTimeline.length > 150 ||
      cleanLocation.length > 250 ||
      cleanDetails.length > 5000
    ) {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    }

    // 5. Environment Variables check
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL;
    const formSecret = process.env.CONTACT_FORM_SECRET;

    if (!appsScriptUrl || !formSecret) {
      console.warn('[WARN] Missing GOOGLE_APPS_SCRIPT_WEB_APP_URL or CONTACT_FORM_SECRET env variables.');
      return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 500 });
    }

    // Map service and timeline keys to display labels if matched
    const mappedService = SERVICE_MAP[cleanService] || cleanService;
    const mappedTimeline = TIMELINE_MAP[cleanTimeline] || cleanTimeline;

    // 6. Forward payload to Google Apps Script Web App
    const gasPayload = {
      secret: formSecret,
      fullName: cleanFullName,
      company: cleanCompany,
      email: cleanEmail,
      phone: cleanPhone,
      service: mappedService,
      timeline: mappedTimeline,
      eventLocation: cleanLocation,
      projectDetails: cleanDetails,
      website: ''
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 seconds timeout

    let gasRes: Response;
    try {
      gasRes = await fetch(appsScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gasPayload),
        signal: controller.signal,
        redirect: 'follow'
      });
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);
      console.error('[API_CONTACT_ERR] Failed to communicate with Apps Script Web App:', fetchErr.name || fetchErr.message);
      return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 502 });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!gasRes.ok) {
      console.error('[API_CONTACT_ERR] Apps Script returned HTTP status:', gasRes.status);
      return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 502 });
    }

    let gasData: { ok?: boolean; error?: string } = {};
    try {
      gasData = await gasRes.json();
    } catch (jsonErr) {
      console.error('[API_CONTACT_ERR] Invalid JSON response from Apps Script');
      return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 502 });
    }

    if (gasData.ok) {
      return NextResponse.json({ ok: true }, { status: 200 });
    } else if (gasData.error === 'validation_error') {
      return NextResponse.json({ ok: false, error: 'validation_error' }, { status: 400 });
    } else {
      return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 502 });
    }

  } catch (error: any) {
    console.error('[API_CONTACT_ERR] Internal server error:', error.message || error);
    return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: 'Method not allowed' }, { status: 405 });
}
