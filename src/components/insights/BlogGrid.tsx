"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import { blogPosts, type InsightArticle } from "@/data/insights";
import { expandItemsForPagination } from "@/lib/expandItems";
import { cn } from "@/lib/utils";

const FILTERED_PAGE_SIZE = 8;
const FILTERED_ITEM_COUNT = 16;

function BlogCard({ post }: { post: InsightArticle }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-soft transition-shadow hover:shadow-card"
    >
      <InsightThumbnail
        article={post}
        className="aspect-[16/10] rounded-none rounded-t-2xl"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-muted">
          {post.category}
          {post.readTime ? ` • ${post.readTime}` : ""}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-textDark">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
          {post.description}
        </p>
        <Link
          href={`/insights/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-tertiary"
        >
          Read More
          <ArrowRight size={12} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogGrid() {
  const { showBlog, isOverviewTab, activeTab } = useInsightsTab();

  const items = useMemo(() => {
    if (
      !isOverviewTab &&
      (activeTab === "Latest" || activeTab === "Blogs")
    ) {
      return expandItemsForPagination(blogPosts, FILTERED_ITEM_COUNT);
    }

    return blogPosts;
  }, [activeTab, isOverviewTab]);

  const { page, setPage, pageItems, totalPages } = usePaginatedItems(
    items,
    FILTERED_PAGE_SIZE,
    activeTab
  );

  const visibleItems = isOverviewTab ? items : pageItems;

  if (!showBlog) {
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
            <h2 className="text-2xl font-bold text-textDark md:text-3xl">
              Blog Posts
            </h2>
          </AnimatedSection>
        )}

        {isOverviewTab ? (
          <StaggerContainer
            className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", "mt-10")}
          >
            {visibleItems.map((post) => (
              <StaggerItem key={post.id}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div
            key={page}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {visibleItems.map((post) => (
              <BlogCard key={post.id} post={post} />
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
