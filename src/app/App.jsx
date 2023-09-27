import React from 'react';
import './App.css';

import { AppRoutes } from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../layout/layout';

const App = () => {
	return (
		<Router>
			<Layout>
				<AppRoutes />
			</Layout>
		</Router>
	);
};

export default App;
