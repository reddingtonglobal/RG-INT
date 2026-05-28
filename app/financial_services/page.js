import Banner from "@/components/financialServices/Banner";
import FSIClients from "@/components/financialServices/FSIClients";
import WhatWeOffer from "@/components/financialServices/WhatWeOffer";
import WhyChooseUs from "@/components/financialServices/WhyChooseUs";
import OurProcess from "@/components/financialServices/OurProcess";
import CTABanner from "@/components/financialServices/CTABanner";

export const metadata = {
  title: "Financial Services | RG Consultancy",
  description:
    "Expert BFSI BPO solutions — banking customer support, insurance processing, loan services, KYC compliance, and collections management. Partner with RG Consultancy.",
};

const FinancialServicesPage = () => {
  return (
    <>
      <Banner />
      <FSIClients />
      <WhatWeOffer />
      <WhyChooseUs />
      <OurProcess />
      <CTABanner />
    </>
  );
};

export default FinancialServicesPage;
