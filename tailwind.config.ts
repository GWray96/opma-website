import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      primary: '#0F62FE',
      secondary: '#7F45FF',
      accent: '#FF3366',
      success: '#05CE91',
      muted: '#64748B',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    fontFamily: {
      sora: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
}

export default config 