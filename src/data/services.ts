export interface SolutionCard {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export const homeSolutions: SolutionCard[] = [
  {
    title: "Tailored Investment Plans",
    description:
      "Customized portfolios that match your financial aspirations.",
    image: "/images/tailored.png",
    imageWidth: 769,
    imageHeight: 526,
  },
  {
    title: "High-Yield Opportunities",
    description:
      "Gain investments that maximize your returns effectively.",
    image: "/images/high-yeild.png",
    imageWidth: 525,
    imageHeight: 379,
  },
  {
    title: "Real-Time Insights",
    description:
      "Intelligent tools delivering up-to-the-minute market trends and analysis.",
    image: "/images/real-time.png",
    imageWidth: 525,
    imageHeight: 258,
  },
  {
    title: "Strategic Growth",
    description:
      "Optimize your wealth with smart investments designed to multiply your assets.",
    image: "/images/strategic.png",
    imageWidth: 1034,
    imageHeight: 530,
  },
];

export interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  icon: "fx" | "interest" | "fixed" | "asset";
  image: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: "top" | "bottom";
}

export const serviceCards: ServiceCard[] = [
  {
    title: "FX Trading",
    description:
      "Real-time, high-liquidity foreign exchange trading designed for efficient execution and competitive pricing.",
    cta: "Start Trading",
    icon: "fx",
    image: "/images/fx.png",
    imageWidth: 1144,
    imageHeight: 605,
    imagePosition: "bottom",
  },
  {
    title: "Interest Rate Trading",
    description:
      "Structured solutions offering stable returns through fixed deposits and interest-bearing instruments.",
    cta: "Start Earning",
    icon: "interest",
    image: "/images/interest-rate.png",
    imageWidth: 1142,
    imageHeight: 436,
    imagePosition: "bottom",
  },
  {
    title: "Fixed Income Trading",
    description:
      "Access to treasury bills, bonds, and commercial papers designed to provide reliable, lower-risk returns.",
    cta: "Start Investing",
    icon: "fixed",
    image: "/images/fixed-income.png",
    imageWidth: 1142,
    imageHeight: 458,
    imagePosition: "top",
  },
  {
    title: "Asset Management",
    description:
      "Customized portfolio strategies tailored to your financial goals and risk profile.",
    cta: "Start Building",
    icon: "asset",
    image: "/images/asset-management.png",
    imageWidth: 1142,
    imageHeight: 458,
    imagePosition: "top",
  },
];

export interface BenefitCard {
  title: string;
  description: string;
  badge: string;
  backgroundColor: string;
  icon: "approach" | "insight" | "focus";
}

export const benefitCards: BenefitCard[] = [
  {
    title: "Structured Approach",
    description:
      "Disciplined strategies designed for long-term performance.",
    badge: "/images/structures-approach.svg",
    backgroundColor: "#F4FAF9",
    icon: "approach",
  },
  {
    title: "Market Insight",
    description:
      "Driven by research, analysis, and real-time market intelligence.",
    badge: "/images/market-insight.svg",
    backgroundColor: "#F5F5F5",
    icon: "insight",
  },
  {
    title: "Long-Term Focus",
    description:
      "Focused on sustainable growth and consistent outcomes over time.",
    badge: "/images/long-term-focus.svg",
    backgroundColor: "#FFF5EE",
    icon: "focus",
  },
];

export interface PerformanceFeature {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export const performanceFeatures: PerformanceFeature[] = [
  {
    title: "Data-Driven Approach",
    description:
      "Insight-led strategies powered by research, analytics, and real-time market intelligence.",
    image: "/images/data-driven.png",
    imageWidth: 1270,
    imageHeight: 888,
  },
  {
    title: "Institutional-Grade Solutions",
    description:
      "Professionally structured investment solutions designed to meet the highest industry standards.",
    image: "/images/institutional-grade.png",
    imageWidth: 1270,
    imageHeight: 888,
  },
  {
    title: "Secure & Transparent",
    description:
      "A disciplined approach focused on protecting your capital with clarity and accountability at every step.",
    image: "/images/secure.png",
    imageWidth: 1270,
    imageHeight: 888,
  },
];
