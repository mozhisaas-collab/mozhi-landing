import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, service, details } = body;

    // ✅ Env validation (important for Vercel)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'pratheep@mozhisolution.com';

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error: RESEND_API_KEY missing' },
        { status: 500 }
      );
    }

    // ✅ Create resend instance INSIDE function
    const resend = new Resend(RESEND_API_KEY);

    // Validation
    if (!firstName || !lastName || !email || !service) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Format service name properly
    const formatServiceName = (service) => {
      return service
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const emailSubject = `New Quote Request - ${firstName} ${lastName}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #1f2937; 
              background-color: #f3f4f6;
              padding: 20px 0;
            }
            .email-wrapper { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #ffffff;
            }
            .header { 
              background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); 
              color: #ffffff; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 { 
              font-size: 28px; 
              font-weight: 700; 
              margin: 0 0 8px 0; 
              letter-spacing: -0.5px;
            }
            .header p { 
              font-size: 16px; 
              margin: 0; 
              opacity: 0.95; 
              font-weight: 400;
            }
            .content { 
              background: #ffffff; 
              padding: 40px 30px; 
            }
            .intro-text {
              font-size: 15px;
              color: #4b5563;
              margin-bottom: 32px;
              line-height: 1.7;
            }
            .field { 
              margin-bottom: 28px; 
            }
            .label { 
              font-weight: 600; 
              color: #111827; 
              margin-bottom: 10px; 
              font-size: 13px; 
              text-transform: uppercase; 
              letter-spacing: 0.8px; 
              display: block;
            }
            .value { 
              background: #f9fafb; 
              padding: 16px 18px; 
              border-radius: 6px; 
              border: 1px solid #e5e7eb; 
              color: #1f2937; 
              font-size: 15px;
              line-height: 1.6;
              word-wrap: break-word;
            }
            .divider {
              height: 1px;
              background-color: #e5e7eb;
              margin: 32px 0;
            }
            .footer { 
              text-align: center; 
              margin-top: 40px; 
              padding-top: 24px;
              border-top: 1px solid #e5e7eb;
            }
            .footer p { 
              color: #6b7280; 
              font-size: 13px; 
              margin: 0;
              line-height: 1.6;
            }
            .footer-time {
              color: #9ca3af;
              font-size: 12px;
              margin-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="header">
              <h1>New Quote Request</h1>
              <p>Mozhi Solutions</p>
            </div>

            <div class="content">
              <p class="intro-text">
                You have received a new quote request. Please review the details below and respond accordingly.
              </p>

              <div class="field">
                <span class="label">Contact Name</span>
                <div class="value">${firstName} ${lastName}</div>
              </div>

              <div class="field">
                <span class="label">Email Address</span>
                <div class="value">${email}</div>
              </div>

              ${company ? `
              <div class="field">
                <span class="label">Company</span>
                <div class="value">${company}</div>
              </div>` : ''}

              <div class="field">
                <span class="label">Service Requested</span>
                <div class="value">${formatServiceName(service)}</div>
              </div>

              ${details ? `
              <div class="divider"></div>
              <div class="field">
                <span class="label">Project Details</span>
                <div class="value">${details.replace(/\n/g, '<br>')}</div>
              </div>` : ''}

              <div class="footer">
                <p><strong>Quote Request Received</strong></p>
                <p class="footer-time">${new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
NEW QUOTE REQUEST - Mozhi Solutions

CONTACT NAME
${firstName} ${lastName}

EMAIL ADDRESS
${email}

${company ? `COMPANY\n${company}\n` : ''}
SERVICE REQUESTED
${formatServiceName(service)}

${details ? `PROJECT DETAILS\n${details}\n` : ''}

Quote Request Received: ${new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    })}
    `;

    await resend.emails.send({
      from: 'Mozhi Solutions <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll get back to you within 2 hours during business days." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
