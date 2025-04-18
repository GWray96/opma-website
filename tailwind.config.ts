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
        brand: {
          primary: '#0F62FE',      // Vibrant blue
          secondary: '#7F45FF',    // Rich purple
          accent: '#FF3366',       // Energetic pink
          success: '#05CE91',      // Fresh green
        },
        surface: {
          50: '#F8FAFC',          // Lightest
          100: '#F1F5F9',         // Lighter
          200: '#E2E8F0',         // Light
          300: '#CBD5E1',         // Light gray
          400: '#94A3B8',         // Medium gray
          500: '#64748B',         // Gray
          600: '#475569',         // Dark gray
          700: '#334155',         // Darker gray
          800: '#1E293B',         // Dark
          900: '#0F172A',         // Darkest
        },
        primary: '#0F62FE',      // Alias for brand-primary
        secondary: '#7F45FF',    // Alias for brand-secondary
        accent: '#FF3366',       // Alias for brand-accent
        success: '#05CE91',      // Alias for brand-success
        neutral: '#0F172A',      // Alias for surface-900
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        jakarta: ['var(--font-outfit)', 'system-ui', 'sans-serif'], // Alias for display
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-base': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'soft': '0px 2px 12px rgba(0, 0, 0, 0.08)',
        'medium': '0px 4px 16px rgba(0, 0, 0, 0.12)',
        'strong': '0px 8px 24px rgba(0, 0, 0, 0.16)',
        'inner-soft': 'inset 0px 2px 8px rgba(0, 0, 0, 0.08)',
        'hover': '0px 4px 16px rgba(0, 0, 0, 0.12)', // Alias for medium
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-down': 'fadeDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Surface colors
    'bg-surface-50',
    'text-surface-900',
    'border-surface-200',
    'border-surface-800',
    'text-surface-800',
    // Brand colors
    'bg-brand-primary',
    'bg-brand-secondary',
    'bg-brand-accent',
    'bg-brand-success',
    'text-brand-primary', 
    'text-brand-secondary',
    'text-brand-accent',
    'text-brand-success',
    'border-brand-primary',
    'hover:bg-brand-primary',
    'hover:bg-brand-primary/90',
    'hover:bg-brand-secondary',
    'hover:bg-brand-secondary/90',
    // Primary, accent direct classes
    'bg-primary',
    'bg-accent',
    'bg-success',
    'text-primary',
    'text-accent',
    'text-success',
    'text-neutral',
    'border-primary',
    'hover:bg-primary',
    'hover:bg-primary/90',
    // Font family classes
    'font-body',
    'font-display',
    'font-jakarta',
    // Shadow classes
    'shadow-soft',
    'shadow-medium',
    'shadow-hover',
    // Background utility classes
    'bg-surface-light',
    'from-primary/5',
    'to-accent/5',
    'via-surface-light/50',
    'to-surface-light',
  ],
}

export default config 