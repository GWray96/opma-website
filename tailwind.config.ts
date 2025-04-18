import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB',    // Rich blue
        'accent': '#7C3AED',     // Vibrant purple
        'neutral': {
          DEFAULT: '#1A1A2F',    // Deep blue-gray
          light: '#F8FAFC',      // Light gray
          dark: '#1E293B',       // Dark blue-gray
        },
        'background': '#FFFFFF',  // Pure white
        'success': '#10B981',    // Emerald green
        'surface': {
          light: '#F8FAFC',      // Light gray for cards
          dark: '#1E293B',       // Dark blue-gray
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 32px -4px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

export default config 