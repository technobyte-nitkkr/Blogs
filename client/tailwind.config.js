/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
				'custom-gradient-card': 'linear-gradient(152.28deg, #00336C -17.35%, rgba(0, 51, 108, 0) 22.26%)',
				'custom-border': 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%), linear-gradient(0deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2))',
			  },
			  borderImage: {
				'custom-border': 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%), linear-gradient(0deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2))',
			  },
		},
	},
	plugins: [
	  ],
};
