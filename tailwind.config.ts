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
        navy: {
          950: "#040E1B",
          900: "#071B35", // Primary Navy Blue
          800: "#0B2342", // Dark Navy
          700: "#13315C",
          600: "#1B4377",
          100: "#E8EEF5",
          50: "#F2F6FA",
        },
        gold: {
          500: "#C6A15B", // Royal Gold
          400: "#D8BC83", // Soft Gold
          300: "#E5D2A6",
          600: "#B08A44",
          700: "#926F32",
          50: "#FAF7F0",
        },
        surface: {
          light: "#F7F8FA",
          card: "#FFFFFF",
          muted: "#F0F3F7",
        },
        textPrimary: "#071B35",
        textSecondary: "#526174",
        textMuted: "#657184",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "Georgia", "serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -5px rgba(198, 161, 91, 0.25)",
        navy: "0 15px 35px -5px rgba(7, 27, 53, 0.15)",
        luxury: "0 20px 40px -10px rgba(7, 27, 53, 0.08), 0 0 1px rgba(198, 161, 91, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

