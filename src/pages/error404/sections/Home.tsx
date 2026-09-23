import Button from "../../../components/layout/Button"
import Container from "../../../components/layout/Container"

export default function Home() {
    return (
        <div className="min-h-[70vh] flex items-center pb-20 py-40">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img
                            src="/images/layout/macaco-dev.png"
                            alt="Página não encontrada"
                            className="w-full max-w-md"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-brand-ink mb-4">
                            404
                        </h1>
                        <p className="text-[#515151] text-lg leading-8 mb-8">
                            Ops! A página que você está procurando não existe.
                        </p>
                        <Button
                            href="/"
                        >
                            Voltar para o início
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}