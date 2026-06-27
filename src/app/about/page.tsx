import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About Us | Rove10",
  description:
    "Building confidence through smarter investment decisions. Learn about Rove10's mission and team.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <CTASection />
    </>
  );
}
