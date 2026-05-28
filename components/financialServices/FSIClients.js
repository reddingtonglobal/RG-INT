"use client";
import Image from "next/image";

const clients = [
  {
    name: "Finqy",
    logo: "/assets/images/finqy_logo.png",
    type: "image",
  },
  {
    name: "Credilio",
    logo: "/assets/images/credilio-svg-logo.svg",
    type: "image",
  },
  {
    name: "PolicyX",
    logo: "/assets/images/policyx_com_logo.jpg",
    type: "image",
  },
];

// Triplicate for a seamless smooth loop
const allClients = [...clients, ...clients, ...clients];

export default function FSIClients() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="text-center mb-8 px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-1">
          Trusted By
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#00224C]">
          Our Financial Services Clients
        </h2>
        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#E8720C]" />
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-wrapper overflow-hidden">
          <div className="animate-marquee flex items-center gap-14 w-max">
            {allClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-24 px-10 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#E8720C]/30"
                style={{ minWidth: "200px" }}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={150}
                  height={60}
                  className="object-contain max-h-[60px] w-auto transition-all duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
