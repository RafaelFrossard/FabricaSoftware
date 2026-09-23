import Container from "../../../components/layout/Container";

const members = [
  { name: "Fernanda Ferrari", role: "Líder de Equipe", photo: "/images/home/fernanda.jpg" },
  { name: "Anderson Burnes", role: "Professor/Orientador", photo: "/images/home/burnes.jpg" },
  { name: "João", role: "Desenvolvimento", photo: "/images/home/joao.jpeg" },
  { name: "Julia", role: "Desenvolvimento", photo: "/images/home/julia.jpeg" },
  { name: "Rafael", role: "Desenvolvimento", photo: "/images/home/rafael.jpeg" },
  { name: "Thaila", role: "Desenvolvimento", photo: "/images/home/thaila.png" },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#f5f5f5] py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-[32px] font-semibold text-[#002A52] mb-4">
            Quem cria com você
          </h2>

          <p className="text-base md:text-lg text-black/70 leading-8">
            Conheça quem une ideias, tecnologia e cuidado para
            dar forma ao seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full border-4 border-white ring-1 ring-[#002A52]/15">
                <img
                  src={member.photo}
                  alt={`Foto de ${member.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width={144}
                  height={144}
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#002A52]">
                {member.name}
              </h3>

              <p className="mt-1 text-sm text-black/60">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}