import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        lightYellow: "#FFEECD",
        darkYellow: "#C6B18A",
        lightBrown: "#85662D",
        darkBrown: "#6b5121",
        bgColorLight: "#FFFCF6",
        bgColorDark: "#241F19",
        bgFooter: "#1A1510"
      },
    },
  },
  darkMode: "class",
};
export default config;
