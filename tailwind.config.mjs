/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#06090F',
          card: '#0B101D',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#06B6D4',
          emerald: '#10B981',
          blue: '#3B82F6',
          violet: '#8B5CF6',
        },
      },
    },
  },
  plugins: [],
};
