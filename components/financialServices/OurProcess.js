"use client";
import { motion } from "framer-motion";
import { cardVariantsTop, cardVariantsdown } from "../common/animation/variation";

const steps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We begin with a thorough discovery — understanding your portfolio, compliance requirements, customer segments, and existing pain points before recommending any solution.",
    icon: "🔎",
  },
  {
    step: "02",
    title: "Solution Design",
    description:
      "Our BFSI experts craft a bespoke engagement model: channel mix, staffing structure, technology integration plan, and SLA framework — all tailored to your brand standards.",
    icon: "🗂️",
  },
  {
    step: "03",
    title: "Pilot & Onboarding",
    description:
      "A phased pilot with dedicated QA oversight lets you validate quality, compliance, and cultural fit before full-scale deployment — zero disruption to your current operations.",
    icon: "🚀",
  },
  {
    step: "04",
    title: "Scale & Optimise",
    description:
      "With real-time dashboards, regular business reviews, and a continuous improvement loop, we scale intelligently and iterate relentlessly to push metrics forward every quarter.",
    icon: "📊",
  },
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-[#F5F7FA] overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={cardVariantsTop()}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-2">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00224C] mb-4">
            A Proven Engagement Process
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-7">
            From first conversation to full-scale operations, every step is
            designed to protect your brand, delight your customers, and deliver
            measurable ROI.
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E8720C]" />
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden xl:block absolute top-[72px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#E8720C] via-[#00224C] to-[#E8720C] opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="relative flex flex-col items-center text-center group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                variants={cardVariantsdown()}
              >
                {/* Circle with step number */}
                <div className="relative mb-6">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#00224C] text-white flex items-center justify-center text-2xl font-extrabold shadow-lg group-hover:bg-[#E8720C] transition-colors duration-300 z-10 relative">
                    {s.step}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#E8720C] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{s.icon}</div>

                {/* Content card */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E8720C]/30 h-full w-full">
                  <h3 className="text-[#00224C] font-bold text-lg mb-3 group-hover:text-[#E8720C] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-7">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
