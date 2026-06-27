"use client";

import type { InsightTab } from "@/data/insights";
import { useInsightsTab } from "@/components/insights/InsightsTabContext";

export default function InsightsSectionHeader({
  title,
  tab,
}: {
  title: string;
  tab: InsightTab;
}) {
  const { setActiveTab } = useInsightsTab();

  const handleSeeAll = () => {
    setActiveTab(tab);
    document.getElementById("insight-tabs")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-2xl font-extrabold text-textDark md:text-[2rem]">
        {title}
      </h2>
      <button
        type="button"
        onClick={handleSeeAll}
        className="shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        See all
      </button>
    </div>
  );
}
