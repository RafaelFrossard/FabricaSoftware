import { faFacebook, faInstagram, faSpotify, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerLinks = [
  { label: "Portfolio", href: "#areas" },
  { label: "Equipe", href: "#team" },
  { label: "Projetos", href: "#projects" },
  { label: "Entre em Contato", href: "#contact" },
];

function InstagramIcon() {
  return (
    <a target="_blank" href="https://www.instagram.com/integrowintegrado/">
      <FontAwesomeIcon icon={faInstagram}/>
    </a>
  );
}
function WhatsappIcon() {
  return (
    <a target="_blank" href="https://api.whatsapp.com/send/?phone=554435182555&text&type=phone_number&app_absent=0">
      <FontAwesomeIcon icon={faWhatsapp}/>
    </a>
  );
}
function YoutubeIcon() {
  return (
    <a target="_blank" href="https://www.youtube.com/@integrowintegrado">
      <FontAwesomeIcon icon={faYoutube}/>
    </a>
  );
}
function SpotifyIcon() {
  return (
    <a target="_blank" href="https://open.spotify.com/show/5vN5ipI4GgxxYTWGjIXr8R">
      <FontAwesomeIcon icon={faSpotify}/>
    </a>
  );
}
function LinkedinIcon() {
  return (
    <a target="_blank" href="https://www.linkedin.com/showcase/integrowecossistema/">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21h-4z" />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--main-color)] text-white pt-20 pb-8">
      <div className="mx-auto px-8 lg:px-16 ">
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div>
            <a href="/" className="text-2xl font-bold block mb-4">
              <img src="/logo-horizontal-negativo.svg" className="w-40" alt="" />
            </a>
            <p className="text-sm text-white/80 leading-7 mb-4">
              Desenvolvemos soluções de software para transformar ideias em projetos que geram valor.
            </p>
            <a href="mailto:fabricasoftware@integrowintegrado.br"
              className="text-sm text-white/80 mb-4 hover:text-brand-orange transition-colors block"
            >
              fabricasoftware@integrowintegrado.br
            </a>
            <div className="flex items-center gap-3">
              {[InstagramIcon, WhatsappIcon, YoutubeIcon, SpotifyIcon, LinkedinIcon].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange-dark transition-colors"
                  >
                    <Icon />
                  </a>
                )
              )}
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
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+08000007005" target="_blank" className="text-sm text-white/80 pl-1">0800 000 7005</a >
              </div>
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
