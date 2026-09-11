import { officeImage } from "../assets/figmaAssets";

export default function AboutBanner() {
  return (
    <section className="max-w-7xl mx-auto px-8 lg:px-16 py-16 text-center">
      <p className="text-brand-ink text-lg lg:text-[25px] font-semibold leading-relaxed max-w-3xl mx-auto mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

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
