import { ctaIllustration } from "../assets/figmaAssets";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={ctaIllustration}
          alt="Ilustração de time colaborando"
          className="w-full h-auto object-contain order-2 md:order-1"
        />

        <div className="order-1 md:order-2">
     <h2 className="text-2xl lg:text-[32px] font-semibold text-black mb-6 leading-snug">
  <span className="text-brand-blue">
    Vamos dar vida à sua ideia?
  </span>{" "}
  O primeiro passo é uma boa conversa.
</h2>
         <p className="text-[#515151] text-lg leading-8 mb-6">
  Na Fábrica de Software do Integrado, criamos sites e aplicativos
  com atenção ao que sua empresa precisa. Queremos conhecer sua
  rotina, entender os desafios e construir uma solução com você.
</p>
         <p className="text-[#515151] text-lg leading-8 mb-8">
  Acreditamos em relações próximas, preços acessíveis e
  responsabilidade em cada projeto. Vamos descobrir como a
  tecnologia pode facilitar o dia a dia do seu negócio?
</p>
          <a
            href="#contact"
            className="inline-block bg-brand-orange-dark text-white text-base px-9 py-4 hover:bg-brand-orange transition-colors"
          >
            Conte sua ideia
          </a>
        </div>
      </div>
    </section>
  );
}
