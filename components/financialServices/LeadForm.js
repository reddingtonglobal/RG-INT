"use client";
import { useState } from "react";
import { Form, Input, Select, Radio } from "antd";
import { motion } from "framer-motion";
import { cardVariantsLeft, cardVariantsRight } from "../common/animation/variation";
import emailjs from "@emailjs/browser";

const { Option } = Select;

const serviceTypes = [
  "Personal Loan",
  "Credit Card",
  "Home Loan",
  "Insurance",
  "Loan Against Property",
  "Business Loan",
];

const loanRanges = [
  "Up to ₹1 Lakh",
  "₹1 – ₹5 Lakh",
  "₹5 – ₹15 Lakh",
  "₹15 – ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "Above ₹1 Crore",
];

const incomeRanges = [
  "Below ₹15,000 / month",
  "₹15,000 – ₹30,000 / month",
  "₹30,000 – ₹60,000 / month",
  "₹60,000 – ₹1,00,000 / month",
  "Above ₹1,00,000 / month",
];

const inputClass =
  "!rounded-lg !border-gray-200 !h-12 !text-gray-700 focus:!border-[#E8720C] hover:!border-[#E8720C]";

const LeadForm = () => {
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
          await emailjs.send(serviceId, templateId, {
            name: values.fullName,
            email: values.email || "—",
            phone: values.phone,
            subject: `New Loan Lead — ${values.serviceType}`,
            message: `Service: ${values.serviceType || "—"}\nLoan Amount: ${values.loanAmount || "—"}\nEmployment: ${values.employmentType || "—"}\nMonthly Income: ${values.monthlyIncome || "—"}\nCity: ${values.city || "—"}\nPAN: ${values.pan || "—"}\nAadhaar (last 4): ${values.aadhaar || "—"}`,
          }, publicKey).catch(() => {});
        }
        form.resetFields();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-[#00224C] to-[#003a7a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-[#E8720C] opacity-10 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left — trust content */}
          <motion.div
            className="lg:w-2/5 w-full text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#E8720C] mb-3">
              Check Your Eligibility
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Get the Best Loan &amp; Financial Offers — Instantly
            </h2>
            <p className="text-gray-300 text-base leading-7 mb-8">
              Compare top offers from leading banks &amp; NBFCs. Our advisors match you to the right product based on your profile — no paperwork, no hassle.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "⚡", text: "Callback within 30 minutes" },
                { icon: "🏦", text: "Partnered with 20+ banks & NBFCs" },
                { icon: "✅", text: "No impact on your CIBIL score" },
                { icon: "🔒", text: "100% secure & confidential" },
                { icon: "₹", text: "Loans from ₹50,000 to ₹5 Crore+" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8720C]/20 border border-[#E8720C]/40 flex items-center justify-center text-[#E8720C] text-sm font-bold flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-gray-200 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Product tags */}
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-gray-300">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — compact form */}
          <motion.div
            className="lg:w-3/5 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            variants={cardVariantsRight()}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mb-5">✅</div>
                  <h3 className="text-2xl font-bold text-[#00224C] mb-2">You're All Set!</h3>
                  <p className="text-gray-500 max-w-xs">
                    Our advisor will call you within 30 minutes with the best offers matched to your profile.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#00224C]">Apply in 60 Seconds</h3>
                    <p className="text-gray-400 text-sm mt-1">No documents needed at this stage.</p>
                  </div>

                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    className="[&_.ant-form-item-label>label]:font-semibold [&_.ant-form-item-label>label]:text-gray-600 [&_.ant-form-item-label>label]:text-sm [&_.ant-form-item]:!mb-4"
                  >
                    {/* Product selector */}
                    <Form.Item
                      name="serviceType"
                      label="I Need"
                    >
                      <Radio.Group className="flex flex-wrap gap-2 w-full">
                        {serviceTypes.map((s) => (
                          <Radio.Button
                            key={s}
                            value={s}
                            className="!rounded-full !h-9 !px-4 !text-sm !border-gray-200 !leading-[34px] [&.ant-radio-button-wrapper-checked]:!bg-[#E8720C] [&.ant-radio-button-wrapper-checked]:!border-[#E8720C] [&.ant-radio-button-wrapper-checked]:!text-white [&.ant-radio-button-wrapper:not(:first-child)::before]:!hidden"
                          >
                            {s}
                          </Radio.Button>
                        ))}
                      </Radio.Group>
                    </Form.Item>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        name="fullName"
                        label="Full Name"
                        rules={[{ required: true, message: "Required" }]}
                      >
                        <Input placeholder="Rahul Sharma" className={inputClass} />
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Mobile Number"
                        rules={[
                          { required: true, message: "Required" },
                          { pattern: /^[6-9]\d{9}$/, message: "Enter valid 10-digit number" },
                        ]}
                      >
                        <Input placeholder="9876543210" maxLength={10} className={inputClass} addonBefore="+91" />
                      </Form.Item>
                    </div>

                    {/* Employment + Income */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        name="employmentType"
                        label="Employment Type"
                      >
                        <Radio.Group className="flex flex-col gap-1.5 pt-1">
                          {["Salaried", "Self Employed", "Business Owner", "Unemployed", "Retired"].map((e) => (
                            <Radio key={e} value={e} className="!text-gray-600 !text-sm">{e}</Radio>
                          ))}
                        </Radio.Group>
                      </Form.Item>

                      <Form.Item
                        name="monthlyIncome"
                        label="Monthly Income"
                      >
                        <Select placeholder="Select range" className="!h-12">
                          {incomeRanges.map((r) => (
                            <Option key={r} value={r}>{r}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>

                    {/* Loan amount + City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        name="loanAmount"
                        label="Amount Required"
                      >
                        <Select placeholder="Select range" className="!h-12">
                          {loanRanges.map((r) => (
                            <Option key={r} value={r}>{r}</Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="city"
                        label="City"
                      >
                        <Input placeholder="New Delhi" className={inputClass} />
                      </Form.Item>
                    </div>

                    {/* PAN + Aadhaar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <Form.Item
                        name="pan"
                        label="PAN Number"
                        rules={[
                          { pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: "Enter a valid PAN (e.g. ABCDE1234F)" },
                        ]}
                      >
                        <Input placeholder="ABCDE1234F" maxLength={10} className={`${inputClass} !uppercase`} />
                      </Form.Item>

                      <Form.Item
                        name="aadhaar"
                        label="Aadhaar Number (Last 4 digits)"
                        rules={[
                          { pattern: /^\d{4}$/, message: "Enter exactly 4 digits" },
                        ]}
                      >
                        <Input placeholder="XXXX" maxLength={4} className={inputClass} />
                      </Form.Item>
                    </div>

                    <Form.Item className="!mb-0 !mt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-13 py-3.5 bg-[#E8720C] hover:bg-orange-600 disabled:opacity-60 transition-colors text-white font-bold rounded-xl text-base shadow-lg"
                      >
                        {loading ? "Please wait..." : "Get Free Callback Now →"}
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-3">
                        🔒 By submitting, you agree to our Privacy Policy. Your data is 100% secure.
                      </p>
                    </Form.Item>
                  </Form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;
