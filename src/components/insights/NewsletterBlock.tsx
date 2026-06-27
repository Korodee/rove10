"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

const inputClassName =
  "w-full rounded-full bg-[#F0F0F0] px-6 py-4 text-sm text-textDark outline-none placeholder:text-[#9CA3A3] focus:ring-2 focus:ring-primary/10";

export default function NewsletterBlock() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="relative mx-auto aspect-[992/862] w-full max-w-[520px] overflow-hidden rounded-3xl lg:mx-0 lg:max-w-none">
              <Image
                src="/images/newsletter.png"
                alt="Newsletter mailbox illustration"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:py-2">
              <h2 className="text-[1.75rem] font-extrabold leading-snug text-textDark md:text-[2rem] lg:text-[2.125rem]">
                Subscribe to our newsletter and never miss the latest market
                opportunities and investment outlooks.
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4 md:mt-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className={inputClassName}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className={inputClassName}
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClassName}
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
