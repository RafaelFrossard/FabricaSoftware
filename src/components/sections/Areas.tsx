
import {
  Monitor,
  Smartphone,
  Settings2,
  PenTool,
  Plug,
  ShoppingCart,
} from "lucide-react";

import Container from "../layout/Container";

interface AreasItem {
  icon: React.ReactNode;
  label: string;
  description: string;
}

const areas: AreasItem[] = [
  {
    icon: <Monitor size={28} />,
    label: "Desenvolvimento Web",
    description:
      "Sites institucionais, landing pages e plataformas responsivas.",
  },
  {
    icon: <Smartphone size={28} />,
    label: "Aplicativos",
    description: "Aplicativos modernos para iOS e Android.",
  },
  {
    icon: <Settings2 size={28} />,
    label: "Sistemas Personalizados",
    description:
      "Sistemas, dashboards e soluções sob medida para seu negócio.",
  },
  {
    icon: <PenTool size={28} />,
    label: "UI / UX Design",
    description:
      "Interfaces modernas focadas em usabilidade e experiência.",
  },
  {
    icon: <Plug size={28} />,
    label: "APIs e Integrações",
    description:
      "Conexão entre sistemas, APIs e plataformas de terceiros.",
  },
  {
    icon: <ShoppingCart size={28} />,
    label: "E-commerce",
    description: "Lojas virtuais preparadas para vender e crescer.",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-16">
      <Container>
        <h2 className="text-2xl lg:text-[30px] font-semibold text-brand-ink mb-6">
          Como podemos ajudar sua empresa?
        </h2>

        <p className="text-brand-muted text-base max-w-2xl leading-8 mb-14">
          Cada negócio tem suas próprias necessidades. Criamos sites,
          aplicativos e sistemas sob medida, pensando em quem vai usar
          e no que precisa funcionar melhor no dia a dia.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {areas.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="h-[65px] w-[65px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-brand-orange-dark group-hover:bg-brand-orange-dark group-hover:text-white transition-colors">
                {service.icon}
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-black">
                  {service.label}
                </p>

                <p className="text-xs leading-5 text-brand-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
