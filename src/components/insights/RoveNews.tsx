"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import InsightThumbnail from "@/components/insights/InsightThumbnail";
import InsightPagination from "@/components/insights/InsightPagination";
import { useInsightsTab } from "@/components/insights/InsightsTabContext";
import { usePaginatedItems } from "@/hooks/usePaginatedItems";
import {
  roveNewsFeatured,
  roveNewsList,
  roveNewsPosts,
  type InsightArticle,
} from "@/data/insights";
import { expandItemsForPagination } from "@/lib/expandItems";

const FILTERED_PAGE_SIZE = 8;
const FILTERED_ITEM_COUNT = 16;

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-2xl font-extrabold text-textDark md:text-[2rem]">
        {title}
      </h2>
      <Link
        href="/insights"
        className="shrink-0 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        See all
      </Link>
    </div>
  );
}

function RoveNewsCard({ article }: { article: InsightArticle }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-soft transition-shadow hover:shadow-card"
    >
      <InsightThumbnail
        article={article}
        className="aspect-[16/10] rounded-none rounded-t-2xl"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-muted">
          {article.category}
          {article.readTime ? ` • ${article.readTime}` : ""}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-textDark">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-secondary">
          {article.description}
        </p>
        <Link
          href={`/insights/${article.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-tertiary"
        >
          Read More
          <ArrowRight size={12} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function RoveNews() {
  const { showRoveNews, isOverviewTab, activeTab } = useInsightsTab();

  const gridItems = useMemo(() => {
    if (!isOverviewTab && activeTab === "Rove10 News") {
      return expandItemsForPagination(roveNewsPosts, FILTERED_ITEM_COUNT);
    }

    return [];
  }, [activeTab, isOverviewTab]);

  const { page, setPage, pageItems, totalPages } = usePaginatedItems(
    gridItems,
    FILTERED_PAGE_SIZE,
    activeTab
  );

  if (!showRoveNews) {
    return null;
  }

  if (!isOverviewTab && activeTab === "Rove10 News") {
    return (
      <section className="bg-white pb-10 pt-8 md:pb-12 md:pt-10">
        <Container>
          <div
            key={page}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pageItems.map((article) => (
              <RoveNewsCard key={article.id} article={article} />
            ))}
          </div>

          <InsightPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="mt-10 md:mt-12"
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <Container>
        <AnimatedSection>
          <SectionHeader title="Rove10 News" />
        </AnimatedSection>

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14 xl:gap-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {roveNewsFeatured.map((article) => (
              <AnimatedSection key={article.id} delay={0.05}>
                <article>
                  <InsightThumbnail
                    article={article}
                    className="aspect-[4/3] rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <p className="mt-4 text-sm text-muted">
                    {article.category} · {article.readTime ?? "4 min Read"}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-snug text-textDark md:text-[17px]">
                    {article.title}
                  </h3>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tertiary transition-colors hover:text-tertiary-light"
                  >
                    Read Full Insights
                    <ChevronRight size={14} />
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1}>
            <ul className="divide-y divide-border">
              {roveNewsList.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="block py-8 text-sm font-bold leading-snug text-textDark transition-colors hover:text-primary md:text-base"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
