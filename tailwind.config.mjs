/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'void': '#121212',
        'deep-void': '#0a0a0a',
        'rust': '#8B3E2F',
        'ochre': '#CC7722',
        'cyan-electric': '#00FFFF',
        'blue-tech': '#0099FF',
      },
      fontFamily: {
        'heading': ['Unbounded', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
