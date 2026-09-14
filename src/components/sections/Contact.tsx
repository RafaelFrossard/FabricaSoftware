import { ctaIllustration } from "../../assets/figmaAssets";
import Container from "../layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f5f5] py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={ctaIllustration}
            alt="Ilustração de time colaborando"
            className="w-full h-auto object-contain order-2 md:order-1"
          />
  
          <div className="order-1 md:order-2">
            <h2 className="text-2xl lg:text-[30px] font-medium text-black mb-6 leading-tight">
              Lorem Ipsum is simply dummy text dummy text
            </h2>
            <p className="text-[#515151] text-base leading-8 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <p className="text-[#515151] text-base leading-8 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-orange-dark text-white text-base px-9 py-4 hover:bg-brand-orange transition-colors"
            >
              Read more
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
