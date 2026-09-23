import Container from "../../../components/layout/Container";

const projects = [
  { name: "Projeto Lumini", link: "project-lumini", image: "/images/lumini/logo.jpg" },
  { name: "Projeto WeighCare", link: "project-weightcare", image: "/images/weightcare/weightcare-logo.webp" },
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
          {projects.map((project, index) => (

            <a href={project.link}>
              <div
                key={index}
                className="group relative rounded-[20px] overflow-hidden aspect-[16/10] bg-[#c4c4c4] cursor-pointer border border-opacity-5"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold text-center px-4">
                    {project.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section >
  );
}