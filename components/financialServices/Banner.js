"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Form, Input, Select, Radio } from "antd";
import emailjs from "@emailjs/browser";
import { cardVariantsLeft, cardVariantsRight } from "../common/animation/variation";

const { Option } = Select;

const serviceTypes = ["Personal Loan", "Credit Card", "Home Loan", "Insurance", "Loan Against Property", "Business Loan"];
const loanRanges = ["Up to ₹1 Lakh", "₹1 – ₹5 Lakh", "₹5 – ₹15 Lakh", "₹15 – ₹50 Lakh", "₹50 Lakh – ₹1 Crore", "Above ₹1 Crore"];
const incomeRanges = ["Below ₹15,000 / month", "₹15,000 – ₹30,000 / month", "₹30,000 – ₹60,000 / month", "₹60,000 – ₹1,00,000 / month", "Above ₹1,00,000 / month"];
const inputClass = "!rounded-lg !border-gray-200 !h-11 !text-gray-700 focus:!border-[#E8720C] hover:!border-[#E8720C]";

const Banner = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const payload = { ...values, type: "FinancialLead" };
      const res = await fetch("/api/saveContact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (serviceId && templateId && publicKey) {
          emailjs.send(serviceId, templateId, {
            name: values.fullName,
            email: values.email || "—",
            phone: values.phone,
            subject: `New Loan Lead — ${values.serviceType || "—"}`,
            message: `Service: ${values.serviceType || "—"}\nLoan: ${values.loanAmount || "—"}\nEmployment: ${values.employmentType || "—"}\nIncome: ${values.monthlyIncome || "—"}\nCity: ${values.city || "—"}\nPAN: ${values.pan || "—"}\nAadhaar: ${values.aadhaar || "—"}`,
          }, publicKey).catch(() => {});
        }
        form.resetFields();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch { /* silently fail */ } finally { setLoading(false); }
  };

  return (
    <div id="lead-form" className="relative overflow-hidden bg-[#00224C] flex items-center">
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
            className="lg:w-1/2"
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

          {/* Right — lead form card */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            variants={cardVariantsRight()}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-[#00224C] mb-2">You're All Set!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">Our advisor will call you within 30 minutes with the best offers matched to your profile.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#00224C] mb-0.5">Apply in 60 Seconds</h3>
                  <p className="text-gray-400 text-xs mb-4">No documents needed at this stage.</p>

                  <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}
                    className="[&_.ant-form-item-label>label]:font-semibold [&_.ant-form-item-label>label]:text-gray-600 [&_.ant-form-item-label>label]:text-xs [&_.ant-form-item]:!mb-3"
                  >
                    <Form.Item name="serviceType" label="I Need">
                      <Radio.Group className="flex flex-wrap gap-1.5 w-full">
                        {serviceTypes.map((s) => (
                          <Radio.Button key={s} value={s}
                            className="!rounded-full !h-8 !px-3 !text-xs !border-gray-200 !leading-[30px] [&.ant-radio-button-wrapper-checked]:!bg-[#E8720C] [&.ant-radio-button-wrapper-checked]:!border-[#E8720C] [&.ant-radio-button-wrapper-checked]:!text-white [&.ant-radio-button-wrapper:not(:first-child)::before]:!hidden"
                          >{s}</Radio.Button>
                        ))}
                      </Radio.Group>
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-x-3">
                      <Form.Item name="fullName" label="Full Name" rules={[{ required: true, message: "Required" }]}>
                        <Input placeholder="Rahul Sharma" className={inputClass} />
                      </Form.Item>
                      <Form.Item name="phone" label="Mobile Number"
                        rules={[{ required: true, message: "Required" }, { pattern: /^[6-9]\d{9}$/, message: "Invalid number" }]}
                      >
                        <Input placeholder="9876543210" maxLength={10} className={inputClass} addonBefore="+91" />
                      </Form.Item>
                    </div>

                    <div className="grid grid-cols-2 gap-x-3">
                      <Form.Item name="employmentType" label="Employment Type">
                        <Select placeholder="Select" className="!h-11">
                          {["Salaried", "Self Employed", "Business Owner", "Unemployed", "Retired"].map((e) => (
                            <Option key={e} value={e}>{e}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item name="monthlyIncome" label="Monthly Income">
                        <Select placeholder="Select range" className="!h-11">
                          {incomeRanges.map((r) => <Option key={r} value={r}>{r}</Option>)}
                        </Select>
                      </Form.Item>
                    </div>

                    <div className="grid grid-cols-2 gap-x-3">
                      <Form.Item name="loanAmount" label="Amount Required">
                        <Select placeholder="Select range" className="!h-11">
                          {loanRanges.map((r) => <Option key={r} value={r}>{r}</Option>)}
                        </Select>
                      </Form.Item>
                      <Form.Item name="city" label="City">
                        <Input placeholder="New Delhi" className={inputClass} />
                      </Form.Item>
                    </div>

                    <div className="grid grid-cols-2 gap-x-3">
                      <Form.Item name="pan" label="PAN Number"
                        normalize={(val) => val?.toUpperCase()}
                        rules={[{ pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: "Invalid PAN" }]}
                      >
                        <Input placeholder="ABCDE1234F" maxLength={10} className={`${inputClass} !uppercase`} />
                      </Form.Item>
                      <Form.Item name="aadhaar" label="Aadhaar (Last 4 digits)"
                        rules={[{ pattern: /^\d{4}$/, message: "Enter 4 digits" }]}
                      >
                        <Input placeholder="XXXX" maxLength={4} className={inputClass} />
                      </Form.Item>
                    </div>

                    <Form.Item className="!mb-0 !mt-1">
                      <button type="submit" disabled={loading}
                        className="w-full py-3 bg-[#E8720C] hover:bg-orange-600 disabled:opacity-60 transition-colors text-white font-bold rounded-xl text-sm shadow-lg"
                      >
                        {loading ? "Please wait..." : "Get Free Callback Now →"}
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-2">🔒 Your data is 100% secure.</p>
                    </Form.Item>
                  </Form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold accent bar bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8720C] via-yellow-400 to-[#E8720C]" />
    </div>
  );
};

export default Banner;
