"use client";

import { insightTabs } from "@/data/insights";
import { useInsightsTab } from "@/components/insights/InsightsTabContext";
import { cn } from "@/lib/utils";

export default function InsightTabs() {
  const { activeTab, setActiveTab } = useInsightsTab();

  return (
    <section className="bg-[#FFF8F1]">
      <div className="scrollbar-none overflow-x-auto md:overflow-x-visible">
        <div className="flex h-14 w-max min-w-full items-stretch md:h-16">
          <div
            aria-hidden
            className="hidden min-w-[8%] shrink-0 border-r border-[#F0D4C8] sm:block lg:min-w-[12%]"
          />

          {insightTabs.map((tab) => (
            <div
              key={tab}
              className="flex shrink-0 items-center justify-center border-r border-[#F0D4C8] px-3 last:border-r-0 sm:last:border-r md:flex-1 md:shrink md:px-4"
            >
              <button
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={cn(
                  "whitespace-nowrap text-[13px] transition-colors sm:text-sm md:text-[15px]",
                  activeTab === tab
                    ? "rounded-full border border-[#F0D4C8] bg-white px-4 py-1.5 font-bold text-textDark shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:px-5 sm:py-2 md:px-6"
                    : "px-1 font-medium text-[#8A9391] hover:text-textDark"
                )}
              >
                {tab}
              </button>
            </div>
          ))}

          <div
            aria-hidden
            className="hidden min-w-[8%] shrink-0 sm:block lg:min-w-[12%]"
          />
        </div>
      </div>
    </section>
  );
}
