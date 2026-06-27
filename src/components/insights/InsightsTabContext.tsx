"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { InsightTab } from "@/data/insights";

interface InsightsTabContextValue {
  activeTab: InsightTab;
  setActiveTab: (tab: InsightTab) => void;
  isOverviewTab: boolean;
  showBlog: boolean;
  showMarketUpdates: boolean;
  showRoveNews: boolean;
}

const InsightsTabContext = createContext<InsightsTabContextValue | null>(null);

function getVisibility(activeTab: InsightTab) {
  return {
    showBlog:
      activeTab === "All Insights" ||
      activeTab === "Latest" ||
      activeTab === "Blogs",
    showMarketUpdates:
      activeTab === "All Insights" || activeTab === "Market Updates",
    showRoveNews:
      activeTab === "All Insights" || activeTab === "Rove10 News",
  };
}

export function InsightsTabProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<InsightTab>("All Insights");

  const visibility = useMemo(() => getVisibility(activeTab), [activeTab]);
  const isOverviewTab = activeTab === "All Insights";

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      isOverviewTab,
      ...visibility,
    }),
    [activeTab, isOverviewTab, visibility]
  );

  return (
    <InsightsTabContext.Provider value={value}>
      {children}
    </InsightsTabContext.Provider>
  );
}

export function useInsightsTab() {
  const context = useContext(InsightsTabContext);
  if (!context) {
    throw new Error("useInsightsTab must be used within InsightsTabProvider");
  }
  return context;
}
