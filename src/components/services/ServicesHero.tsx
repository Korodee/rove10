"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import HeroImage from "@/components/shared/HeroImage";
import HeroBackground from "@/components/shared/HeroBackground";
import AnimatedSection from "@/components/shared/AnimatedSection";

const servicesHeroImage = {
  src: "/images/services-hero.png",
  alt: "Classical statue representing enduring financial strength",
};

export default function ServicesHero() {
  return (
    <section className="relative flex flex-1 flex-col justify-center overflow-hidden bg-white">
      <HeroBackground />

      <Container className="relative z-10 py-8 md:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-14 xl:gap-20">
          <AnimatedSection className="lg:col-span-2">
            <h1 className="max-w-xl text-[2rem] font-extrabold leading-[1.1] tracking-tight text-textDark md:text-5xl lg:max-w-none lg:text-[3.25rem]">
              Investment solutions designed for performance and stability
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary md:text-[17px] lg:max-w-lg">
              We offer a range of financial services tailored to help individuals
              and businesses manage risk, optimize returns, and achieve long-term
              growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href="#" size="lg">
                Start Investing
              </Button>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-0.5 text-sm font-semibold text-tertiary transition-colors hover:text-tertiary-light"
              >
                Speak with our Team
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="hidden lg:col-span-1 lg:block" aria-hidden />
        </div>
      </Container>

      <AnimatedSection
        delay={0.15}
        className="pointer-events-none absolute bottom-0 right-0 top-[10%] z-[1] hidden overflow-hidden lg:left-[50%] lg:block"
      >
        <HeroImage
          {...servicesHeroImage}
          bleed
          className="relative h-full w-full"
          imageClassName="object-contain object-bottom-right"
        />
      </AnimatedSection>
    </section>
  );
}
