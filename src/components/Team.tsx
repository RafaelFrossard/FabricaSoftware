import { teamPhotos } from "../assets/figmaAssets";

const members = [
  { name: "John peter", role: "COO", photo: teamPhotos.bill },
  { name: "John peter", role: "COO", photo: teamPhotos.beverly },
  { name: "John peter", role: "COO", photo: teamPhotos.claudia },
  { name: "John peter", role: "COO", photo: teamPhotos.avatar },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <h2 className="text-2xl lg:text-[25px] font-semibold text-brand-ink mb-14">
          Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center gap-4"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="h-32 w-auto object-contain"
              />
              <div>
                <p className="font-semibold text-black text-lg">
                  {member.name}
                </p>
                <p className="text-[#8b8b8b] text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
