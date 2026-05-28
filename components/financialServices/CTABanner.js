"use client";
import { motion } from "framer-motion";
import { cardVariantsTop } from "../common/animation/variation";

const CTABanner = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#00224C]">
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-[#E8720C] opacity-10 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-60px] w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8720C] via-yellow-400 to-[#E8720C]" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={cardVariantsTop()}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-3">
            Ready to Elevate Your BFSI Operations?
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight">
            Let's Build a Smarter,{" "}
            <span className="text-[#E8720C]">Scalable Financial Future</span>{" "}
            Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-7 mb-10">
            Talk to our BFSI specialists today. No obligations — just a
            straight-forward conversation about how RG Consultancy can reduce
            costs, improve CX, and keep you compliant.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#lead-form" onClick={(e) => { e.preventDefault(); document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <button className="px-10 py-4 bg-[#E8720C] hover:bg-orange-600 transition-colors text-white font-bold rounded-md shadow-lg text-base">
                Schedule a Free Consultation
              </button>
            </a>
            <a href="tel:+919999999999">
              <button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#00224C] transition-all font-bold rounded-md text-base">
                Call Us Now
              </button>
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-8 mt-14">
            {[
              "No Lock-in Contracts",
              "Dedicated Account Manager",
              "Regulatory Compliant Operations",
              "Custom SLA Guaranteed",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-5 h-5 rounded-full bg-[#E8720C] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
