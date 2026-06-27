"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const iconClassName = "h-[18px] w-[18px] shrink-0 text-tertiary";

export default function ContactInfo() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="relative aspect-[1164/723] w-full overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src="/images/contact-us.png"
            alt="Rove10 office conference room"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="lg:py-4">
          <div className="flex items-center gap-2">
            <MapPin className={iconClassName} aria-hidden />
            <span className="text-sm text-muted">Address</span>
          </div>
          <p className="mt-3 max-w-md text-2xl font-extrabold leading-snug text-textDark md:text-[1.75rem] lg:text-[2rem]">
            301 Jide Oki St, Victoria Island, Lagos
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="mailto:hello@rove10.com"
              className="flex items-center gap-2.5 text-sm font-medium text-textDark transition-colors hover:text-primary"
            >
              <Mail className={iconClassName} aria-hidden />
              hello@rove10.com
            </a>
            <a
              href="mailto:hello@rove10.com"
              className="flex items-center gap-2.5 text-sm font-medium text-textDark transition-colors hover:text-primary"
            >
              <Phone className={iconClassName} aria-hidden />
              hello@rove10.com
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
