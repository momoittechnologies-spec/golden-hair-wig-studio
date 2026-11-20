/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Owner's Non-Negotiable Light Theme Palette
        brand: {
          bg: '#FFFFFF',
          alt: '#FAF8F4',
          ivory: '#F5F0E8',
          border: '#E8E2D8',
          heading: '#242424',
          body: '#505050',
          gold: '#C99716',
          'gold-hover': '#AB7B08',
          sage: '#E8EEE8',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          50: '#FAF8F4',
          100: '#F5F0E8',
          200: '#EBE4D8',
          300: '#E0D5C3',
        },
        gold: {
          50: '#FDF9ED',
          100: '#FBF0CB',
          200: '#F5E095',
          300: '#ECCB60',
          400: '#DFB233',
          500: '#C99716', // Vibrant authentic brand gold (matches official logo)
          600: '#AB7B08', // Rich dark gold hover accent
          700: '#875D06', // High-contrast accessible text gold (> 5.5:1 on white)
          800: '#664402',
          900: '#422B00',
        },
        neutral: {
          50: '#FAF8F4',
          100: '#F5F0E8',
          200: '#E8E2D8',
          300: '#D8D0C3',
          400: '#A89E90',
          500: '#756D61',
          600: '#505050', // Body text
          700: '#3D3D3D',
          800: '#2E2E2E',
          900: '#242424', // Heading color
          950: '#181818',
        },
        // Backward-compatibility aliases remapped to clean light palette
        charcoal: {
          DEFAULT: '#242424',
          950: '#181818',
          900: '#242424',
          850: '#2E2E2E',
          800: '#3D3D3D',
          700: '#505050',
          600: '#756D61',
        },
        obsidian: {
          950: '#FFFFFF',
          900: '#FAF8F4',
          850: '#F5F0E8',
          800: '#E8E2D8',
          700: '#D8D0C3',
          600: '#505050',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ECCB60 0%, #C99716 50%, #AB7B08 100%)',
        'gold-soft': 'linear-gradient(135deg, #FDF9ED 0%, #FBF0CB 100%)',
        'light-card': 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F4 100%)',
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(201, 151, 22, 0.22)',
        'light-card': '0 2px 12px -2px rgba(0, 0, 0, 0.05)',
        'light-hover': '0 10px 25px -4px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
