import ProjectModelPage from "../../components/ProjectModelPage"

const projectImages = [
  "/images/lumini/home.png",
  "/images/lumini/checklist.png",
  "/images/lumini/programs.png",
  "/images/lumini/profile.png",
]

export default function Home() {
  return (
    <ProjectModelPage
      logo="/images/lumini/logo.jpg"
      title="Projeto Lumini"
      images={projectImages}
      actionHref="https://stitch.withgoogle.com/projects/12263246816053165219"
      description="A Lumini, empresa júnior do curso de Medicina, está com a ideia de desenvolver um aplicativo com o objetivo de auxiliar os estudantes a organizarem seu currículo desde a graduação, pensando principalmente na residência médica.                                                                                                                                                                        
A ideia é que o aluno consiga colocar na plataforma as instituições e os programas de residência pelos quais possui interesse, podendo selecionar pelo menos três áreas da Medicina. A partir disso, o aplicativo mostraria os critérios exigidos por cada instituição e daria um direcionamento por meio de um checklist personalizado para cada estudante.                                                                                                                                                                        
Por meio da plataforma, o graduando poderia acompanhar todo o seu progresso, tanto a parte que já foi realizada quanto aquilo que ainda está em andamento. Além disso, o aplicativo poderia orientar o estudante sobre como melhorar seu currículo, seja por meio de iniciação científica, projetos de extensão, monitorias, publicações, participação em eventos, estágios e outras atividades que podem contar na pontuação.                                                                                                                                                                        
A proposta visa reunir todas as informações acadêmicas em um único lugar, o que pouparia esforços na hora de organizar essas informações e fazer o planejamento do plano de carreira desde o início da faculdade de Medicina. Dessa forma, o estudante não deixaria tudo para quando estivesse muito próximo de prestar residência para a área desejada.                                                                                                                                                                        "
    />
  )
}