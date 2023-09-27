import { Button, Typography } from '@mui/material';
import React from 'react';


export const Primary = ({ children, ...props }) => {
	return (
		<Button
			variant='contained'
			sx={{
				px: 4,
				py: 1.5,
				transition: 'all 200ms ease-in-out',
				'&:hover': {
					border: 0,
					transform: 'scale(1.1)',
				},
				'&:focus': {
					outline: 'none',
				},
			}}
			{...props}
		>
			<Typography variant='p' color={'#FFF'}>
				{children}
			</Typography>
		</Button>
	);
};
