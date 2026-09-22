import { 
  faInstagram, 
  faLinkedin, 
  faSpotify, 
  faWhatsapp, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerLinks = [
  { label: "Portfolio", href: "#areas" },
  { label: "Equipe", href: "#team" },
  { label: "Projetos", href: "#projects" },
  { label: "Entre em Contato", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/integrowintegrado/",
    icon: faInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=554435182555&text&type=phone_number&app_absent=0",
    icon: faWhatsapp,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@integrowintegrado",
    icon: faYoutube,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/5vN5ipI4GgxxYTWGjIXr8R",
    icon: faSpotify,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/showcase/integrowecossistema/",
    icon: faLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--main-color)] text-white pt-20 pb-8">
      <div className="mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div>
            <a href="/" className="text-2xl font-bold block mb-4">
              <img src="/logo-horizontal-negativo.svg" className="w-40" alt="Logo" />
            </a>
            <p className="text-sm text-white/80 leading-7 mb-4">
              Desenvolvemos soluções de software para transformar ideias em projetos que geram valor.
            </p>
            <a 
              href="mailto:fabricasoftware@integrowintegrado.br"
              className="text-sm text-white/80 mb-4 hover:text-brand-orange transition-colors block"
            >
              fabricasoftware@integrowintegrado.br
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange-dark transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium text-[17px] mb-5">Sobre Nós</p>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-brand-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-[17px] mb-5">Contate-nos</p>
            <p className="text-sm text-white/80 leading-7 mb-4">
              Estamos disponíveis para conversar sobre seu projeto, tirar dúvidas e entender como podemos ajudar.
            </p>
            <a 
              href="tel:+08000007005" 
              className="text-sm text-white/80 mb-4 hover:text-brand-orange transition-colors block"
            >
              <FontAwesomeIcon icon={faPhone} /> 0800 000 7005
            </a>
          </div>
        </div>

        <hr className="border-white/10 mb-6" />

        <p className="text-center text-[13px] text-white/70">
          © 2026 Fábrica de Software. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}