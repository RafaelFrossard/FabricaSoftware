interface ButtonProps {
    text: string
}

export default function Button({text}:ButtonProps) {
    return (
        <a
            href="#contact"
            className="inline-block text-white text-base font-medium rounded-full px-8 py-4"
            style={{
                backgroundImage: "var(--secondary-gradient)",
            }}
        >
            {text}
        </a>
    )
}