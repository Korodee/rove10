"use client";

import Link from "next/link";
import { useMemo } from "react";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import InsightThumbnail from "@/components/insights/InsightThumbnail";
import InsightPagination from "@/components/insights/InsightPagination";
import InsightsSectionHeader from "@/components/insights/InsightsSectionHeader";
import { useInsightsTab } from "@/components/insights/InsightsTabContext";
import { usePaginatedItems } from "@/hooks/usePaginatedItems";
import { marketUpdates } from "@/data/insights";
import { expandItemsForPagination } from "@/lib/expandItems";
import { cn } from "@/lib/utils";

const FILTERED_PAGE_SIZE = 8;
const FILTERED_ITEM_COUNT = 16;

export default function MarketUpdates() {
  const { showMarketUpdates, activeTab, isOverviewTab } = useInsightsTab();

  const items = useMemo(() => {
    if (!isOverviewTab && activeTab === "Market Updates") {
      return expandItemsForPagination(marketUpdates, FILTERED_ITEM_COUNT);
    }

    return marketUpdates;
  }, [activeTab, isOverviewTab]);

  const { page, setPage, pageItems, totalPages } = usePaginatedItems(
    items,
    FILTERED_PAGE_SIZE,
    activeTab
  );

  const visibleItems = isOverviewTab ? items : pageItems;

  if (!showMarketUpdates) {
    return null;
  }

  return (
    <section
      className={cn(
        "bg-white",
        isOverviewTab ? "section-padding" : "pb-10 pt-8 md:pb-12 md:pt-10"
      )}
    >
      <Container>
        {isOverviewTab && (
          <AnimatedSection>
            <InsightsSectionHeader title="Market Updates" tab="Market Updates" />
          </AnimatedSection>
        )}

        {isOverviewTab ? (
          <div
            className={cn(
              "grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6",
              "mt-8 md:mt-10"
            )}
          >
            {visibleItems.map((update) => (
              <AnimatedSection key={update.id} delay={0.05}>
                <MarketUpdateCard update={update} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div
            key={page}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {visibleItems.map((update) => (
              <MarketUpdateCard key={update.id} update={update} />
            ))}
          </div>
        )}

        {!isOverviewTab && (
          <InsightPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="mt-10 md:mt-12"
          />
        )}
      </Container>
    </section>
  );
}

function MarketUpdateCard({
  update,
}: {
  update: (typeof marketUpdates)[number];
}) {
  return (
    <Link
      href={`/insights/${update.slug}`}
      className="block overflow-hidden rounded-3xl bg-[#F4FAF9] transition-shadow hover:shadow-soft"
    >
      <InsightThumbnail
        article={update}
        className="aspect-[2/1] rounded-none"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="px-5 py-5">
        <div className="flex items-center justify-between gap-3 text-sm text-muted">
          <span>{update.category}</span>
          <span>{update.publishedAt}</span>
        </div>
        <h3 className="mt-3 min-h-[3.25rem] text-base font-bold leading-snug text-textDark md:min-h-[3.75rem] md:text-[17px]">
          {update.title}
        </h3>
      </div>
    </Link>
  );
}
