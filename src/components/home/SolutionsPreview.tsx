"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { homeSolutions } from "@/data/services";
import { cn } from "@/lib/utils";

const cardSurfaceStyle = {
  backgroundColor: "#F2F9F7",
  backgroundImage: "radial-gradient(circle, #D4E8E2 1px, transparent 1px)",
  backgroundSize: "18px 18px",
} as const;

const solutionColSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
];

export default function SolutionsPreview() {
  return (
    <section className="section-padding bg-[#FDFBF8]">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="max-w-4xl text-[1.75rem] font-extrabold leading-[1.18] tracking-tight text-textDark md:text-4xl lg:text-[2.5rem]">
              Powerful investment solutions designed to help you grow and protect
              your wealth over time
            </h2>
            <Button href="#" className="shrink-0 self-start">
              Start Investing
            </Button>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          {homeSolutions.map((solution, index) => (
            <StaggerItem
              key={solution.title}
              className={cn("h-full w-full min-w-0", solutionColSpans[index])}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex h-full w-full flex-col overflow-hidden rounded-3xl shadow-[0_2px_24px_rgba(0,72,63,0.05)]"
                style={cardSurfaceStyle}
              >
                <div className="relative flex min-h-[200px] items-center justify-center px-6 py-8 md:min-h-[240px] md:px-8 md:py-10">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={solution.imageWidth}
                    height={solution.imageHeight}
                    className="h-auto max-h-[160px] w-auto max-w-full object-contain md:max-h-[200px]"
                  />
                </div>
                <div className="px-7 py-6 md:px-8 md:py-7">
                  <h3 className="text-lg font-bold text-textDark md:text-xl">
                    {solution.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-secondary font-[500] md:text-[15px]">
                    {solution.description}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
