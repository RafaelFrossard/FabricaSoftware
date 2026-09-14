
const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Equipe", href: "#team" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50" >
      <div className="bg-cover bg-center py-6 px-8 lg:px-16 flex items-center justify-between bg-[var(--main-color)]">
        <a href="/" className="text-white font-bold text-2xl tracking-wide">
          <img src="/logo-horizontal-negativo.svg" className="w-40" alt="" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-[16px] hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="bg-white text-brand-orange-dark text-[13px] font-medium rounded-md px-5 py-2.5 hover:bg-brand-orange hover:text-white transition-colors"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
