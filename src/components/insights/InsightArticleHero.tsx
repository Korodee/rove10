"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { InsightArticle } from "@/data/insights";

interface InsightArticleHeroProps {
  article: InsightArticle;
}

function formatArticleMeta(article: InsightArticle) {
  return [
    article.category,
    article.publishedAt,
    article.readTime,
  ]
    .filter(Boolean)
    .join(" • ");
}

export default function InsightArticleHero({ article }: InsightArticleHeroProps) {
  const intro = article.intro ?? [article.description];

  return (
    <section className="bg-white pt-8 md:pt-10">
      <Container>
        <div className="relative">
          <AnimatedSection>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 text-sm font-semibold text-textDark transition-colors hover:text-primary"
            >
              <ChevronLeft size={16} />
              Back
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.05} className="mx-auto mt-8 max-w-3xl md:mt-10">
            <p className="text-left text-sm font-medium text-muted">
              {formatArticleMeta(article)}
            </p>
            <h1 className="mt-5 text-3xl font-extrabold text-textDark md:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>
            <div className="mt-6 space-y-5">
              {intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-bodyText md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
