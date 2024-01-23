import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      colors: {
        "primary-1": "#ff7a1f",
        "secondary-1": "#3a2274",
        "secondary-2": "#201048",
        "secondary-3": "#0B0B12",
        "secondary-4": "#000642",
        "stroct-1": "#cdc7e0",
        "primary-32": "rgba(11, 11, 18, 0.32)",
        "BG-1": "#f6f3ff",
        "BG-2": "#2c1860",
        "stoke": "#6142ab",
        "dark": "#010530",
        "info": "#37b0f7",
        "glass-1": "rgba(58, 34, 116, 0.5019607843137255)",
        white: "#ffffff",
        black: "#000000",
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-30px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'bounce-slow': 'bounce-slow 5s infinite',
      }

    },
  },
  plugins: [],
}
export default config
