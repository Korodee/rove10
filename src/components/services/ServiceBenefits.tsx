"use client";

import Image from "next/image";
import { TrendingUp, Newspaper, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { benefitCards } from "@/data/services";

const iconMap = {
  approach: TrendingUp,
  insight: Newspaper,
  focus: BarChart3,
};

export default function ServiceBenefits() {
  return (
    <section className="bg-white pb-14 md:pb-20 lg:pb-24">
      <Container>
        <StaggerContainer className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {benefitCards.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <StaggerItem key={benefit.title}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative rounded-[28px] px-6 pb-10 pt-16 text-center md:px-7 md:pb-12 md:pt-[4.5rem]"
                  style={{ backgroundColor: benefit.backgroundColor }}
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={benefit.badge}
                      alt=""
                      width={106}
                      height={106}
                      className="h-[88px] w-[88px] md:h-[106px] md:w-[106px]"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <Icon
                      size={18}
                      className="shrink-0 text-tertiary"
                      strokeWidth={2.25}
                    />
                    <h3 className="text-base font-bold text-textDark md:text-[17px]">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="mx-auto mt-5 max-w-[16rem] text-lg font-bold leading-snug text-textDark md:mt-6 md:text-xl">
                    {benefit.description}
                  </p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
