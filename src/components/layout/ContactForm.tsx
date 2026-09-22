import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { contactSchema, type ContactFormData } from "../../schema/contactSchema";
import { formatPhone } from "../../utils/formatPhone";
import Button from "./Button";

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

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
        defaultValues: { name: "", email: "", phone: "", message: "" },
    });

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Erro ao enviar. Tente novamente.");
            }

            setStatus("success");
            reset();
            onSuccess?.();
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar.");
        }
    };

    return (
        <div className={twMerge("w-full", className)}>
            {title && (
                <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
            )}
            {subtitle && (
                <p className="text-[#515151] text-base leading-7 mb-6">{subtitle}</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        autoComplete="name"
                        maxLength={50}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={twMerge(
                            "w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange",
                            errors.name ? "border-red-500 focus:border-red-500" : "border-black/15"
                        )}
                        {...register("name")}
                    />
                    {errors.name && (
                        <p id="name-error" role="alert" className="text-red-600 text-sm mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        maxLength={254}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={twMerge(
                            "w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange",
                            errors.email ? "border-red-500 focus:border-red-500" : "border-black/15"
                        )}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p id="email-error" role="alert" className="text-red-600 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                        Telefone <span className="text-black/40">(opcional)</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        maxLength={15}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={twMerge(
                            "w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange",
                            errors.phone ? "border-red-500 focus:border-red-500" : "border-black/15"
                        )}
                        {...register("phone", {
                            onChange: (e) => {
                                const formatted = formatPhone(e.target.value);
                                setValue("phone", formatted, { shouldValidate: true });
                            },
                        })}
                    />
                    {errors.phone && (
                        <p id="phone-error" role="alert" className="text-red-600 text-sm mt-1">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        maxLength={2000}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={twMerge(
                            "w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:border-brand-orange",
                            errors.message ? "border-red-500 focus:border-red-500" : "border-black/15"
                        )}
                        {...register("message")}
                    />
                    {errors.message && (
                        <p id="message-error" role="alert" className="text-red-600 text-sm mt-1">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="disabled:opacity-10"
                    style={{ backgroundImage: "var(--secondary-gradient)" }}
                >
                    {status === "sending" ? "Enviando..." : submitLabel}
                </Button>

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