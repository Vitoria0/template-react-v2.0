import React from 'react';
import { Menu } from '../components/Menu/Menu';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
	return (
		<Box sx={{
            display: 'flex',
            width: '98.75vw',
			minHeight: '100vh',
        }}>
			<Menu />
			<Box sx={{width: '100%',
				height: '100%',}}>{children}</Box>
		</Box>
	);
};

export default Layout;
