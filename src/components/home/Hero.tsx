"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { value: "$1.4B+", label: "Assets Under Management" },
  { value: "$200M", label: "Fee-bearing capital" },
  { value: "40+", label: "Countries" },
];

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col justify-center overflow-hidden">
      <Container className="py-8 md:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <AnimatedSection>
            <h1 className="max-w-xl text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-textDark md:text-5xl lg:text-[3.5rem]">
              Your Reliable Compass to Financial Wealth
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-[17px]">
              Empowering you to take control and achieve financial freedom. One
              transaction at a time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href="#" size="lg">
                Start Investing
              </Button>
              <Link
                href="/insights"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-tertiary"
              >
                View Market Insights
                <ArrowRight
                  size={16}
                  className="text-tertiary transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-12 flex">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 ${index > 0 ? "border-l border-border pl-6 md:pl-10" : "pr-2"}`}
                >
                  <p className="text-xl font-extrabold text-textDark md:text-2xl lg:text-[1.75rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-muted md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative flex h-full min-h-[280px] items-center lg:min-h-[420px]">
            <div className="relative h-full min-h-[280px] w-full lg:min-h-[420px]">
              <Image
                src="/images/hero.png"
                alt="Professionals reviewing financial insights together"
                fill
                className="object-contain object-right"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
