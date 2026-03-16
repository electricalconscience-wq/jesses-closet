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
          yellow: '#e8c840',
          amber: '#d4a017',
          red: '#c0392b',
          teal: '#1abc9c',
        },
      },
    },
  },
  plugins: [],
};

export default config;
