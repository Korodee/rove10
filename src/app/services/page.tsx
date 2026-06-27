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
      <div className="flex flex-col bg-white lg:min-h-[calc(100dvh-var(--header-height))] lg:bg-transparent">
        <ServicesHero />
      </div>
      <ServicesGrid />
      <WhyUseRove />
      <ServiceBenefits />
      <CTASection />
    </>
  );
}
