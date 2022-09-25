/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6abc32",       
"secondary": "#1bba31",
"accent": "#f13ff4",     
"neutral": "#201523",

"base-100": "#38374E", //by default wesite color

"info": "#58B0F3",      
"success": "#24E58B",      
"warning": "#B98709",     
"error": "#F46C7C",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}