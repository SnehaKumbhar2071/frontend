/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',       
        secondary: '#4ecdc4',     
        tertiary: '#ffe66d',      
        dark: '#292f36',          
        light: '#f7fff7',         
        accent: '#ff9f1c',        
      },
    },
  },
  darkMode: 'false', 
  
  plugins: [require("flowbite/plugin")],
};
