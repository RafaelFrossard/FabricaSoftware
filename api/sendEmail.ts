import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
    }

    const { data, error } = await resend.emails.send({
      from: "Formulário <onboarding@resend.dev>",
      to: ["rafaelfrossard076@gmail.com"],
      replyTo: email,
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone || "não informado"}\n\nMensagem:\n${message}`,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ error: "Erro ao processar a requisição." });
  }
}