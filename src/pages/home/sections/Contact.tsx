import Container from "../../../components/layout/Container";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f5] py-20">
      <Container>
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

          <ContactForm
            title=""
            submitLabel="Conte sua ideia"
          />
        </div>
      </Container>
    </section>
  );
}