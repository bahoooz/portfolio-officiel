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
        lightYellow: "#9291FF",
        darkYellow: "#7366FF",
        lightBrown: "#3938AD",
        darkBrown: "#5E5DDE",
        bgColorLight: "#f1eefb",
        bgColorDark: "#170F2D",
        bgFooterDark: "#0F0821",
        bgFooterLight: "#C6C6FF",
      },
    },
  },
  darkMode: "class",
};
export default config;
