/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'invisible-white': '#F0F0F0',
				'light-blue': '#DAD5FF',
				'light-green': '#85A685',
				'dark-green': '#284B36',
			},
			scale: {
				175: '1.75',
				200: '2.00',
				250: '2.50',
				300: '3.00',
			},
			backdropBlur: {
				5: '5px',
			},
		},
	},
	plugins: [],
};
