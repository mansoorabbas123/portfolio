import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        xl: "1110px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        flord: "#475569",
        mystic: "#E2E8F0",
        mirage: "#1E293B",
      },
      textColor: {
        "teal-900": "#2D3748", // Change the hex code as per your requirement
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark", "group-hover"],
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
export default config;
