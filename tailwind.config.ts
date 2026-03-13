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
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E3C56E",
          dark: "#9A7A2E",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        playfair: ["Playfair Display", "Georgia", "serif"],
        dancing: ["Dancing Script", "cursive"],
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
