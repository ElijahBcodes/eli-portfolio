/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1182d8",

          secondary: "#a1fc9c",

          accent: "#00ce2c",

          neutral: "#282031",

          "base-100": "#F0EFF5",

          info: "#67ADE9",

          success: "#1B6F66",

          warning: "#EBBB37",

          error: "#EA3E69",
        },
        dark: {
          primary: "#4c3da5",

          secondary: "#5238af",

          accent: "#0f2791",

          neutral: "#192024",

          "base-100": "#282B43",

          info: "#5387D0",

          success: "#54DEBE",

          warning: "#F0B133",

          error: "#F96C71",
        },
      },
    ],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
