"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cardVariantsLeft, cardVariantsRight } from "../common/animation/variation";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-[#00224C] min-h-[600px] flex items-center">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(232,114,12,0.4) 40px,
            rgba(232,114,12,0.4) 41px
          ), repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.15) 40px,
            rgba(255,255,255,0.15) 41px
          )`,
        }}
      />

      {/* Gold accent bar top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8720C] via-yellow-400 to-[#E8720C]" />

      {/* Glow blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#E8720C] opacity-10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] rounded-full bg-blue-400 opacity-10 blur-3xl" />

      <div className="container relative z-10 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left text */}
          <motion.div
            className="lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#E8720C] text-[#E8720C] text-sm font-semibold tracking-widest uppercase">
              Financial Services
            </span>
            <h1 className="text-white text-4xl md:text-5xl xl:text-[58px] font-bold leading-tight mb-6">
              Banking &amp; Financial{" "}
              <span className="text-[#E8720C]">BPO Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg leading-8 mb-8 max-w-2xl">
              Empowering banks, NBFCs, insurance companies, and fintech firms
              with compliant, secure, and scalable back-office &amp;
              customer-engagement operations — delivered by domain experts with
              100&nbsp;+ years of combined experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact_us">
                <button className="px-8 py-3 bg-[#E8720C] hover:bg-orange-600 transition-colors text-white font-semibold rounded-md shadow-lg">
                  Get a Free Consultation
                </button>
              </Link>
              <Link href="#what-we-offer">
                <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#00224C] transition-colors font-semibold rounded-md">
                  Explore Services
                </button>
              </Link>
            </div>

            {/* Quick trust pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {["ISO Compliant", "24 / 7 Support", "BFSI Specialists", "Data Secure"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E8720C] inline-block" />
                    {pill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right — floating stats cards */}
          <motion.div
            className="lg:w-2/5 w-full grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            variants={cardVariantsRight()}
          >
            {[
              { value: "100+", label: "Years Combined BFSI Experience" },
              { value: "98%", label: "Client Retention Rate" },
              { value: "50+", label: "Banking Clients Served" },
              { value: "24/7", label: "Round-the-Clock Operations" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <p className="text-[#E8720C] text-4xl font-extrabold mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm leading-5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gold accent bar bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8720C] via-yellow-400 to-[#E8720C]" />
    </div>
  );
};

export default Banner;
