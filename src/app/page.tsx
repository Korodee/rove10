import Hero from "@/components/home/Hero";
import MarketTicker from "@/components/home/MarketTicker";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import PerformanceSection from "@/components/home/PerformanceSection";
import InsightsPreview from "@/components/home/InsightsPreview";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <div className="flex min-h-[calc(100dvh-var(--header-height))] flex-col">
        <Hero />
        <MarketTicker />
      </div>
      <SolutionsPreview />
      <PerformanceSection />
      <InsightsPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
