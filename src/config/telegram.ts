import { env } from "@/env";
import type { ContactFields } from "@/config/schemas";

export async function telegramMessageSender(message: String) {
  try {
    const url = `${env.TELEGRAM_URL}/sendMessage`;
    const data = {
      chat_id: env.TELEGREM_CHAT_ID,
      text: message,
      parse_mode: "HTML"
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const res = await fetch(url, options);
    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (e) {
    return false;
  }
}

export async function sendTelegramMessage({ name, email, message }: ContactFields) {
  const formattedMessage = `
    📬 <b>New Contact Form Submission </b>
    🤖 <b>Name:</b>
    ${name}
    📧<b>Email:</b>
    ${email}
    🗨️<b>Message:</b>
    ${message}
  `;
  return await telegramMessageSender(formattedMessage);
}
