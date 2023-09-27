
import React from 'react';

import reactLogo from '../../assets/svg/react.svg'
import viteLogo from '/vite.svg';

import { Box, Button, Typography } from '@mui/material';

const OtherPage = () =>{
    return(
        <Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
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
			<Typography variant='h2'>Template React</Typography>
            <Button variant='contained'>
                <Typography variant='p' color={'#FFF'}>Botão</Typography>
            </Button>
            <Typography variant='p' color={'secondary'}>Esse é um exemplo de paragrafo que usa a cor primaria</Typography>
		</Box>
    )
}

export default OtherPage
