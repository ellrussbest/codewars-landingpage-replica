import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          'url("/background.png"), linear-gradient(to right, #42312c, #452225)',
        "hero-pattern_2":
          'url("/background.png"), linear-gradient(to right, #b07157, #b93d3e)',
        "hero-pattern_3":
          'url("/background.png"), linear-gradient(to right, #19332e, #1f3529)',
      },
      backgroundSize: {
        "size-200_200": "200px 200px",
      },
      backgroundPosition: {
        "pos-0_0": "0px 0px",
      },
      colors: {
        "black-100": "var(--black-100)",
        "black-101": "#0a0a0c",
      },
      boxShadow: {
        xs: "0 1px 0 0 rgba(255, 255, 255, .1)",
        "inset-white": "inset 0 0 0 1px rgb(255 255 255)",
        "inset-red": "inset 0 0 0 1px #ff4d4d",
      },
      fontSize: {
        inherit: "inherit",
      },
      gridTemplateColumns: {
        "max-content-fr": "max-content 1fr",
        "eight-auto": "auto auto auto auto auto auto auto auto",
      },
      screens: {
        xd: { max: "991px" },
      },
      gridRowStart: {
        "span-1": "span 1",
      },
      gridRowEnd: {
        "span-1": "span 1",
      },
      gridColumnStart: {
        "span-1": "span 1",
        "span-5": "span 5",
      },
      gridColumnEnd: {
        "span-1": "span 1",
        "span-5": "span 5",
      },
      animation: {
        "fade-opacity": "fade-opacity 5000ms ease-in-out infinite",
      },
      keyframes: {
        "fade-opacity": {
          "50%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
