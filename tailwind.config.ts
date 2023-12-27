import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      circleImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,78,0.051948051948051965) 35%, rgba(0,212,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
