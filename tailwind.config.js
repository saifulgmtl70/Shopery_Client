
export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
 
  theme: {
    extend: {
      colors: {
        headerBg: '#F5FAF7',
        primary: '#57C78C',
        secondary: '#4A4A4A',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui"),

  ],
  themes: ["light", "dark", "cupcake"]
});
