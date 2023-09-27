import React from 'react';
import './App.css';

import { AppRoutes } from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<AppRoutes/>
		</Router>
	);
};

export default App;
