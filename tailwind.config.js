/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#2E9CCA',
            secondary: '#0C2D48',
            accent: '#E0FFFF',
            background: '#000000',
            text: '#FFFFFF',
          },
          fontFamily: {
            heading: ['"Exo 2"', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
          },
        },
      },
      plugins: [],
    };