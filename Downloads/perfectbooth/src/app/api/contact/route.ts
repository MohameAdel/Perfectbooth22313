import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, service, location, timeline, details, website } = body;

    // Honeypot spam check (website field should be empty)
    if (website && website.trim() !== '') {
      // Return a simulated success to prevent spam bot retry
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

    // Log the message details for server logs (in production, you'd send an email via Resend / Nodemailer)
    console.log('--- NEW CONTACT FORM INQUIRY ---');
    console.log(`Name: ${fullName}`);
    console.log(`Company: ${company || 'N/A'}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Location: ${location || 'N/A'}`);
    console.log(`Timeline: ${timeline}`);
    console.log(`Details: ${details || 'N/A'}`);
    console.log('--------------------------------');

    // NOTE: To connect a real mailer later (e.g. Resend), configure environment variables:
    // const resendApiKey = process.env.RESEND_API_KEY;
    // const toEmail = process.env.CONTACT_EMAIL_TO || 'info@perfectbooth-events.com';
    // Then call the mailer client here.

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({
      success: false,
      error: 'An internal server error occurred. Please try again.'
    }, { status: 500 });
  }
}
