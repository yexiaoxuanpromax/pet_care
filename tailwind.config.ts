import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fffaf1",
        paper: "#ffffff",
        ink: "#24312f",
        muted: "#64716d",
        sage: "#8fb7a1",
        "sage-dark": "#41695b",
        coral: "#e8755f",
        blue: "#5c88a5",
        mint: "#e8f4ee",
        charcoal: "#20302d",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(36, 49, 47, 0.12)",
        button: "0 14px 30px rgba(232, 117, 95, 0.25)",
        panel: "0 20px 54px rgba(36, 49, 47, 0.16)",
      },
      fontFamily: {
        sans: ["Microsoft YaHei", "PingFang SC", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
