"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section className="section-padding">
      <Container>
        <AnimatedSection>
          <div
            className="overflow-hidden rounded-3xl px-8 py-10 md:px-12 md:py-5 lg:px-14"
            style={{
              backgroundColor: "#EAF8F5",
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(0,72,63,0.03) 12px, rgba(0,72,63,0.03) 13px)",
            }}
          >
            <div className="relative grid items-center gap-8 lg:min-h-[280px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-0 xl:min-h-[320px]">
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold leading-tight text-textDark md:text-4xl">
                  Start building a stronger financial future
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-secondary md:text-[17px]">
                  Access expert-driven strategies and investment solutions
                  designed for long-term growth.
                </p>
                <div className="mt-8">
                  <Button href="#">Start Investing</Button>
                </div>
              </div>

              <div className="relative flex items-end justify-center lg:absolute translate-y-16 lg:-translate-x-6 lg:right-6 lg:w-[52%] lg:justify-end xl:right-10">
                <Image
                  src="/images/cta.png"
                  alt="Abstract building blocks illustration"
                  width={1307}
                  height={1230}
                  className="h-56 w-auto object-contain object-bottom md:h-64 lg:h-[380px] lg:max-w-none lg:translate-x-0 lg:translate-y-6 lg:object-right-bottom xl:h-[420px] xl:translate-y-8"
                  sizes="(max-width: 1024px) 300px, 520px"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
