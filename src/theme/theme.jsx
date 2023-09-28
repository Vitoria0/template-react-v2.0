import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#00A2FF',
		},
		secondary: {
			main: '#95C3DD',
		},
		tertiary: {
			main: '#074568',
		},
		text: {
			primary: '#DEF3FF',
			secondary: '#074568',
			tertiary: '#02121C',
		},
		background: {
			default: '#1E1E1E',
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };