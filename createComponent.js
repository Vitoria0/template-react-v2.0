import fs from 'fs/promises';
import path from 'path';

async function createComponentInFolder(folderName) {
	const componentContent = `
import React from 'react';

import reactLogo from '../../assets/svg/react.svg'
import viteLogo from '/vite.svg';

import { Box, Typography } from '@mui/material';

import { Botao } from '../../components/Botao';

const ${folderName} = () =>{
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

export default ${folderName}
`;

	const scriptDir = process.cwd();

	const folderPath = path.join(scriptDir, 'src', 'pages', folderName);
	const componentPath = path.join(folderPath, `${folderName}.jsx`);

	try {
		await fs.mkdir(folderPath, { recursive: true });
		await fs.writeFile(componentPath, componentContent);
		console.log(`Componente criado em src/pages/${folderName}/${folderName}.jsx`);
	} catch (error) {
		console.error('Ocorreu um erro ao criar o componente:', error);
	}
}

if (process.argv.length !== 3) {
	console.error('Uso: node createComponent.js <NomeDaPasta>');
	process.exit(1);
}

const folderName = process.argv[2];
createComponentInFolder(folderName);
