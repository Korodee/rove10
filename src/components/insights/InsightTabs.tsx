"use client";

import { insightTabs } from "@/data/insights";
import { useInsightsTab } from "@/components/insights/InsightsTabContext";
import { cn } from "@/lib/utils";

export default function InsightTabs() {
  const { activeTab, setActiveTab } = useInsightsTab();

  return (
    <section className="bg-[#FFF8F1]">
      <div className="flex h-14 items-stretch md:h-16">
        <div
          aria-hidden
          className="hidden min-w-[8%] border-r border-[#F0D4C8] sm:block lg:min-w-[12%]"
        />

        {insightTabs.map((tab) => (
          <div
            key={tab}
            className="flex flex-1 items-center justify-center border-r border-[#F0D4C8] px-3 md:px-4"
          >
            <button
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={cn(
                "whitespace-nowrap text-sm transition-colors md:text-[15px]",
                activeTab === tab
                  ? "rounded-full border border-[#F0D4C8] bg-white px-5 py-2 font-bold text-textDark shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:px-6"
                  : "font-medium text-[#8A9391] hover:text-textDark"
              )}
            >
              {tab}
            </button>
          </div>
        ))}

        <div
          aria-hidden
          className="hidden min-w-[8%] sm:block lg:min-w-[12%]"
        />
      </div>
    </section>
  );
}
