/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: {
					100: "#feffff",
					200: "fefefe",
					300: "#ffffff",
				},
				peach: {
					100: "#faf1e8",
					200: "#fdbb99",
					300: "#febc9a",
				},
				orange: {
					100: "#fcba98",
					200: "#f4af8e",
				},
				pink: {
					100: "#fffeff",
					200: "#fdbb9b",
				},
			},
			screens: {
				500: "500px",
				800: "800px",
			},
		},
	},
	plugins: [],
};
