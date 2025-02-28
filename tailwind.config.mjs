/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'mouse-bounce': 'mouseMove 20s ease-out infinite',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px", // 1920
        "4xl": "2500px", // 2560
      },
      keyframes: {
        mouseMove: {
          '0%, 80%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
    fontSize: {
      base_text_smallest: "0.75rem", // Adjust as needed
      base_text_lg: "1.125rem",
      base_text_3xl: "1.875rem",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
],
};
