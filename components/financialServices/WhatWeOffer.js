"use client";
import { motion } from "framer-motion";
import { cardVariantsdown, cardVariantsTop } from "../common/animation/variation";

const services = [
  {
    icon: "🏦",
    title: "Banking Customer Support",
    description:
      "Inbound & outbound customer care for retail and corporate banking — account queries, transaction disputes, product cross-sell, and digital onboarding assistance.",
    highlights: ["24/7 Multi-channel", "Regulatory Compliant", "Omni-channel CX"],
  },
  {
    icon: "🛡️",
    title: "Insurance Processing",
    description:
      "End-to-end insurance lifecycle management: policy issuance, claims processing, renewals, and customer retention campaigns for life, health, and general insurance.",
    highlights: ["Claims Management", "Policy Renewals", "Retention Campaigns"],
  },
  {
    icon: "📋",
    title: "Loan & Credit Services",
    description:
      "Lead generation, pre-screening, documentation follow-up, and EMI reminder services for personal loans, home loans, credit cards, and BNPL products.",
    highlights: ["Lead Qualification", "Document Follow-up", "EMI Collections"],
  },
  {
    icon: "🔍",
    title: "Fraud & Risk Management",
    description:
      "Proactive fraud detection support, risk alert outreach, chargeback management, and customer education campaigns to protect portfolios at scale.",
    highlights: ["Alert Outreach", "Chargeback Support", "Risk Education"],
  },
  {
    icon: "💼",
    title: "Collections Management",
    description:
      "Compliant, empathetic, and effective early-to-late stage debt collections across retail banking, NBFC, and credit card portfolios, improving recovery rates.",
    highlights: ["Early-Late Stage", "RBI Compliant", "High Recovery Rate"],
  },
  {
    icon: "✅",
    title: "KYC & Compliance Support",
    description:
      "Scalable KYC verification, AML document checks, re-KYC campaigns, and compliance helpdesk services that keep your operations audit-ready at all times.",
    highlights: ["AML Checks", "Re-KYC Campaigns", "Audit-Ready Ops"],
  },
];

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="bg-[#F5F7FA] py-20">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={cardVariantsTop()}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00224C] mb-4">
            Comprehensive BFSI BPO Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-7">
            From front-office customer engagement to back-office compliance
            operations, we deliver measurable outcomes across every touchpoint
            of the financial services value chain.
          </p>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E8720C]" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E8720C]/30 group flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              variants={cardVariantsdown()}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#00224C]/8 flex items-center justify-center text-3xl mb-5 group-hover:bg-[#E8720C]/10 transition-colors">
                <span>{svc.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-[#00224C] text-xl font-bold mb-3 group-hover:text-[#E8720C] transition-colors">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-7 mb-5 flex-1">
                {svc.description}
              </p>

              {/* Highlight tags */}
              <div className="flex flex-wrap gap-2">
                {svc.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[#00224C]/8 text-[#00224C] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-[#E8720C] rounded transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
