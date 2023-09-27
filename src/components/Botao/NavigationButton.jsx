import { Button, Typography } from "@mui/material";

import React from "react";

import  useNavigationButton  from '../../hooks/useHandleNavigation';

export const Navigation = ({ page }) => {
	const { handleNavigationClick } = useNavigationButton(page);
	return (
		<Button
			variant='contained'
			onClick={handleNavigationClick}
			sx={{
				px: 4,
				py:1.5,
				transition: 'all 200ms ease-in-out',
				'&:hover': {
					border: 0,
					transform: 'scale(1.1)',
				},
				'&:focus': {
					outline: 'none',
				},
			}}
		>
			<Typography variant='p' color={'#FFF'}>
				Navegação
			</Typography>
		</Button>
	);
};