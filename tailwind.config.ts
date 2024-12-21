import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ngollogreen: "#006400",
        ngolloblue: "#00008B",
        ngolloyellow: "yellow",
        ngolloindigo: "lightblue",
        ngolloheader1: "rgb(56, 50, 88)",
        ngolloheader2: "rgb(119, 106, 106)",
        ngolloheader3: "rgb(186, 136, 94)",
      },
    },
  },
  plugins: [],
} satisfies Config;
