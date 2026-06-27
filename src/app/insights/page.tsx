import InsightsHero from "@/components/insights/InsightsHero";
import InsightsTabbedContent from "@/components/insights/InsightsTabbedContent";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Insights | Rove10",
  description:
    "Stay up to date with market trends, expert analysis, and investment insights from Rove10.",
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsTabbedContent />
      <CTASection />
    </>
  );
}
