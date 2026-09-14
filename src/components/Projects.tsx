import { projectImages } from "../assets/figmaAssets";

export default function Portfolio() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 lg:px-16 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-2xl lg:text-[32px] font-semibold text-[#002A52] mb-4">
          Ideias que ganham forma
        </h2>

        <p className="text-black text-lg leading-8">
          Conheça alguns dos nossos projetos e veja como unimos
          criatividade, tecnologia e cuidado em cada detalhe.
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
    </section>
  );
}