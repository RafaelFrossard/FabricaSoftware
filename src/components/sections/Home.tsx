                                                                                                                                                                              import { heroIllustration } from "../../assets/figmaAssets";
import Button from "../layout/Button";
import Container from "../layout/Container";

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#fff7ef] to-white pt-20">
      <Container>
        <div className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-orange text-[20px] font-bold mb-3">
              Digital Marketing
            </p>
            <h1 className="text-4xl lg:text-[50px] leading-tight font-bold text-black mb-6">
              Work that we produce for our clients
            </h1>
            <p className="text-black/80 text-base leading-8 max-w-lg mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard.
            </p>
            <Button text="Entre em contato" />
          </div>
  
          <div className="relative">
            <img
              src={heroIllustration}
              alt="Ilustração de equipe trabalhando"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
