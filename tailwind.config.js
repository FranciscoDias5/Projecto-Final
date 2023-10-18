/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx}'];
export const mode = 'jit';
export const theme = {
	extend: {
		colors: {
			primary: '#ffffff',
			secondary: '#ff0000',
			dimWhite: 'rgba(255, 255, 255, 0.7)',
			dimRed: 'rgb(255, 0, 0)',
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
	},
	screens: {
		xs: '480px',
		ss: '620px',
		sm: '768px',
		md: '1060px',
		lg: '1200px',
		xl: '1700px',
	},
};
export const plugins = [];
