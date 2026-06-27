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
import { performanceFeatures } from "@/data/services";
import { cn } from "@/lib/utils";

const STEP_COUNT = performanceFeatures.length;
const SCROLL_HEIGHT_PER_STEP = 120; // vh per step — more scroll room so each slide lingers

function StepIndicator({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="mb-5 flex h-2 w-[72px] items-stretch gap-1 rounded-full bg-[#E8EFED] p-0.5">
      {performanceFeatures.map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 rounded-full transition-colors duration-500",
            activeIndex === index ? "bg-tertiary" : "bg-[#D8E2DF]"
          )}
        />
      ))}
    </div>
  );
}

function PerformanceContent({
  activeIndex,
  showImage = true,
}: {
  activeIndex: number;
  showImage?: boolean;
}) {
  const feature = performanceFeatures[activeIndex];

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
        <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-textDark md:text-4xl lg:text-[2.75rem]">
          Built on insight.
          <br />
          Driven by performance.
        </h2>
        <p className="text-base leading-relaxed text-secondary lg:max-w-md lg:pt-1 md:text-[17px]">
          We deliver structured, insight-led investment solutions built for
          consistency, security, and long-term growth.
        </p>
      </div>

      <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="lg:pr-4">
          <StepIndicator activeIndex={activeIndex} />

          <AnimatePresence mode="wait">
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-textDark md:text-3xl lg:text-[2rem]">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-secondary md:text-[17px]">
                {feature.description}
              </p>
              <div className="mt-6">
                <Button href="#">Start Investing</Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {showImage && (
          <div className="relative hidden lg:block">
            <div className="relative ml-auto h-[340px] w-full max-w-[480px] xl:h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={feature.image}
                  className="absolute inset-0 overflow-hidden rounded-2xl bg-[#E8F5F3]"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain object-center p-4"
                    sizes="480px"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
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
    const index = Math.min(
      STEP_COUNT - 1,
      Math.max(0, Math.floor(progress * STEP_COUNT))
    );
    setActiveIndex(index);
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
  return (
    <section className="bg-white lg:hidden">
      <Container className="section-padding">
        <div className="grid gap-8">
          <h2 className="text-3xl font-extrabold leading-[1.12] text-textDark">
            Built on insight.
            <br />
            Driven by performance.
          </h2>
          <p className="text-base leading-relaxed text-secondary">
            We deliver structured, insight-led investment solutions built for
            consistency, security, and long-term growth.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {performanceFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                index > 0 && "border-t border-border/60 pt-14"
              )}
            >
              <StepIndicator activeIndex={index} />
              <h3 className="text-2xl font-bold text-textDark">{feature.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-secondary">
                {feature.description}
              </p>
              <div className="mt-6">
                <Button href="#">Start Investing</Button>
              </div>
              <div className="relative mx-auto mt-8 aspect-[4/3] max-h-[220px] w-full max-w-sm overflow-hidden rounded-2xl bg-[#E8F5F3]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain object-center p-3"
                  sizes="90vw"
                />
              </div>
            </div>
          ))}
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
