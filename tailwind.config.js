/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: 'Source Sans Pro, ui-serif',
				title: 'Courier Prime, ui-sans-serif',
			},
		},
	},
	plugins: [],
}
