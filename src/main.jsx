import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';

import App from './app/App.jsx';
import './assets/css/index.css';

import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';

import { theme } from './theme/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
	</React.StrictMode>,
);
