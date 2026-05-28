"use client";
import Image from "next/image";

const clients = [
  {
    name: "Airtel",
    logo: "/assets/images/airtel logo.png",
    type: "image",
  },
  {
    name: "PolicyX",
    logo: "/assets/images/policyx_com_logo.jpg",
    type: "image",
  },
  {
    name: "Finqy",
    logo: "/assets/images/finqy_logo.png",
    type: "image",
  },
  {
    name: "Zoftware",
    logo: "/assets/images/zoftware logo.png",
    type: "image",
  },
  {
    name: "Beetel",
    logo: "/assets/images/log-img.jpg",
    type: "image",
  },
  {
    name: "Credilio",
    logo: "/assets/images/credilio-svg-logo.svg",
    type: "image",
  },
  {
    name: "Kajaria",
    logo: "/assets/images/kajaria_logo.png",
    type: "image",
  },
  {
    name: "Level Debt",
    logo: "/assets/images/level_debt_logo.jpg",
    type: "image",
  },
  {
    name: "Clarit",
    logo: "/assets/images/clarit-logo-new.webp",
    type: "image",
  },
];

// Duplicate for seamless infinite loop
const allClients = [...clients, ...clients];

export default function DomesticClients() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-2">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#00224C]">
          Our Domestic Clients
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#E8720C]" />
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-wrapper overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 w-max">
            {allClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-20 px-8 bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#E8720C]/30"
                style={{ minWidth: "160px" }}
              >
                {client.type === "image" ? (
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={130}
                    height={55}
                    className="object-contain max-h-[55px] w-auto transition-all duration-300"
                    unoptimized
                  />
                ) : (
                  <span
                    className="font-extrabold tracking-widest uppercase select-none text-lg"
                    style={{ color: client.color || "#00224C", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.12em" }}
                  >
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
