import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  title = "Conte sua ideia",
  subtitle,
  submitLabel = "Enviar mensagem",
  successMessage = "Mensagem enviada! Em breve entraremos em contato.",
  className,
  onSuccess,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Erro ao enviar. Tente novamente.");
      }

      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  }

  return (
    <div className={twMerge("w-full", className)}>
      {title && (
        <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-[#515151] text-base leading-7 mb-6">{subtitle}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-black/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-black/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
            Telefone <span className="text-black/40">(opcional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-black/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-black/15 rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-block text-white text-base font-medium rounded-full px-8 py-4 disabled:opacity-60"
          style={{ backgroundImage: "var(--secondary-gradient)" }}
        >
          {status === "sending" ? "Enviando..." : submitLabel}
        </button>

        {status === "success" && (
          <p className="text-green-700 text-sm">{successMessage}</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}