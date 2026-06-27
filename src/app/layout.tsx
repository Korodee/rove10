import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rove10 | Your Reliable Compass to Financial Wealth",
  description:
    "Empowering you to take control and achieve financial freedom. Investment solutions designed for performance, stability, and long-term growth.",
  keywords: [
    "investment",
    "wealth management",
    "financial services",
    "FX trading",
    "asset management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
