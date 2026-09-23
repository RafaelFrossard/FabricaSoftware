import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { HashLink } from "react-router-hash-link"

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: undefined
}

type ButtonAsHashLink = {
    to: string
    href?: undefined
    className?: string
}

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
}

type ButtonProps = (ButtonAsLink | ButtonAsHashLink | ButtonAsButton) & {
    children: ReactNode
    className?: string
}

export default function Button({ children, className, href, to, ...rest }: ButtonProps) {
    const classes = twMerge(
        "inline-block text-white text-base font-medium rounded-full px-8 py-4 text-center transition-[filter] duration-200 hover:brightness-90",
        className
    )
    const style = { backgroundImage: "var(--secondary-gradient)" }

    if (to) {
        return (
            <HashLink to={to} className={classes} style={style}>
                {children}
            </HashLink>
        )
    }

    if (href) {
        return (
            <a href={href} className={classes} style={style} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        )
    }

    return (
        <button className={classes} style={style} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    )
}