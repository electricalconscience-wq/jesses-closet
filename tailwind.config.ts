import type { Config } from 'tailwindcss';

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
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          dark: '#2a2a2a',
          gray: '#3a3a3a',
          mid: '#6b6b6b',
          light: '#a0a0a0',
          cream: '#e8e4de',
          sand: '#c4b9a8',
          yellow: '#FFD700',
          amber: '#e8b800',
          red: '#FF1744',
          neon: '#39FF14',
          hotpink: '#FF1493',
          cyan: '#00FFFF',
          rust: '#8B4513',
          mesa: '#CD853F',
          sage: '#6B8E23',
          'desert-sky': '#0a0a12',
          'desert-orange': '#CC5500',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['VT323', 'Courier New', 'monospace'],
        pixel: ['VT323', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
