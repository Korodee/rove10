"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Percent,
  Activity,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { serviceCards, type ServiceCard } from "@/data/services";

const iconMap = {
  fx: BarChart3,
  interest: Percent,
  fixed: Activity,
  asset: Users,
};

const cardSurfaceStyle = {
  backgroundColor: "#F2F9F7",
  backgroundImage: "radial-gradient(circle, #D4E8E2 1px, transparent 1px)",
  backgroundSize: "18px 18px",
} as const;

function ServiceTextBlock({ service }: { service: ServiceCard }) {
  const Icon = iconMap[service.icon];

  return (
    <div className="px-7 py-7 md:px-8 md:py-8">
      <div className="flex items-center gap-2.5">
        <Icon
          size={22}
          className="shrink-0 text-tertiary"
          strokeWidth={2}
        />
        <h3 className="text-xl font-bold text-textDark md:text-[1.35rem]">
          {service.title}
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-secondary font-[700] md:text-[15px]">
        {service.description}
      </p>
      <Link
        href="#"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-tertiary transition-colors hover:text-tertiary-light"
      >
        {service.cta}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function ServiceImageBlock({ service }: { service: ServiceCard }) {
  return (
    <div className="relative flex min-h-[180px] items-center justify-center px-4 py-2 md:min-h-[220px] md:px-6">
      <Image
        src={service.image}
        alt={service.title}
        width={service.imageWidth}
        height={service.imageHeight}
        className="h-auto max-h-[160px] w-full max-w-[95%] object-contain md:max-h-[200px]"
      />
    </div>
  );
}

function SolutionCard({ service }: { service: ServiceCard }) {
  const imageFirst = service.imagePosition === "top";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="flex h-full flex-col overflow-hidden rounded-3xl shadow-[0_2px_24px_rgba(0,72,63,0.05)]"
      style={cardSurfaceStyle}
    >
      {imageFirst ? (
        <>
          <ServiceImageBlock service={service} />
          <ServiceTextBlock service={service} />
        </>
      ) : (
        <>
          <ServiceTextBlock service={service} />
          <ServiceImageBlock service={service} />
        </>
      )}
    </motion.article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-textDark md:text-4xl">
            Explore Our Solutions
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-8">
          {serviceCards.map((service) => (
            <StaggerItem key={service.title}>
              <SolutionCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
