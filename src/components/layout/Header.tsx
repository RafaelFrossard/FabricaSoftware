import { useState } from "react";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Equipe", href: "#team" },
  { label: "Projetos", href: "#projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-[var(--main-color)] px-6 py-5 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img
              src="/logo-horizontal-negativo.svg"
              className="w-36 sm:w-40"
              alt="Logo"
            />
          </a>

          {/* Menu desktop */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] text-white transition-colors hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão desktop */}
          <a
            href="#contact"
            className="hidden rounded-md bg-white px-5 py-2.5 text-[13px] font-medium text-brand-orange-dark transition-colors hover:bg-brand-orange hover:text-white lg:block"
          >
            Entrar em contato
          </a>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? "Fechar menu" : "Abrir menu"}
            </span>

            <div className="flex w-6 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-white transition-all ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] pt-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-[16px] text-white transition-colors hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-md bg-white px-5 py-3 text-center text-[13px] font-medium text-brand-orange-dark transition-colors hover:bg-brand-orange hover:text-white"
            >
              Contact us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}