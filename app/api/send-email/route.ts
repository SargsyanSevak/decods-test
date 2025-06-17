import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { NextRequest, NextResponse } from 'next/server';
import { contactSuccessTemplate } from '@/utils/emailTemplate';

const transport = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_MAIL_HOST,
  port: Number(process.env.NEXT_PUBLIC_MAIL_PORT),
  secure: Number(process.env.NEXT_PUBLIC_MAIL_PORT) === 465,
  auth: {
    user: process.env.NEXT_PUBLIC_MAIL_USER,
    pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
  },
} as SMTPTransport.Options);

type SendEmailDto = {
  sender: Mail.Address;
  recipient: Mail.Address;
  subject: string;
  html: string;
  text?: string;
};

 const sendEmail = async (dto: SendEmailDto) => {
  const { sender, recipient, subject, html, text } = dto;
 
  return await transport.sendMail({
    from: sender,
    to: recipient,
    subject,
    html,
    text,
  });
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const htmlMessage = contactSuccessTemplate(body.recipientName || 'Friend');
    const plainText = `Thanks for contacting us, ${body.recipientName || 'Friend'}.\nWe’ve received your message and will get back to you shortly.`;

    const sender = {
      name: 'Decods - Software company',
      address:process.env.NEXT_PUBLIC_MAIL_USER!,
    };
    const recipient = {
      name: body.recipientName,
      address: body.recipientEmail,
    };

    const result = await sendEmail({
      sender,
      recipient,
      subject: "Thank you for contacting us!",
      html: htmlMessage,
      text: plainText,
    });

    return NextResponse.json({
      accepted: result.accepted,
    });
  } catch (error) {
if(error){
  return NextResponse.json(
    { message: 'Unable to send email' },
    { status: 500 }
  );
}
  }
}
