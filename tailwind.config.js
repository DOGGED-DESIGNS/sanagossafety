/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
      },
      fontFamily: {
        opensan: ["Open Sans", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
      },
      colors: {
        doggedsec: "#041C40",
        doggedaccent: "#FCF403",
        adminpry: "#EEF5FF",
        adminsec: "#FFFFFF",
        admin1: "#E056FD",
        admin2: "#FF5263",
        doggedcolor: {
          100: "amber",
          200: "#599999",
        },
      },
    },
  },
  plugins: [],
};

// font-family: 'Open Sans', sans-serif;
// font-family: 'Poppins', sans-serif;
