"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ServicesHero() {
  return (
    <section className="overflow-hidden bg-white pt-8 md:pt-10">
      <Container className="pb-12 md:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <AnimatedSection>
            <h1 className="max-w-xl text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-textDark md:text-5xl lg:text-[3.25rem]">
              Investment solutions designed for performance and stability
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-[17px]">
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

          <AnimatedSection
            delay={0.15}
            className="relative flex min-h-[280px] items-center justify-center lg:min-h-[420px]"
          >
            <div className="relative h-full min-h-[280px] w-full lg:min-h-[420px]">
              <Image
                src="/images/services-hero.png"
                alt="Financial professional ready to help with your investments"
                fill
                className="object-contain object-center lg:object-right"
                sizes="(max-width: 1024px) 100vw, 760px"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
