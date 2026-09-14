import { projectImages } from "../../assets/figmaAssets";
import Container from "../layout/Container";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl lg:text-[25px] font-semibold text-brand-ink mb-4">
            Our Recent Projects
          </h2>
          <p className="text-brand-muted text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projectImages.map((src, i) => (
            <div
              key={i}
              className="rounded-[20px] overflow-hidden aspect-[16/10] bg-[#c4c4c4]"
            >
              <img
                src={src}
                alt={`Projeto ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
