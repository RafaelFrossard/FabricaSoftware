import { pinIcon, phoneIcon } from "../assets/figmaAssets";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#about" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Equipe", href: "#team" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full">
      {/* Top info bar
      <div className="hidden md:flex justify-end items-center gap-8 bg-[#001F3D] px-8 lg:px-16 py-2 text-[13px] text-brand-ink">
        <div className="flex items-center gap-2">
          <img src={pinIcon} alt="" className="h-3.5 w-3.5" />
          <span>Company Address type here</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={phoneIcon} alt="" className="h-3.5 w-3.5" />
          <span>+94 000 00000</span>
        </div>
      </div> */}

      {/* Main nav */}
      <div className="bg-cover bg-center py-6 px-8 lg:px-16 flex items-center justify-between bg-[#002A52]">
        <a href="/" className="text-white font-bold text-2xl tracking-wide">
          LOGO
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
