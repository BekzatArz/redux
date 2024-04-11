/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      scrollbar: {
        width: '106px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
      },
    },
  },
  plugins: [],
}

