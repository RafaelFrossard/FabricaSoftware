import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Informe seu nome (mínimo de 2 caracteres).")
        .max(50, "O nome pode ter no máximo 50 caracteres.")
        .regex(
            /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]*$/u,
            "Use apenas letras, espaços, apóstrofo, ponto ou hífen no nome."
        ),

    email: z
        .string()
        .trim()
        .min(1, "Informe seu email.")
        .max(254, "O email pode ter no máximo 254 caracteres.")
        .regex(
            /^(?!.*\.\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/,
            "Digite um email válido, como nome@empresa.com."
        ),

    phone: z
        .string()
        .trim()
        .max(20, "O telefone pode ter no máximo 20 caracteres.")
        .refine(
            (value) =>
                value === "" ||
                /^(?:\+?55\s?)?\(?[1-9]{2}\)?\s?(?:9\d{4}|[2-5]\d{3})[-\s]?\d{4}$/.test(value) ||
                /^0(?:800|300|500|900)\s?\d{3}\s?\d{4}$/.test(value),
            "Digite um telefone válido, por exemplo (44) 99999-9999 ou 0800 000 0000."
        )
        .optional(),

    message: z
        .string()
        .trim()
        .min(10, "Escreva pelo menos 10 caracteres para entendermos sua ideia.")
        .max(2000, "A mensagem pode ter no máximo 2000 caracteres.")
        .regex(/[\p{L}\p{N}]/u, "A mensagem precisa conter texto, não apenas símbolos.")
        .regex(
            /^[^\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]*$/,
            "A mensagem contém caracteres inválidos."
        ),
});

export type ContactFormData = z.infer<typeof contactSchema>;