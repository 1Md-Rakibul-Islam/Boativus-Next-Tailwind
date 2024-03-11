import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  blackMode: 'class',
  theme: {
    screens: {
      xsm: "400px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "xxl+": "1500px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      colors: {
        "brown-B50": "#fbf7f3",
        "brown-B75": "#eedecc",
        "brown-B100": "#e7d0b7",
        "brown-B200": "#dcbc97",
        "brown-B300": "#d5ae82",
        "brown-B350": "#AA8453",
        "brown-B400": "#957a5b",
        "brown-B500": "#826a4f",

        "blue-B0": "#ffffff",
        "blue-B5": "#FBF7F3",
        "blue-B10": "#fafafb",
        "blue-B20": "#f5f5f7",
        "blue-B30": "#ebecef",
        "blue-B40": "#dfe0e5",
        "blue-B50": "#c1c4cd",
        "blue-B60": "#b2b5c1",
        "blue-B70": "#a5a9b7",
        "blue-B80": "#969bab",
        "blue-B90": "#878d9f",
        "blue-B100": "#797e94",
        "blue-B200": "#6a7088",
        "blue-B300": "#5B627C",
        "blue-B400": "#4E5672",
        "blue-B500": "#3f4866",
        "blue-B600": "#333c5c",
        "blue-B700": "#212b4e",
        "blue-B800": "#121d42",
        "blue-B900": "#061138",
        "blue-B1000": "rgb(6,17,56)",

        "glass-1": "rgba(6,17,56,0.60)",

        "white-2": "#f6f6f6",

        "warning-1": "#FAC248",
        "warning-2": "#FFB32B",

        white: "#FFF",
        black: "#000000",
      },
      keyframes: {
        "bounce-slow-top": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-top-2": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-200px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-down": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-left": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "bounce-slow-right": {
          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(20px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-up": {
          "100%": {
            transform: "translateY(-200%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-down": {
          "-100%": {
            transform: "translateY(200%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
        "fade-slow-right": {
          "100%": {
            transform: "translateX(-400%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.5, 0.8)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "bounce-slow-top": "bounce-slow-top 3s linear infinite",
        "bounce-slow-top-2": "bounce-slow-top 4s linear infinite",
        "bounce-slow-down": "bounce-slow-down 3s linear infinite",
        "bounce-slow-right": "bounce-slow-right 3s linear infinite",
        "bounce-slow-left": "bounce-slow-left 3s linear infinite",
        "fade-slow-up": "fade-slow-up 20s linear infinite",
        "fade-slow-down": "fade-slow-down 20s linear infinite",
        "fade-slow-right": "fade-slow-right 20s linear infinite",
      },
      boxShadow: {
        1: "0px 40.009px 25.006px -15.004px rgba(0, 00, 0.15)",
        2: "0px 12.503px 40.009px 0px rgba(00, 0, 0.15)",
        3: "0px 8px 15px 0px rgba(0, 0, 0, 0.05)",
        4: "0px 1px 2px 0px rgba(0, 0, 0, 0.20)",
        5: "1px 1px 1px 0px rgba(0, 0, 0, 0.15)",
        6: "0px 5px 24px 0px rgba(0, 0, 0, 0.10)",
        7: "0px 0px 0px 1px rgba(68, 68, 68, .11)",
      },
    },
    fontFamily: {
      // Specify the CSS variables for your fonts
      playfair: ["Playfair_Display", "serif"],
      barlow: ["Barlow", "sans-serif"],
    },
  },
  plugins: [],
}
export default config
