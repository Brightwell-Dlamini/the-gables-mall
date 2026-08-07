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
        primary: "#22c55e",
        "primary-bright": "#17ff49",
        "primary-lime": "#85d32c",
        "primary-teal": "#00b074",
      },
    },
  },
  plugins: [],
};
export default config;
