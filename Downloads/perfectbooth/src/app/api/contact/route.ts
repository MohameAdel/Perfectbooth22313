import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, company, email, phone, service, location, timeline, details, website,
      locale, utm_source, utm_medium, utm_campaign, utm_term, utm_content
    } = body;

    // Honeypot spam check
    if (website && website.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
    }

    // Basic Validation
    if (!fullName || !fullName.trim()) {
      return NextResponse.json({ success: false, error: 'Full Name is required' }, { status: 400 });
    }
    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'A valid email is required' }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ success: false, error: 'Phone Number is required' }, { status: 400 });
    }
    if (!service || !service.trim()) {
      return NextResponse.json({ success: false, error: 'Required Service selection is required' }, { status: 400 });
    }
    if (!timeline || !timeline.trim()) {
      return NextResponse.json({ success: false, error: 'Event timeline selection is required' }, { status: 400 });
    }

    // Generate server-side values
    const submission_id = crypto.randomUUID();
    const submitted_at_utc = new Date().toISOString();
    
    // IP Hash
    const rawIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    let ip_hash = null;
    if (rawIp !== 'unknown' && process.env.LEADS_IP_HASH_SALT) {
      ip_hash = crypto.createHash('sha256').update(rawIp + process.env.LEADS_IP_HASH_SALT).digest('hex');
    }

    // Duplicate key based on email and service
    const duplicate_key = crypto.createHash('sha256').update(`${email.trim().toLowerCase()}-${service.trim()}`).digest('hex');

    const row = [
      submission_id,                                       // A - Submission ID
      submitted_at_utc,                                    // B - Submitted At (UTC)
      null,                                                // C - Submitted At (Local)
      "perfect-booth-contact-v1",                          // D - Form Version
      locale || 'en',                                      // E - Website Locale
      "Website Form",                                      // F - Submission Channel
      request.headers.get('referer') ? new URL(request.headers.get('referer')!).pathname : '/contact', // G - Source Page
      request.headers.get('referer') || null,              // H - Referrer URL
      fullName.trim(),                                     // I - Full Name
      company?.trim() || null,                             // J - Company Name
      null,                                                // K - Job Title
      email.trim(),                                        // L - Email
      phone.trim(),                                        // M - Phone
      null,                                                // N - Country
      null,                                                // O - City
      null,                                                // P - Preferred Contact Method
      null,                                                // Q - Preferred Contact Time
      service.trim(),                                      // R - Service Interest
      null,                                                // S - Event Name
      null,                                                // T - Event Date
      location?.trim() || null,                            // U - Event Location
      null,                                                // V - Booth Size
      null,                                                // W - Budget Range
      timeline.trim(),                                     // X - Project Timeline
      details?.trim() || null,                             // Y - Requirements Message
      null,                                                // Z - Attachment URL
      null,                                                // AA - Marketing Consent
      null,                                                // AB - Privacy Consent
      utm_source || null,                                  // AC - UTM Source
      utm_medium || null,                                  // AD - UTM Medium
      utm_campaign || null,                                // AE - UTM Campaign
      utm_term || null,                                    // AF - UTM Term
      utm_content || null,                                 // AG - UTM Content
      (request.headers.get('user-agent') || '').substring(0, 255) || null, // AH - User Agent
      ip_hash,                                             // AI - IP Hash
      "New",                                               // AJ - Lead Status
      null,                                                // AK - Assigned To
      null,                                                // AL - Follow-up Date
      null,                                                // AM - Internal Notes
      duplicate_key,                                       // AN - Duplicate Key
      "Sent",                                              // AO - Integration Status
      null                                                 // AP - Integration Error
    ];

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetName = process.env.GOOGLE_SHEETS_WORKSHEET_NAME || 'Lead Submissions';

    if (spreadsheetId && clientEmail && privateKey) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: clientEmail,
            private_key: privateKey,
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 1. Check for duplicates (Idempotency)
        // We will read Column AN (Duplicate Key) and Column A (Submission ID)
        // Since we don't have the client passing submission_id on retries, we use our deterministic duplicate_key
        const getRes = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${sheetName}!A:AN`,
        });
        
        const rows = getRes.data.values || [];
        // Check if duplicate_key already exists in the last few hours/days (Column AN is index 39)
        const duplicateRow = rows.find(r => r[39] === duplicate_key);
        
        if (duplicateRow) {
          // It's a duplicate, we return the existing submission ID (Column A is index 0)
          return NextResponse.json({
            success: true,
            submission_id: duplicateRow[0]
          }, { status: 200 });
        }

        // 2. Append new row
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: `${sheetName}!A:AP`,
          valueInputOption: 'USER_ENTERED',
          insertDataOption: 'INSERT_ROWS',
          requestBody: {
            values: [row],
          },
        });
      } catch (sheetsError: unknown) {
        const errorMessage = sheetsError instanceof Error ? sheetsError.message : 'Unknown error';
        console.error('[ERR_GOOGLE_SHEETS] Failed to integrate with Google Sheets:', errorMessage);
        return NextResponse.json({ success: false, error: 'Service error. Please try again.' }, { status: 502 });
      }
    } else {
      console.warn('[WARN] Google Sheets credentials missing. Simulating success.');
    }

    return NextResponse.json({
      success: true,
      submission_id
    }, { status: 200 });

  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({
      success: false,
      error: 'An internal server error occurred. Please try again.'
    }, { status: 500 });
  }
}
