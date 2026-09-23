import { useState } from "react";
import Button from "./Button";
import { HashLink } from "react-router-hash-link"

const navLinks = [
  { label: "Início", href: "/#home" },
  { label: "Sobre", href: "/#about" },
  { label: "Áreas de atuação", href: "/#areas" },
  { label: "Equipe", href: "/#team" },
  { label: "Projetos", href: "/#projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-[var(--main-color)] px-6 py-5 lg:px-16">
        <div className="flex items-center justify-between">

          <a href="/" className="shrink-0">
            <img
              src="/images/layout/logo-horizontal-negativo.svg"
              className="w-36 sm:w-40"
              alt="Logo"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <HashLink
                key={link.label}
                to={link.href}
                className="text-[15px] text-white transition-colors hover:text-brand-orange"
              >
                {link.label}
              </HashLink>
            ))}
          </nav>

          <Button className="hidden lg:inline-block" to="/#contact">
            Entrar em contato
          </Button>

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
                className={`h-0.5 w-full bg-white transition-all ${isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-[500px] pt-6" : "max-h-0"
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
            <Button
              className="mt-5"
              to="/#contact"
              onClick={() => setIsOpen(false)}>Entrar em contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}