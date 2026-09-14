import { officeImage } from "../assets/figmaAssets";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 lg:px-16 py-16 text-center">
     <h2 className="text-black text-2xl lg:text-[32px] font-semibold leading-snug max-w-3xl mx-auto mb-12">
    <span className="text-[#002A52]">
      Sua ideia ganha forma aqui,
    </span>{" "}
    com tecnologia e uma equipe que constrói junto com você.
  </h2>

      <div className="rounded-[20px] overflow-hidden max-w-4xl mx-auto shadow-lg">
        <img
          src={officeImage}
          alt="Equipe reunida em escritório"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
