import {
  Smartphone,
  Monitor,
  Gamepad2,
  Glasses,
  Box,
  Cuboid,
} from "lucide-react";
import Container from "../layout/Container";

interface AreasItem {
  icon: React.ReactNode;
  label: string;
}

const areas: AreasItem[] = [
  { icon: <Smartphone size={28} />, label: "Mobile Game Development" },
  { icon: <Monitor size={28} />, label: "PC Game Development" },
  { icon: <Gamepad2 size={28} />, label: "PS4 Game Development" },
  { icon: <Glasses size={28} />, label: "AR/VR Solutions" },
  { icon: <Box size={28} />, label: "AR/ VR design" },
  { icon: <Cuboid size={28} />, label: "3D Modelings" },
];

export default function Areas() {
  return (
    <section id="areas" className="py-16">
      <Container>
        <h2 className="text-2xl lg:text-[30px] font-semibold text-brand-ink mb-6">
          Lorem Ipsum
        </h2>
        <p className="text-brand-muted text-base max-w-2xl leading-8 mb-14">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
          text ever since the 1500s,
        </p>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {areas.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center text-center gap-4 group cursor-pointer"
            >
              <div className="h-[65px] w-[65px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-brand-orange-dark group-hover:bg-brand-orange-dark group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <p className="text-sm font-medium text-black">{service.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
