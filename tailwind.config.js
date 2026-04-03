/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A96E',
        'hero-bg': '#0A0D1A',
        background: 'hsl(0 0% 98%)',
        foreground: 'hsl(220 15% 12%)',
        primary: 'hsl(38 52% 55%)',
        secondary: 'hsl(220 20% 97%)',
        muted: 'hsl(220 10% 93%)',
        'muted-foreground': 'hsl(220 8% 48%)',
        border: 'hsl(220 10% 88%)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'fade-rise': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-rise': 'fade-rise 0.8s ease-out both',
        'fade-rise-delay': 'fade-rise 0.8s ease-out 0.2s both',
        'fade-rise-delay-2': 'fade-rise 0.8s ease-out 0.4s both',
        'fade-rise-delay-3': 'fade-rise 0.8s ease-out 0.6s both',
      },
    },
  },
  plugins: [],
}
