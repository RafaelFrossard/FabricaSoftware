import { officeImage } from "../../assets/figmaAssets";
import Container from "../layout/Container";

export default function About() {
  return (
    <section id="about" className="py-16 text-center">
      <Container>
        <p className="text-brand-ink text-lg lg:text-[25px] font-semibold leading-relaxed max-w-3xl mx-auto mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
  
        <div className="rounded-[20px] overflow-hidden max-w-4xl mx-auto shadow-lg">
          <img
            src={officeImage}
            alt="Equipe reunida em escritório"
            className="w-full h-auto object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
