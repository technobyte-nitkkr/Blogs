/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)"
			  },
			  colors: {
				'gradient-red-blue-start': '#D51B10',
				'gradient-red-blue-end': '#00336C',
			  },
		},
	},
	plugins: [
		function ({ addComponents }) {
		  addComponents({
			'.gradient-border': {
			  position: 'relative',
			  padding: '1px', // To create space for the "border"
			  borderRadius: '1rem', // Equivalent to `rounded-2xl`
			  backgroundClip: 'padding-box',
			  overflow: 'hidden',
			  backgroundColor: '#fff',
			  '::before': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: -1,
				borderRadius: 'inherit',
				padding: '2px', // Adjust padding to set "border" thickness
				background: 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%)',
				mask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
				WebkitMask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
				backgroundClip: 'border-box',
			  },
			},
		  });
		},
	  ],
};
