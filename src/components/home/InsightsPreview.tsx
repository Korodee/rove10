"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/shared/Container";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { homeInsightCards } from "@/data/insights";

function InsightCard({
  card,
  className,
}: {
  card: (typeof homeInsightCards)[number];
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#F4FAF8]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col pt-5">
        <h3 className="text-lg font-bold leading-snug text-textDark md:text-xl">
          {card.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-secondary md:text-[15px]">
          {card.description}
        </p>
        <Link
          href={`/insights/${card.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-tertiary transition-colors hover:text-tertiary-light"
        >
          Read Full Insights
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export default function InsightsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? homeInsightCards.length - 1 : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === homeInsightCards.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <div className="flex items-start justify-between gap-6">
            <h2 className="max-w-2xl text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-textDark md:text-4xl">
              Stay up to date with market trends, expert analysis, and
              investment insights.
            </h2>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F4F1] text-primary transition-opacity hover:opacity-80"
                aria-label="Previous insight"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
                aria-label="Next insight"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Mobile carousel */}
        <div className="mt-10 sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={homeInsightCards[activeIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <InsightCard card={homeInsightCards[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop grid */}
        <StaggerContainer className="mt-12 hidden gap-8 sm:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {homeInsightCards.map((card) => (
            <StaggerItem key={card.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <InsightCard card={card} className="h-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
