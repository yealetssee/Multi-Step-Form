/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans serif"],
      },
      backgroundImage: {
        sideDesktop: `url("../assets/images/bg-sidebar-desktop.svg)`,
      },
    },
  },
  plugins: [],
};
