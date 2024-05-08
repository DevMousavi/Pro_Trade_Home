/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",

    theme: {
        container: { center: true },
        screens: {
            af: "0px",
            as: "280px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1600px",
        },
        extend: {
            colors: {
                primary_dark: "#37474F",
                primary_green_light: "#8BC83F",
                secondary_blue_light: "#1F4C6B",
            },
        },
    },
    plugins: [],
};
