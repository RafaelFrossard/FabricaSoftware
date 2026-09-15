import type { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    className?: string
}

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <div
            className={twMerge(
                "inline-block text-white text-base font-medium rounded-full px-8 py-4 text-center",
                className
            )}
            style={{ backgroundImage: "var(--secondary-gradient)" }}
            {...rest}
        >
            {children}
        </div>
    )
}