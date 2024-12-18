/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        signika: ['Signika', 'sans-serif']
      }
    },
  },
  plugins: ["flowbite/plugin"],
}

// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/lib/esm/**/*.js",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         signika: ['Signika', 'sans-serif']
//       }
//     },
//   },
//   plugins: ["flowbite/plugin"],
// });

