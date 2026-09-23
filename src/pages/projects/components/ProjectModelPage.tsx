import Container from "../../../components/layout/Container"
import Carousel from "./Carousel"

interface ProjectModelPageProps {
  logo: string
  title: string
  images: string[]
  description: string
  actionHref: string
  actionLabel?: string
}

export default function ProjectModelPage({
  logo,
  title,
  images,
  description,
  actionHref,
  actionLabel = "Acessar projeto",
}: ProjectModelPageProps) {
  return (
    <div className="mt-40">
      <Container>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt={`Logo ${title}`}
              className="w-16 h-16 rounded-full object-cover border border-black/20"
            />
            <h1 className="text-2xl lg:text-[32px] font-semibold text-brand-ink">
              {title}
            </h1>
          </div>
          <a
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-base font-medium rounded-full px-8 py-4 text-center transition-[filter] duration-200 hover:brightness-90"
            style={{ backgroundImage: "var(--secondary-gradient)" }}
          >
            {actionLabel}
          </a>
        </div>

        <div className="mb-14">
          <Carousel images={images} />
        </div>

        <div className="mb-14">
          <h2 className="text-xl lg:text-2xl font-semibold text-brand-ink mb-4">
            Sobre o projeto
          </h2>
          <p className="text-[#515151] text-lg leading-8 text-justify">
            {description}
          </p>
        </div>

      </Container>
    </div>
  )
}