/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2D8CDB',
          teal: '#00A8B5',
          orange: '#F58220',
          dark: '#070A12',
          card: '#0C1220',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  plugins: [],
};
