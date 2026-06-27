import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Rove10",
  description:
    "Get in touch with the Rove10 team. We're here to help you find the right investment solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
