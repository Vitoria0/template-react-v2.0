import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#AD73DA',
		},
		secondary: {
			main: '#710DBF',
		},
		text: {
			primary: '#390760',
			secondary: '#fff',
		},
		background: {
			default: '#710DBF',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
		h1: {
			fontWeight: '700',
		},
		h2: {
			fontWeight: '700',
		},
		h3: {
			fontWeight: '600',
		},
		h4: {
			fontWeight: '500',
		},
		h5: {
			fontWeight: '400',
		},
		h6: {
			fontWeight: '300',
		},
		p: {
			fontWeight: 'normal',
			fontSize: '20px',
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };