import Button from "../../../components/layout/Button";
import Container from "../../../components/layout/Container";

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#fff7ef] to-white pt-20">
      <Container>
        <div className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-orange text-[20px] font-bold mb-3">
              Fábrica de Software do Integrado
            </p>
            <h1 className="text-4xl lg:text-[50px] leading-tight font-bold text-black mb-6">
              Seu próximo desafio pode virar uma solução digital.
            </h1>
            <p className="text-black/80 text-base leading-8 max-w-lg mb-10">
              Toda solução começa com uma boa conversa. Entendemos os desafios da sua empresa e
              desenvolvemos software para simplificar processos e colocar ideias em prática.
              Tudo com colaboração, responsabilidade e atenção ao que importa para o seu negócio.
            </p>
            <Button href="#contact">Conte sua ideia</Button>
          </div>

          <div className="relative">
            <img
              src="imagem-home.svg"
              alt="Ilustração de equipe trabalhando"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
