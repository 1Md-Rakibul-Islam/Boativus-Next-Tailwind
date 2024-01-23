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

        "brown-B50": "#fbf7f3",
        "brown-B75": "#eedecc",
        "brown-B100": "#e7d0b7",
        "brown-B200": "#dcbc97",
        "brown-B300": "#d5ae82",
        "brown-B400": "#957a5b",
        "brown-B500": "#826a4f",

        "blue-B0": "#ffffff",
        "blue-B10": "#fafafb",
        "blue-B20": "#f5f5f7",
        "blue-30": "#ebecef",
        "blue-40": "#dfe0e5",
        "blue-B50": "#c1c4cd",
        "blue-B60": "#b2b5c1",
        "blue-B70": "#a5a9b7",
        "blue-B80": "#969bab",
        "blue-B90": "#878d9f",
        "blue-B100": "#797e94",
        "blue-B200": "#6a7088",
        "blue-B500": "#3f4866",
        "blue-B600": "#333c5c",
        "blue-B700": "#212b4e",
        "blue-B800": "#121d42",
        "blue-B900": "#061138",

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
