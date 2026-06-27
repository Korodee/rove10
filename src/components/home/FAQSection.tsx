"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <AnimatedSection>
            <h2 className="text-3xl font-bold leading-tight text-textDark md:text-4xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="divide-y divide-border">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question} className="py-5">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span
                        className={cn(
                          "text-base font-semibold text-textDark",
                          isOpen && "text-primary"
                        )}
                      >
                        {item.question}
                      </span>
                      <span className="shrink-0 text-primary">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-sm leading-relaxed text-secondary">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
