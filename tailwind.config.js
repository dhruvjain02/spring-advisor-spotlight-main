/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#108E66',
          50: '#E6F5EF',
          100: '#CCEBE0',
          200: '#99D7C1',
          300: '#66C3A2',
          400: '#33AF83',
          500: '#108E66',
          600: '#0D7252',
          700: '#0A553D',
          800: '#073929',
          900: '#041C14',
        },
        gray: {
          50: '#FCFFFE',
          100: '#F5F7F6',
          200: '#EBEEED',
          300: '#D1D5D3',
          400: '#A4ABA8',
          500: '#272A2B',
          600: '#1F2223',
          700: '#18191A',
          800: '#101112',
          900: '#080909',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
