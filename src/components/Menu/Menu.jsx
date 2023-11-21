import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, Typography, TextField, Autocomplete } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { motion, AnimatePresence } from 'framer-motion';

const MenuItem = ({ item }) => (
	<motion.div
		initial={{ opacity: 0, x: -10 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: -10 }}
		transition={{ duration: 0.3, ease: 'backIn' }}
	>
		<Typography variant='body1' sx={{ color: 'text.primary' }}>
			{item.name}
		</Typography>
	</motion.div>
);

const keywordData = [
	{
		id: 1,
		keyword: 'objeto',
		page: 'OtherPage',
	},
	{
		id: 2,
		keyword: 'vindo',
		page: ' ',
	},
	{
		id: 3,
		keyword: 'nova',
		page: 'NewPage',
	},
];

export const Menu = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
	const [open, setOpen] = useState(false);
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const handleAutocompleteChange = (event, newValue) => {
		setSearchValue(newValue);
	};

	const handleSearch = () => {
		const result = keywordData.find(
			item => item.keyword.toLocaleLowerCase() === searchValue.toLocaleLowerCase(),
		);

		if (result) {
			navigate(`/${result.page}`);
		} else {
			console.log('Palavra-chave não encontrada');
		}
	};

	const menuItems = [
		{
			id: 1,
			path: '/',
			name: 'Home',
			icon: <HomeIcon sx={{ color: 'text.primary', transform: 'scale(1)' }} />,
		},
		{
			id: 2,
			path: '/OtherPage',
			name: 'OtherPage',
			icon: <SettingsSharpIcon sx={{ color: 'text.primary', transform: 'scale(1)' }} />,
		},
		{
			id: 3,
			path: '/NewPage',
			name: 'NewPage',
			icon: <AddCircleIcon sx={{ color: 'text.primary', transform: 'scale(1)' }} />,
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				background: '#0f0f0f',
				minHeight: '100vh',
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
				<MenuIcon sx={{ color: '#fff' }} />
			</Box>
			{open && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						px: isTabletOrMobile ? (open ? 1 : '0px') : 1,
						pt: isTabletOrMobile ? (open ? 8 : '0px') : 1,
					}}
				>
					<Box
						sx={{
							p: 1,
						}}
					>
						<SearchIcon sx={{ color: 'text.primary', maxWidth: '30px', maxHeight: '30px' }} />
					</Box>
					<Autocomplete
						fullWidth
						value={searchValue}
						onChange={(event, newValue) => {
							handleAutocompleteChange(event, newValue);
						}}
						options={keywordData.map(option => option.keyword)}
						renderOption={(props, option) => (
							<li
								{...props}
								style={{
									color: '#0F4B55',
									'&:hover': {
										backgroundColor: '#E2EAE9',
									},
								}}
							>
								{option}
							</li>
						)}
						renderInput={params => (
							<TextField
								{...params}
								label='Digite sua dúvida aqui'
								variant='standard'
								sx={{
									color: 'text.primary',
									mt: 0,
									borderRadius: '99px',
									fontSize: { sm: '12px', md: '16px', xl: '18px' },
									'& label': {
										color: 'text.primary',
									},
									'.MuiAutocomplete-noOptions': {
										color: 'text.primary',
									},
								}}
								onKeyPress={e => {
									if (e.key === 'Enter') {
										handleSearch();
									}
								}}
							/>
						)}
						noOptionsText='Que pena! Não encontramos item correspondente com essa pesquisa. Que tal tentar novamente?'
						sx={{
							fontSize: { sm: '12px', md: '16px', xl: '18px' },
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '99px',
							width: '80%',
							bottom: 7,
						}}
					/>
				</Box>
			)}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: open ? 'center' : 'start',
					transition: 'all 0.5s ease-in-out',
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
						key={item.id}
					>
						<ListItem
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
