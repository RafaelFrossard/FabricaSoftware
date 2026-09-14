import type { ReactNode } from "react"

interface ButtonProps {
    link: string
    children: ReactNode
}

export default function Button({link, children}:ButtonProps) {
    return (
        <a
            href={link}
            className="inline-block text-white text-base font-medium rounded-full px-8 py-4"
            style={{
                backgroundImage: "var(--secondary-gradient)",
            }}
        >
            {children}
        </a>
    )
}