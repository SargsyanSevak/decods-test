import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      phone,
      projectBudget,
      projectType,
      task,
      consent,
    } = body;

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    const data = `
		📩 New Project Inquiry
		
		👤 Name: ${fullName}
		📧 Email: ${email}
		🏢 Company: ${company}
		📞 Phone: ${phone}
		💰 Budget: ${projectBudget}
		🛠 Project Type: ${projectType}
    🔒 Consent : ${consent}
		📝 Task Description: ${task}
				`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: data,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
