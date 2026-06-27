import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00483F",
          dark: "#00352F",
          darker: "#003F38",
        },
        accent: {
          DEFAULT: "#D96500",
          light: "#E46D19",
        },
        mint: {
          DEFAULT: "#EAF8F5",
          soft: "#F4FBF9",
        },
        textDark: "#023E38",
        secondary: "#322B28",
        bodyText: "#2F3F3C",
        tertiary: {
          DEFAULT: "#CC5500",
          light: "#E87A1A",
        },
        muted: "#6B7775",
        border: "#E8EFED",
        ticker: "#FFF5EE",
        tickerPeach: "#FDE6D8",
        tickerCream: "#FFF9F1",
        cream: "#FDFBF8",
      },
      fontFamily: {
        sans: ['"Work Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 72, 63, 0.06)",
        cardHover: "0 8px 32px rgba(0, 72, 63, 0.12)",
        soft: "0 2px 12px rgba(0, 72, 63, 0.04)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
