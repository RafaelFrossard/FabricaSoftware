import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
    link: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export default function Button({link, children, className, onClick}:ButtonProps) {
    return (
        <a
            href={link}
            className={twMerge("inline-block text-white text-base font-medium rounded-full px-8 py-4 text-center", className)}
            style={{
                backgroundImage: "var(--secondary-gradient)",
            }}
            onClick={onClick}
        >
            {children}
        </a>
    )
}