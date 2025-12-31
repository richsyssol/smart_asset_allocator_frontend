module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    // Add all files that use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: "#2274e0",
      },
    },
  },
  plugins: [],
};
