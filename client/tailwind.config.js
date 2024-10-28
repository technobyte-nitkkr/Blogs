/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				'md-custom': '990px', // Custom breakpoint for 990px
			},
		},
	},
	plugins: [],
};
