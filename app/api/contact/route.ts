import { NextResponse } from "next/server";
import { Resend } from "resend";
import { links } from "@/lib/data";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload in request." }, { status: 400 });
  }

  // Honeypot anti-spam protection
  if (typeof body.bot_field === "string" && body.bot_field.trim().length > 0) {
    return NextResponse.json({ ok: true, id: "filtered" });
  }

  try {
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // Validation
    if (!name || name.length > 100) {
      return NextResponse.json(
        { error: "Please enter a valid name (max 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length > 5000) {
      return NextResponse.json(
        { error: "Please enter a message (max 5000 characters)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact_api] RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured. Please set RESEND_API_KEY in .env.local.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "krishnarammhd@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "ramkrishna-portfolio <portfolio@ram02krishna.me>";

    const now = new Date();
    const istDate = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(now);
    const istTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);
    const timestamp = `${istDate} • ${istTime} IST`;

    const timeShort =
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now) + " IST";

    const cleanSnippet = message.replace(/\s+/g, " ").trim().slice(0, 35);
    const subjectLine = cleanSnippet
      ? `[Portfolio] ${name} (${timeShort}) — "${cleanSnippet}${message.length > 35 ? "..." : ""}"`
      : `[Portfolio] Message from ${name} (${timeShort})`;

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: subjectLine,
      text: `[New Portfolio Transmission]\n\nFrom: ${name}\nEmail: ${email}\nTime: ${timestamp}\n\nMessage:\n${message}\n`,
      html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Portfolio Message</title>
    <style>
      body, table, td, p, a, li, blockquote {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table, td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        outline: none;
        text-decoration: none;
      }
      @media only screen and (max-width: 600px) {
        .email-wrapper {
          padding: 12px 6px !important;
        }
        .terminal-window {
          border-radius: 8px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        .terminal-header {
          padding: 10px 12px !important;
        }
        .header-title {
          font-size: 11px !important;
          max-width: 180px !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
        .terminal-body {
          padding: 16px 12px !important;
        }
        .meta-row {
          display: block !important;
          width: 100% !important;
        }
        .meta-cell {
          display: block !important;
          width: 100% !important;
          padding: 2px 0 !important;
          box-sizing: border-box !important;
        }
        .payload-box {
          padding: 12px 14px !important;
          font-size: 13px !important;
        }
        .cta-button {
          display: block !important;
          width: 100% !important;
          text-align: center !important;
          padding: 12px 16px !important;
          box-sizing: border-box !important;
        }
        .footer-table td {
          display: block !important;
          width: 100% !important;
          text-align: left !important;
          padding: 2px 0 !important;
        }
      }
    </style>
  </head>
  <body class="email-wrapper" style="margin: 0; padding: 36px 16px; background-color: #f1f5f9; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; -webkit-font-smoothing: antialiased; color: #f5f5f7;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
      <tr>
        <td align="center">
          <!-- Terminal Window Container (Apple MacBook Terminal #1e1e1e) -->
          <div class="terminal-window" style="max-width: 620px; width: 100%; background-color: #1e1e1e; border: 1px solid #38383a; border-radius: 12px; overflow: hidden; box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(56, 56, 58, 0.6); text-align: left;">
            
            <!-- Terminal Window Header (macOS Titlebar #28282c without LIVE badge) -->
            <div class="terminal-header" style="background-color: #28282c; padding: 12px 16px; border-bottom: 1px solid #38383a;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td align="left" style="vertical-align: middle; width: 55px; white-space: nowrap;">
                    <span style="display: inline-block; width: 11px; height: 11px; border-radius: 50%; background-color: #ff5f56; border: 1px solid rgba(224, 68, 62, 0.4); margin-right: 5px;"></span>
                    <span style="display: inline-block; width: 11px; height: 11px; border-radius: 50%; background-color: #ffbd2e; border: 1px solid rgba(222, 161, 35, 0.4); margin-right: 5px;"></span>
                    <span style="display: inline-block; width: 11px; height: 11px; border-radius: 50%; background-color: #27c93f; border: 1px solid rgba(26, 171, 41, 0.4);"></span>
                  </td>
                  <td align="center" class="header-title" style="color: #98989d; font-size: 12px; font-weight: 500; padding: 0 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    portfolio@ram02krishna: ~/inbox
                  </td>
                  <td align="right" style="vertical-align: middle; width: 55px;">
                    <!-- Spacer for symmetry -->
                  </td>
                </tr>
              </table>
            </div>

            <!-- Terminal Body -->
            <div class="terminal-body" style="padding: 24px;">
              <!-- Command Prompt Line -->
              <div style="color: #98989d; font-size: 12.5px; margin-bottom: 16px; line-height: 1.5; word-break: break-all;">
                <span style="color: #10b981; font-weight: bold;">ramkrishna@portfolio</span>:<span style="color: #06b6d4;">~</span>$ ./read_transmission --status=delivered
              </div>

              <!-- Metadata Box -->
              <div style="background-color: #141416; border: 1px solid #38383a; border-radius: 8px; padding: 12px 16px; margin-bottom: 18px;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 13px;">
                  <tr class="meta-row">
                    <td class="meta-cell" style="color: #06b6d4; width: 90px; padding: 5px 0; font-weight: 600; white-space: nowrap;">$ sender:</td>
                    <td class="meta-cell" style="color: #f5f5f7; padding: 5px 0; font-weight: 600; word-break: break-word;">${escapeHtml(name)}</td>
                  </tr>
                  <tr class="meta-row">
                    <td class="meta-cell" style="color: #06b6d4; width: 90px; padding: 5px 0; font-weight: 600; white-space: nowrap;">$ email:</td>
                    <td class="meta-cell" style="color: #f5f5f7; padding: 5px 0; word-break: break-all;">
                      <a href="mailto:${escapeHtml(email)}" style="color: #10b981; text-decoration: underline;">
                        ${escapeHtml(email)}
                      </a>
                    </td>
                  </tr>
                  <tr class="meta-row">
                    <td class="meta-cell" style="color: #98989d; width: 90px; padding: 5px 0; font-size: 11.5px; white-space: nowrap;">$ received:</td>
                    <td class="meta-cell" style="color: #d4d4d8; padding: 5px 0; font-size: 11.5px; word-break: break-word;">${timestamp}</td>
                  </tr>
                </table>
              </div>

              <!-- Message Payload Box -->
              <div style="margin-bottom: 22px;">
                <div style="color: #98989d; font-size: 11px; margin-bottom: 6px; letter-spacing: 0.5px;">
                  // payload stream:
                </div>
                <div class="payload-box" style="background-color: #141416; border: 1px solid #38383a; border-left: 3px solid #10b981; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 13.5px; line-height: 1.65; color: #f5f5f7; word-break: break-word; overflow-wrap: break-word;">
${escapeHtml(message)}
                </div>
              </div>

              <!-- Quick-Action CTA -->
              <div style="padding-top: 6px; margin-bottom: 18px;">
                <a href="mailto:${escapeHtml(email)}?subject=Re:%20Portfolio%20Inquiry" class="cta-button" style="display: inline-block; background-color: #10b981; color: #121214; font-weight: 700; font-size: 12.5px; padding: 11px 20px; border-radius: 6px; text-decoration: none; letter-spacing: 0.3px; transition: opacity 0.2s;">
                  ↵ Reply to ${escapeHtml(name)}
                </a>
              </div>

              <!-- Terminal Process Exit Footer -->
              <div style="border-top: 1px solid #28282c; padding-top: 14px; margin-top: 16px;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="footer-table" style="border-collapse: collapse; font-size: 11px; color: #98989d;">
                  <tr>
                    <td align="left" style="padding: 3px 0;">
                      <span style="color: #10b981;">✓</span> process exited with status 0 (success)
                    </td>
                    <td align="right" style="padding: 3px 0;">
                      <a href="https://ram02krishna.me" style="color: #98989d; text-decoration: none;">ram02krishna.me</a>
                    </td>
                  </tr>
                </table>
              </div>

            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
      `.trim(),
    });

    if (emailResult.error) {
      console.error("[contact_api] Resend API error:", emailResult.error);
      return NextResponse.json(
        { error: emailResult.error.message || "Failed to send message via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: emailResult.data?.id });
  } catch (err: unknown) {
    console.error("[contact_api] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
