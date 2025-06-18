export function contactSuccessTemplate(name: string) {
  return `
<table width="100%" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0" style="padding: 40px 0; font-family: sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
        <tr>
          <td style="text-align: left;">
            <h2 style="color: #153e35;">Thanks for contacting us, ${name}</h2>
            <p style="color: #333333; font-size: 16px; line-height: 1.6;">
              We’ve received your message and appreciate you reaching out.
              Our team is reviewing your request and will get back to you shortly.
              In the meantime, feel free to browse our website or check out our FAQ section.
            </p>

            <p style="color: #333333; font-size: 16px; line-height: 1.6;">Have a great day!</p>

            <p style="margin-top: 30px;">
              <a href="https://decods.com" style="background-color: #279A8D; color: white; padding: 12px 24px; text-decoration: none; border-radius: 12px; display: inline-block; font-weight: bold;">Visit Website</a>
            </p>

            <hr style="margin-top: 40px; border: none; border-top: 1px solid #ddd;">

            <table align="center" style="margin-top: 20px;">
              <tr>
                <td colspan="4" style="text-align: center; font-size: 14px; color: #666;">Connect with us:</td>
              </tr>
              <tr>
                <td style="padding: 10px;">
                  <a href="https://www.facebook.com/decodscom"><img src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750181399/facebook_pisdii.png" alt="Facebook" width="24" height="24"></a>
                </td>
                <td style="padding: 10px;">
                  <a href="https://www.instagram.com/decods_com"><img src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750181370/social_azs1fi.png" alt="Instagram" width="24" height="24"></a>
                </td>
                <td style="padding: 10px;">
                  <a href="https://www.linkedin.com/company/decods"><img src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750181376/linkedin_dxlosf.png" alt="LinkedIn" width="24" height="24"></a>
                </td>
                <td style="padding: 10px;">
                  <a href="https://x.com/decods_com"><img src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750181363/twitter_iy5h0b.png" alt="X" width="24" height="24"></a>
                </td>
              </tr>
            </table>

            <p style="text-align: center; font-size: 14px; color: #444; margin-top: 20px;">
              <span style="margin: 0 10px;">
                <strong>WhatsApp:</strong>
                <a href="https://decods.com/whatsapp" style="color: #279A8D; text-decoration: none;">+1 (929) 650-9060</a>
              </span>
              <span style="margin: 0 10px;">
                <strong>Telegram:</strong>
                <a href="https://decods.com/telegram" style="color: #279A8D; text-decoration: none;">@decods</a>
              </span>
            </p>

            <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 30px;">
              This is an automated message confirming we’ve received your request.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
	`;
}
