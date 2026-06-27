"use client";

import InsightTabs from "@/components/insights/InsightTabs";
import BlogGrid from "@/components/insights/BlogGrid";
import NewsletterBlock from "@/components/insights/NewsletterBlock";
import MarketUpdates from "@/components/insights/MarketUpdates";
import RoveNews from "@/components/insights/RoveNews";
import {
  InsightsTabProvider,
  useInsightsTab,
} from "@/components/insights/InsightsTabContext";

function InsightsTabbedLayout() {
  const { isOverviewTab, showBlog, showMarketUpdates, showRoveNews } =
    useInsightsTab();

  if (isOverviewTab) {
    return (
      <>
        {showBlog && <BlogGrid />}
        <NewsletterBlock />
        {showMarketUpdates && <MarketUpdates />}
        {showRoveNews && <RoveNews />}
      </>
    );
  }

  return (
    <>
      {showBlog && <BlogGrid />}
      {showMarketUpdates && <MarketUpdates />}
      {showRoveNews && <RoveNews />}
      <NewsletterBlock />
    </>
  );
}

export default function InsightsTabbedContent() {
  return (
    <InsightsTabProvider>
      <InsightTabs />
      <InsightsTabbedLayout />
    </InsightsTabProvider>
  );
}
