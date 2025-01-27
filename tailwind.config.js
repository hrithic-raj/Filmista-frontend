/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geologica: ['Geologica', 'sans-serif'],
        baloo: ['"Baloo Bhai 2"', 'cursive'],
        fredoka: ['"Fredoka"', 'sans-serif'],
      },
      animation: {
        expand: "expand 2s infinite ease-in-out",
        fadeIn: "fadeIn 2s infinite ease-in-out",
        "typing-loop": "typing 3s steps(10, end), erase 2s steps(10, end) 3s infinite",
      },
      keyframes: {
        expand: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.5)", opacity: "0" },
        },
        fadeIn: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        typing: {
          "0%": { width: "0ch" },
          "50%": { width: "9ch" },
        },
        erase: {
          "0%": { width: "0ch" },
          "50%": { width: "9ch" },
        },
      },
      noScrollbar: {
        "::-webkit-scrollbar": { display: "none" },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    },
  },
  plugins: [],
}