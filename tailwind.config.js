/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      fontSize: {
        'logline-mobile': ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '0.03em' }],
        'logline': ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '0.03em' }],
        'case': ['1.125rem', { lineHeight: '1.75rem' }],
        'base-desktop': ['1rem', { lineHeight: '1.5rem' }],
        'header-touch': ['1.25rem', { lineHeight: '1.5rem', letterSpacing: '0.04em' }],
        'table': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.03em' }],
      },
    },
  },
  plugins: [],
}
