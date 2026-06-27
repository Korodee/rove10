"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import InsightThumbnail from "@/components/insights/InsightThumbnail";
import type { InsightArticle } from "@/data/insights";

interface MoreArticlesLikeThisProps {
  articles: InsightArticle[];
}

export default function MoreArticlesLikeThis({
  articles,
}: MoreArticlesLikeThisProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="bg-white pb-16 pt-4 md:pb-20">
      <Container>
        <AnimatedSection>
          <h2 className="text-2xl font-extrabold text-textDark md:text-3xl">
            More Articles Like This
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <article className="flex h-full flex-col">
                <InsightThumbnail
                  article={article}
                  className="aspect-[16/10] rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <p className="mt-4 text-sm text-muted">
                  {article.category}
                  {article.readTime ? ` · ${article.readTime}` : ""}
                </p>
                <h3 className="mt-2 flex-1 text-base font-bold leading-snug text-textDark md:text-[17px]">
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
