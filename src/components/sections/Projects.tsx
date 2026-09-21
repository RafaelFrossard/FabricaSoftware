import Container from "../layout/Container";

const projectNames = [
  "Projeto 1",
  "Projeto 2",
  "Projeto 3",
  "Projeto 4",
  "Projeto 5",
  "Projeto 6",
];


const projectImages = [
  "imagem-projeto-1.svg",
  "imagem-projeto-2.svg",
  "imagem-projeto-3.svg",
  "imagem-projeto-4.svg",
  "imagem-projeto-5.svg",
  "imagem-projeto-6.svg",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl lg:text-[32px] font-semibold text-brand-ink mb-4">
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
              className="group relative rounded-[20px] overflow-hidden aspect-[16/10] bg-[#c4c4c4] cursor-pointer"
            >
              <img
                src={src}
                alt={`Projeto ${i + 1}`}
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  {projectNames[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}