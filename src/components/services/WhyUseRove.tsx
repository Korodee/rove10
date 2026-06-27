"use client";

import Image from "next/image";
import { BarChart3 } from "lucide-react";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function WhyUseRove() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <AnimatedSection>
          <div className="w-full rounded-[28px] bg-[#F4FAF9] px-6 py-12 text-center sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-[4.5rem]">
            <div className="flex items-center justify-center gap-2">
              <BarChart3
                size={18}
                className="text-tertiary"
                strokeWidth={2.25}
              />
              <h2 className="text-[15px] font-bold text-textDark md:text-base">
                Why Use Rove
              </h2>
            </div>

            <p className="text-balance mx-auto mt-6 max-w-[52rem] text-[1.4rem] font-bold leading-[1.35] text-textDark sm:text-[1.65rem] md:mt-8 md:text-[1.85rem] lg:text-[2rem]">
              We combine market expertise, disciplined strategy, and long-term
              thinking to help you navigate markets with confidence and build
              lasting value.
            </p>

            <div className="mx-auto mt-10 w-full max-w-[52rem] md:mt-12 lg:mt-14">
              <Image
                src="/images/why-use-mobile.png"
                alt="You connect with Rove10 to build wealth"
                width={382}
                height={1304}
                className="mx-auto h-auto w-[72%] max-w-[260px] object-contain sm:max-w-[320px] lg:hidden"
                sizes="(max-width: 1024px) 300px, 0px"
              />
              <Image
                src="/images/why-use.png"
                alt="You connect with Rove10 to build wealth"
                width={1704}
                height={516}
                className="hidden h-auto w-full object-contain lg:block"
                sizes="832px"
              />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
