import React from 'react';

import { AppRoutes } from './AppRoutes';

import './App.css';

const App = () => {
	return (
		<React.Suspense>
			<AppRoutes />
		</React.Suspense>
	);
};

export default App;
