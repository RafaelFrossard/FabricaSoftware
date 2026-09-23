import ProjectModelPage from "../../components/ProjectModelPage"

const projectImages = [
  "/images/weightcare/home.png",
  "/images/weightcare/application.png",
  "/images/weightcare/progress.png",
  "/images/weightcare/status.png",
  "/images/weightcare/learn.png",
]

export default function Home() {
  return (
    <ProjectModelPage
      logo="/images/weightcare/weightcare-logo.webp"
      title="Projeto WeightCare"
      images={projectImages}
      actionHref="https://stitch.withgoogle.com/projects/4318972926796413732"
      description="Desenvolver e validar um aplicativo para o acompanhamento educativo e seguro do processo de emagrecimento, com monitoramento de indicadores corporais, hábitos, sintomas, conteúdos baseados em evidências e alertas educativos."/>
  )
}