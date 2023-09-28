
import React from 'react';

import reactLogo from '../../assets/svg/react.svg'
import viteLogo from '/vite.svg';

import { Box, Typography } from '@mui/material';

const OtherPage = () =>{
    return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				background: '#1E1E1E',
				margin: 0,
				padding: 0,
				color: '#fff',
				gap: 3,
				px: 1,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					gap: 5,
				}}
			>
				<img src={viteLogo} className='logo ' alt='My logo' />
				<img src={reactLogo} className='logo react' alt='react logo' />
			</Box>
			<Typography variant='h2'>Other Page</Typography>
			<Typography variant='p' color={'secondary'} align='center'>
				Parabens! Você navegou para outra página.
			</Typography>
			<Typography variant='p' color={'secondary'} align='center' maxWidth={'30rem'}>
				Caso queira criar uma nova página rode o comando{' '}
				<code>node createComponent.js NomeDaPagina</code> em seu terminal.
			</Typography>
			<Typography variant='p' color={'secondary'} align='center' maxWidth={'30rem'}>
				Ah! E não esqueça de adicionar o seu novo objeto a lista <code>menuItems</code> presente no
				componente <code>Menu</code>, para poder acessar a sua nova página pelo menu lateral.
			</Typography>
		</Box>
    );
}

export default OtherPage
