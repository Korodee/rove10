"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { aboutCollageColumns } from "@/data/about";
import { cn } from "@/lib/utils";

const frameVariantClass = {
  tall: "aspect-[4/5]",
  square: "aspect-square",
} as const;

export default function AboutHero() {
  return (
    <section className="bg-[#FDFBF8] pb-0 pt-8 md:pt-14 lg:pt-16">
      <Container>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-[2rem] font-extrabold leading-[1.12] tracking-tight text-textDark md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Building Confidence Through Smarter Investment Decisions
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-secondary md:mt-6 md:text-[17px]">
            We help individuals, businesses, and institutions navigate financial
            markets with disciplined investment strategies, market expertise, and
            a long-term commitment to creating sustainable value.
          </p>
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="mt-10 md:mt-12 lg:mt-14">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Single clip window — cuts all columns on the same horizontal line */}
          <div className="overflow-hidden h-[268px] sm:h-[320px] md:h-[400px] lg:h-[432px]">
            <div className="grid grid-cols-5 items-start gap-3 md:gap-4 lg:gap-5">
              {aboutCollageColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className={cn(
                    "flex flex-col gap-3 md:gap-4 lg:gap-5",
                    column.stagger === "low" && "pt-14 md:pt-[88px] lg:pt-24"
                  )}
                >
                  {column.frames.map((frame, frameIndex) => (
                    <div
                      key={`${columnIndex}-${frameIndex}-${frame.src}`}
                      className={cn(
                        "relative w-full shrink-0 overflow-hidden rounded-2xl md:rounded-[24px]",
                        frameVariantClass[frame.variant]
                      )}
                    >
                      <Image
                        src={frame.src}
                        alt={frame.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 18vw, 270px"
                        priority={columnIndex < 3 && frameIndex === 0}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
