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
        charcoal: {
          DEFAULT: '#151515',
          950: '#0F0F0F',
          900: '#151515',
          850: '#1B1B1B',
          800: '#222222',
          700: '#2E2E2E',
          600: '#3D3D3D',
        },
        ivory: {
          DEFAULT: '#F8F5EF',
          50: '#FCFAF6',
          100: '#F8F5EF',
          200: '#F1ECE2',
          300: '#E8E0D2',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D5',
          200: '#EFE1AA',
          300: '#E5D07C',
          400: '#DABF52',
          500: '#B89454', // Muted editorial gold
          600: '#9E7D3F',
          700: '#82652E',
          800: '#644C1E',
          900: '#473108',
          metallic: '#C5A059',
          glow: '#D4AF37',
        },
        beige: {
          DEFAULT: '#EDE5D8',
          100: '#F5F0E8',
          200: '#EDE5D8',
          300: '#DFD4C1',
        },
        obsidian: {
          // Backward compatibility alias mapped to deep charcoal tones
          950: '#121212',
          900: '#151515',
          850: '#1A1A1A',
          800: '#222222',
          700: '#2A2A2A',
          600: '#383838',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFB972 0%, #B89454 50%, #8A6B34 100%)',
        'gold-metallic': 'linear-gradient(135deg, #C5A059 0%, #F5E8C7 25%, #B89454 50%, #EAD8B0 75%, #9E7D3F 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(26, 26, 26, 0.85) 0%, rgba(18, 18, 18, 0.95) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px -3px rgba(184, 148, 84, 0.3)',
        'gold-glow-lg': '0 0 35px -5px rgba(184, 148, 84, 0.45)',
        'inner-gold': 'inset 0 1px 1px 0 rgba(223, 185, 114, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
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
