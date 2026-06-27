import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyUseRove from "@/components/services/WhyUseRove";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Our Services | Rove10",
  description:
    "Investment solutions designed for performance and stability. FX trading, fixed income, interest rate products, and asset management.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyUseRove />
      <ServiceBenefits />
      <CTASection />
    </>
  );
}
