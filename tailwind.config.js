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
		},
	},
	plugins: [],
};
