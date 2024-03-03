/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primery: '#FAB528',
        text:"#666666",
        heading:'#222222',
        heading2: '#555555',
        gray1:'#999999',
        bgColor: '#F3F3F3',
        orange: '#FA532C',
        link: '#0099CC',
        active: '#669900'


      }
    },
  },
  plugins: [nextui()],
};
