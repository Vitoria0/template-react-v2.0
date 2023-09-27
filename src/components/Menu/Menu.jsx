import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { motion, AnimatePresence } from 'framer-motion';

const MenuItem = ({ item }) => (
	<motion.div
		initial={{ opacity: 0, x: -10 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: -10 }}
		transition={{ duration: 0.3, ease: 'backIn' }}
	>
		<Typography variant='body1' color='#FFF'>
			{item.name}
		</Typography>
	</motion.div>
);

export const Menu = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
	const [open, setOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handlePathChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('click', handlePathChange);

		
	}, []);

	const menuItems = [
		{
			path: '/',
			name: 'Home',
			icon: <HomeIcon style={{ color: '#FFF', transform: 'scale(1)' }} />,
		},
		{
			path: '/OtherPage',
			name: 'OtherPage',
			icon: <SettingsSharpIcon style={{ color: '#FFF', transform: 'scale(1)' }} />,
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				justifyItems: 'start',
				alignItems: 'start',
				flexDirection: 'column',
				background: '#0f0f0f',
				height: '100vh',
				position: isTabletOrMobile ? 'fixed' : 'relative',
				zIndex: 9999,
			}}
		>
			<Box
				sx={{
					background: '#2E2E2E',
					width: '30px',
					height: '30px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					margin: '1rem',
					borderRadius: '99px',
					cursor: 'pointer',
					zIndex: 9999,
					position: isTabletOrMobile ? 'fixed' : 'relative',
				}}
				onClick={() => setOpen(!open)}
			>
				<MenuIcon style={{ color: '#fff' }} />
			</Box>
			<Box
				sx={{
					pt: isTabletOrMobile ? 7: 0,
				}}
			>
				{menuItems.map(item => (
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
							px: isTabletOrMobile ? (open ? 1 : '0px') : 1,
							width: isTabletOrMobile ? (open ? '200px' : '0px') : open ? '250px' : '60px',
							justifyContent: 'start',
							alignItems: 'center',
							transition: 'all 0.5s ease-in-out',
							gap: 1,
						}}
					>
						<ListItem
							key={item.path}
							component={NavLink}
							to={item.path}
							variant='contained'
							sx={{
								minHeight: '2rem',
								p: isTabletOrMobile ? (open ? 1 : 0) : 1,
								borderRadius: '5px',
								gap: 1,
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
								background: item.path === currentPath ? '#2E2E2E' : 'transparent',
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									background: '#2E2E2E',
								},
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: isTabletOrMobile ? '0px' : '30px',
									visibility: isTabletOrMobile
										? open
											? 'visible'
											: 'hidden'
										: 'visible',
									display: 'flex',
									alignItems: 'center',
									transition: 'minWidth 0.5s ease-in-out',
									justifyContent: 'center',
								}}
							>
								{item.icon}
							</ListItemIcon>
							<AnimatePresence initial={true}>
								{open && <MenuItem item={item} />}
							</AnimatePresence>
						</ListItem>
					</List>
				))}
			</Box>
		</Box>
	);
};
