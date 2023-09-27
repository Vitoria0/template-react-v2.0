import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { motion, AnimatePresence } from 'framer-motion';

const MenuItem = ({ item, open }) => (
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
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	const [open, setOpen] = useState(false);

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
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyItems: 'start',
					alignItems: 'start',
					flexDirection: 'column',
					background: '#0f0f0f',
					height: '100vh',
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
					}}
					onClick={() => setOpen(!open)}
				>
					<MenuIcon style={{ color: '#fff' }} />
				</Box>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
						px: 1,
						width: open ? '250px' : '60px',
						justifyContent: 'start',
						alignItems: 'center',
						transition: 'all 0.5s ease-in-out',
					}}
				>
					{menuItems.map(item => (
						<ListItem
							key={item.path}
							component={NavLink}
							to={item.path}
							variant='contained'
							sx={{
								minHeight: '2.5rem',
								p: 1,
								borderRadius: '5px',
								gap: 1,
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: '30px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								{item.icon}
							</ListItemIcon>
							<AnimatePresence initial={true}>
								{open && <MenuItem item={item} />}
							</AnimatePresence>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);
};
