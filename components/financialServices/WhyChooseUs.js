"use client";
import { motion } from "framer-motion";
import { cardVariantsLeft, cardVariantsRight, cardVariantsTop } from "../common/animation/variation";

const reasons = [
  {
    icon: "🔒",
    title: "Data Security & Compliance",
    body: "All operations follow ISO 27001 standards, RBI guidelines, and IRDAI mandates, keeping your customer data protected and your audits stress-free.",
  },
  {
    icon: "📈",
    title: "Scalable On Demand",
    body: "Scale up to 10× during peak season — tax season, festive offers, or product launches — with no long-term headcount commitment.",
  },
  {
    icon: "🌐",
    title: "Omni-Channel Engagement",
    body: "Voice, email, chat, WhatsApp, and social — we manage every channel your customers use, with unified CRM integration.",
  },
  {
    icon: "🎓",
    title: "BFSI-Trained Talent",
    body: "Our agents undergo dedicated BFSI induction, product certification, and continuous quality monitoring to meet the highest industry benchmarks.",
  },
  {
    icon: "⚡",
    title: "Rapid Turnaround",
    body: "Average handling times that beat industry benchmarks, first-call resolution rates above 85%, and SLA adherence above 99%.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    body: "Customised dashboards, call recording, sentiment analysis, and monthly business reviews to drive continuous improvement.",
  },
];

const stats = [
  { value: "100+", label: "Years Combined Experience" },
  { value: "85%+", label: "First Call Resolution" },
  { value: "99%", label: "SLA Adherence" },
  { value: "50+", label: "BFSI Clients Served" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={cardVariantsTop()}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-2">
            Why RG Consultancy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00224C] mb-4">
            The Right Partner for Financial Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-7">
            We don't just handle calls — we engineer customer experiences that
            build trust, loyalty, and portfolio growth for your financial brand.
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E8720C]" />
        </motion.div>

        {/* Stats banner */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-8 rounded-2xl bg-[#00224C] shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={cardVariantsLeft()}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#E8720C] text-4xl xl:text-5xl font-extrabold mb-1">
                {s.value}
              </p>
              <p className="text-gray-300 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#E8720C]/40 hover:shadow-lg transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              variants={i % 2 === 0 ? cardVariantsLeft() : cardVariantsRight()}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00224C]/8 group-hover:bg-[#E8720C]/10 flex items-center justify-center text-2xl transition-colors">
                {r.icon}
              </div>
              <div>
                <h3 className="text-[#00224C] font-bold text-base mb-2 group-hover:text-[#E8720C] transition-colors">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{r.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
