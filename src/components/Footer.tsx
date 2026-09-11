const companyLinks = ["Portfolio", "Careers", "Contact us"];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.8V3.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3.1h2.6v8h2.9z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.6.8-2.5 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.9 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.6.1-1.2.2-1.8.1.5 1.6 2 2.7 3.7 2.8A8 8 0 0 1 2 18.4a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.2z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21h-4z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <a href="/" className="text-2xl font-bold block mb-4">
              LOGO
            </a>
            <p className="text-sm text-white/80 leading-7 mb-4">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-sm text-white/80 mb-4">@Company.com</p>
            <div className="flex items-center gap-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map(
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
            <p className="font-medium text-[17px] mb-5">About us</p>
            <ul className="space-y-3 text-sm text-white/80">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-[17px] mb-5">Contact us</p>
            <p className="text-sm text-white/80 leading-7 mb-4">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="text-sm text-white/80">+9000 0000 000</p>
          </div>
        </div>

        <hr className="border-white/10 mb-6" />

        <p className="text-center text-[13px] text-white/70">
          Copyright ® 2021 Company All rights Reserved
        </p>
      </div>
    </footer>
  );
}
