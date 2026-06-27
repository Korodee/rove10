"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function AboutMission() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <AnimatedSection>
          <div className="grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12 lg:gap-20">
            <h2 className="text-3xl font-extrabold text-textDark md:text-4xl">
              Our Mission
            </h2>
            <div>
              <p className="text-base leading-relaxed text-secondary md:text-[17px]">
                Our Mission is to provide innovative, secure, and seamless
                financial services that empower individuals and businesses to
                achieve their financial goals.
              </p>
              <p className="mt-5 text-base leading-relaxed text-secondary md:mt-6 md:text-[17px]">
                We deliver structured investment solutions designed to help
                individuals and businesses navigate complex financial markets
                with clarity, manage risk effectively, and build long-term value
                with confidence.
              </p>
              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-0.5 text-sm font-semibold text-tertiary transition-colors hover:text-tertiary-light md:mt-8"
              >
                View Our Services
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
