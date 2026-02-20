/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('@tailwindcss/typography'),
    // ...outros plugins
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
