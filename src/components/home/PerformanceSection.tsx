"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import {
  performanceFeatures,
  type PerformanceFeature,
} from "@/data/services";
import { cn } from "@/lib/utils";

const STEP_COUNT = performanceFeatures.length;
const SCROLL_HEIGHT_PER_STEP = 120;
const SWIPE_THRESHOLD = 60;

const slideTransition = { duration: 0.35, ease: "easeOut" as const };
const imageTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

function getScrollIndex(progress: number) {
  return Math.min(
    STEP_COUNT - 1,
    Math.max(0, Math.floor(progress * STEP_COUNT))
  );
}

function PerformanceHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-20",
        className
      )}
    >
      <h2 className="text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-textDark sm:text-3xl md:text-4xl lg:text-[2.75rem]">
        Built on insight.
        <br />
        Driven by performance.
      </h2>
      <p className="text-base leading-relaxed text-secondary md:pt-1 md:text-end md:text-[17px] lg:max-w-md">
        We deliver structured, insight-led investment solutions built for
        consistency, security, and long-term growth.
      </p>
    </div>
  );
}

function StepIndicator({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect?: (index: number) => void;
}) {
  return (
    <div className="mb-5 flex h-2 w-[72px] items-stretch gap-1 rounded-full bg-[#E8EFED] p-0.5">
      {performanceFeatures.map((feature, index) => {
        const isActive = activeIndex === index;
        const segmentClass = cn(
          "rounded-full transition-colors duration-500",
          onSelect ? "h-full w-full" : "flex-1",
          isActive ? "bg-tertiary" : "bg-[#D8E2DF]"
        );

        if (onSelect) {
          return (
            <button
              key={feature.title}
              type="button"
              onClick={() => onSelect(index)}
              className="flex flex-1 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
              aria-label={`View ${feature.title}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span className={segmentClass} />
            </button>
          );
        }

        return <div key={feature.title} className={segmentClass} />;
      })}
    </div>
  );
}

function FeatureImage({
  feature,
  priority = false,
  className,
}: {
  feature: PerformanceFeature;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-[#E8F5F3]",
        className
      )}
    >
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        className="object-contain object-center p-4 sm:p-5"
        sizes="(max-width: 1024px) 100vw, 480px"
        priority={priority}
      />
    </div>
  );
}

function FeatureCopy({ feature }: { feature: PerformanceFeature }) {
  return (
    <>
      <h3 className="text-2xl font-bold text-textDark sm:text-[1.75rem] md:text-3xl lg:text-[2rem]">
        {feature.title}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-secondary md:text-[17px]">
        {feature.description}
      </p>
      <div className="mt-6">
        <Button href="#">Start Investing</Button>
      </div>
    </>
  );
}

function AnimatedFeatureCopy({ feature }: { feature: PerformanceFeature }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={slideTransition}
      >
        <FeatureCopy feature={feature} />
      </motion.div>
    </AnimatePresence>
  );
}

function PerformanceContent({ activeIndex }: { activeIndex: number }) {
  const feature = performanceFeatures[activeIndex];

  return (
    <>
      <PerformanceHeader />

      <div className="mt-10 grid items-center gap-10 md:mt-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="lg:pr-4">
          <StepIndicator activeIndex={activeIndex} />
          <AnimatedFeatureCopy feature={feature} />
        </div>

        <div className="relative hidden lg:block">
          <div className="relative ml-auto h-[340px] w-full max-w-[480px] xl:h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={feature.image}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={imageTransition}
              >
                <FeatureImage
                  feature={feature}
                  priority={activeIndex === 0}
                  className="absolute inset-0"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

function StickyPerformanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActiveIndex(getScrollIndex(progress));
  });

  return (
    <section
      ref={sectionRef}
      className="relative hidden bg-white lg:block"
      style={{ height: `${STEP_COUNT * SCROLL_HEIGHT_PER_STEP}vh` }}
    >
      <div className="sticky top-[var(--header-height)] flex min-h-[calc(100dvh-var(--header-height))] items-center py-12">
        <Container className="w-full">
          <PerformanceContent activeIndex={activeIndex} />
        </Container>
      </div>
    </section>
  );
}

function MobilePerformanceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const feature = performanceFeatures[activeIndex];

  const goPrev = () => setActiveIndex((index) => Math.max(0, index - 1));
  const goNext = () =>
    setActiveIndex((index) => Math.min(STEP_COUNT - 1, index + 1));

  return (
    <section className="bg-white lg:hidden">
      <Container className="section-padding">
        <PerformanceHeader />

        <div className="mt-10 md:mt-12">
          <StepIndicator activeIndex={activeIndex} onSelect={setActiveIndex} />

          <AnimatePresence mode="wait">
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={slideTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, { offset }) => {
                if (offset.x < -SWIPE_THRESHOLD) goNext();
                else if (offset.x > SWIPE_THRESHOLD) goPrev();
              }}
              className="touch-pan-y"
            >
              <FeatureCopy feature={feature} />

              <div className="relative mt-8 aspect-[4/3] w-full sm:aspect-[5/4] md:mt-10">
                <FeatureImage
                  feature={feature}
                  priority={activeIndex === 0}
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

export default function PerformanceSection() {
  return (
    <>
      <StickyPerformanceSection />
      <MobilePerformanceSection />
    </>
  );
}
