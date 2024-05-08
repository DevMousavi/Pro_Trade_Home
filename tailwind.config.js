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
                primary_dark: "#000000",
                primary_green_light: "#8BC83F",
                secondary_blue_light: "#1F4C6B",
                gray_08: "#141414",
                gray_10: "#1A1A1A",
                gray_15: "#262626",
                gray_20: "#333333",
                gray_30: "#4D4D4D",
                gray_40: "#666666",
                gray_50: "#808080",
                gray_60: "#999999",
                white_90: "#E4E4E7",
                white_95: "#F1F1F3",
                white_96: "#F7F7F8",
                white_99: "#FCFCFD",

            },
        },
    },
    plugins: [],
};
