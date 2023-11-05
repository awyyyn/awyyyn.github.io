/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
				sun: "url('https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png')",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				comfortaa: ["Comfortaa", "sans-serif"],
			},
		},
	},
	plugins: [],
};
