
import React from 'react';

import reactLogo from '../../assets/svg/react.svg'
import viteLogo from '/vite.svg';

import { Box, Typography } from '@mui/material';

import { Botao } from '../../components/Botao';

const NewPage = () =>{
    return(
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
                gap: 3
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
			<Typography variant='h2'>New Page</Typography>
            <Botao.Navigation page=' ' />
            <Typography variant='p' color={'secondary'} align='center' >Parabens, Você criou uma página nova!</Typography>
		</Box>
    )
}

export default NewPage
