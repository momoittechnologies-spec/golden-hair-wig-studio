/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D5',
          200: '#EFE1AA',
          300: '#E5D07C',
          400: '#DABF52',
          500: '#D4AF37', // Classic metallic gold
          600: '#B88E1F',
          700: '#916B13',
          800: '#6B4C0D',
          900: '#473108',
          glow: '#FFDF78',
        },
        obsidian: {
          950: '#07090E',
          900: '#0C0F17',
          850: '#111724',
          800: '#161F30',
          700: '#1E2B42',
          600: '#2A3B59',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F9D976 0%, #D4AF37 50%, #A27B13 100%)',
        'gold-metallic': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(22, 31, 48, 0.75) 0%, rgba(12, 15, 23, 0.85) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.5)',
        'inner-gold': 'inset 0 1px 1px 0 rgba(255, 223, 120, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
