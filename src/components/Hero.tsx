import { heroIllustration } from "../assets/figmaAssets";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7ef] to-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand-orange text-[20px] font-bold mb-3">
            Digital Marketing
          </p>
          <h1 className="text-4xl lg:text-[50px] leading-tight font-bold text-black mb-6">
            Work that we produce for our clients
          </h1>
          <p className="text-black/80 text-base leading-8 max-w-lg mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
          <a
            href="#contact"
            className="inline-block text-white text-base font-medium rounded-full px-8 py-4"
            style={{
              backgroundImage:
                "linear-gradient(99deg, rgb(250, 131, 5) 2%, rgb(251, 158, 60) 117%)",
            }}
          >
            Get more details
          </a>
        </div>

        <div className="relative">
          <img
            src={heroIllustration}
            alt="Ilustração de equipe trabalhando"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
