"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import InsightThumbnail from "@/components/insights/InsightThumbnail";
import { featuredArticle } from "@/data/insights";

export default function InsightsHero() {
  return (
    <section className="section-padding bg-white pt-8 md:pt-12">
      <Container>
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-textDark md:text-5xl">
            Insights
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <article className="overflow-hidden rounded-3xl bg-[#F4FAF9]">
            <div className="grid lg:grid-cols-2">
              <InsightThumbnail
                article={featuredArticle}
                className="aspect-[16/10] lg:aspect-auto lg:min-h-[320px] lg:rounded-none lg:rounded-l-3xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-sm font-medium text-muted">
                  {featuredArticle.category} • {featuredArticle.readTime}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-textDark md:text-3xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-secondary">
                  {featuredArticle.description}
                </p>
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-tertiary transition-colors hover:text-tertiary-light"
                >
                  Read Full Insights
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </Container>
    </section>
  );
}
