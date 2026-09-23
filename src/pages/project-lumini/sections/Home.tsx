import Container from "../../../components/layout/Container";

export default function Home() {
  return (
    <div className="mt-40">
      <Container>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <img
              src="/lumini-logo.jpg"
              alt="Logo do projeto"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl lg:text-[32px] font-semibold text-brand-ink">
              Projeto Lumini
            </h1>
          </div>
          <a
            href="https://link-do-projeto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-base font-medium rounded-full px-8 py-4 text-center transition-[filter] duration-200 hover:brightness-90"
            style={{ backgroundImage: "var(--secondary-gradient)" }}
          >
            Acessar projeto
          </a>
        </div>

        <div className="mb-14">
          <div className="w-full aspect-[16/9] rounded-[20px] bg-[#c4c4c4] flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Carrossel</span>
          </div>
        </div>

        <div className="mb-14">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-brand-ink mb-4">
              Sobre o projeto
            </h2>
            <p className="text-[#515151] text-lg leading-8 text-justify">
              A Lumini, empresa júnior do curso de Medicina, está com a ideia de desenvolver um aplicativo com o objetivo de auxiliar os estudantes a organizarem seu currículo desde a graduação, pensando principalmente na residência médica.
              A ideia é que o aluno consiga colocar na plataforma as instituições e os programas de residência pelos quais possui interesse, podendo selecionar pelo menos três áreas da Medicina. A partir disso, o aplicativo mostraria os critérios exigidos por cada instituição e daria um direcionamento por meio de um checklist personalizado para cada estudante.
              Por meio da plataforma, o graduando poderia acompanhar todo o seu progresso, tanto a parte que já foi realizada quanto aquilo que ainda está em andamento. Além disso, o aplicativo poderia orientar o estudante sobre como melhorar seu currículo, seja por meio de iniciação científica, projetos de extensão, monitorias, publicações, participação em eventos, estágios e outras atividades que podem contar na pontuação.
              A proposta visa reunir todas as informações acadêmicas em um único lugar, o que pouparia esforços na hora de organizar essas informações e fazer o planejamento do plano de carreira desde o início da faculdade de Medicina. Dessa forma, o estudante não deixaria tudo para quando estivesse muito próximo de prestar residência para a área desejada.
            </p>
          </div>
        </div>

      </Container >
    </div >
  )
}