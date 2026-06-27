"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import Logo from "@/components/shared/Logo";
import Container from "@/components/shared/Container";
import { footerLinks } from "@/data/nav";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const categoryLabels: Record<string, string> = {
  services: "Services",
  insights: "Insights",
  company: "Company",
  legal: "Legal",
};

const iconClassName =
  "h-[18px] w-[18px] shrink-0 text-tertiary transition-colors group-hover:text-tertiary-light";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-white pt-14 md:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,380px)_1fr] xl:gap-24">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] font-medium leading-relaxed text-secondary md:mt-6">
              Subscribe to our newsletter for weekly insights for smarter
              decisions.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-5 max-w-sm md:mt-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full rounded-full bg-[#F0F0F0] py-3.5 pl-5 pr-14 text-sm text-bodyText outline-none placeholder:text-[#9CA3A3] focus:ring-2 focus:ring-primary/10"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-tertiary text-white transition-colors hover:bg-tertiary-light"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={18} strokeWidth={2.25} />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:gap-x-14 xl:gap-x-16">
            {(
              Object.entries(footerLinks) as [
                string,
                { label: string; href: string }[],
              ][]
            ).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-sm font-bold text-textDark">
                  {categoryLabels[category] ?? category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="whitespace-nowrap text-sm text-bodyText transition-colors hover:text-textDark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#E5E5E5] py-8 md:mt-16 md:flex-row md:items-center">
          <p className="text-sm text-bodyText">
            ©2026 Rove10. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-bodyText transition-colors hover:text-textDark"
            >
              <Linkedin className={iconClassName} strokeWidth={1.75} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-bodyText transition-colors hover:text-textDark"
            >
              <Instagram className={iconClassName} strokeWidth={1.75} />
              <span>Instagram</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-bodyText transition-colors hover:text-textDark"
            >
              <XIcon className={iconClassName} />
              <span>X</span>
            </a>
            <a
              href="mailto:hello@rove10.com"
              className="group flex items-center gap-2 text-sm text-bodyText transition-colors hover:text-textDark"
            >
              <Mail className={iconClassName} strokeWidth={1.75} />
              <span>hello@rove10.com</span>
            </a>
          </div>
        </div>
      </Container>

      <div
        className="pointer-events-none w-full select-none overflow-hidden px-5 pb-4 pt-2 md:px-8 md:pb-6"
        aria-hidden
      >
        <Image
          src="/images/footer-logo.png"
          alt=""
          width={2880}
          height={665}
          className="mx-auto h-auto w-full min-w-0 max-w-[1400px] opacity-[0.55]"
          sizes="100vw"
        />
      </div>
    </footer>
  );
}
