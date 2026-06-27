export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Our Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "FX Trading", href: "/services" },
    { label: "Fixed Income Trading", href: "/services" },
    { label: "Interest Rate Trading", href: "/services" },
    { label: "Asset Management", href: "/services" },
  ],
  insights: [
    { label: "Insights", href: "/insights" },
    { label: "Market Updates", href: "/insights" },
    { label: "Newsletters", href: "/insights" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our People", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};
