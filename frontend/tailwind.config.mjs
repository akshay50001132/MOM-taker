/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        white: {
          primary: "#fffafa",
          secondary: "#faf9f6",
          tertiary: "#f8f8f8",
          fourth: "#f8f9fa",
          fifth: "#f5f5f5",
        },

        black: {
          primary: "#000000",
          secondary: "#111111",
          tertiary: "#1a1a1a",
          fourth: "#2b2b2b",
          fifth: "#333333",
        },

        red: {
          primary: "#ff4d4d", // Vibrant red for attention-grabbing elements
          secondary: "#ff6666", // Soft red for backgrounds or subtle highlights
          tertiary: "#ff8080", // Light red for accents
        },

        blue: {
          primary: "#4a90e2", // Calming and trustworthy blue
          secondary: "#6ab7ff", // Lighter blue for softer UI elements
          tertiary: "#85b9ff", // Light blue for highlights or hover states
        },
      },
    },
  },
  plugins: [],
};
