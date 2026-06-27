"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="relative grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-[72px]">
          <Logo className="justify-self-start" size="sm" />

          {/* Desktop nav — truly centered */}
          <ul className="hidden items-center gap-8 justify-self-center lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-dark",
                    isActive(link.href) && "font-bold underline decoration-tertiary decoration-2 underline-offset-8"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center justify-end gap-6 justify-self-end lg:flex">
            <Link
              href="#"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Log In
            </Link>
            <Button href="#" size="sm">
              Create Account
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-lg text-primary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block text-sm font-semibold uppercase tracking-wider text-primary",
                        isActive(link.href) && "font-bold text-tertiary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="border-t border-border pt-4">
                  <Link
                    href="#"
                    className="block py-2 text-sm font-semibold text-primary"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Button href="#" className="w-full">
                    Create Account
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
