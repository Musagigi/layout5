const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.html"],
	theme: {
		extend: {},
		colors: {
			dark: '#213053',
			white: '#fff',
			btnColor: '#23a030',
			bthColorHover: '#f6980c',
		},
		screens: {
			sm: '320px',
			md: '768px',
			lg: '1024px',
			xl: '1152px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		}
	},
	plugins: [
		function ({ matchUtilities }) {
			matchUtilities({
				'grid-cols-ideal': value => {
					return {
						gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`
					}
				}
			})
		}
	],
}
