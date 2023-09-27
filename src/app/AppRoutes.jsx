
import { Route, Routes } from 'react-router-dom';
import routesConfig from '../routes/routesConfig';

export const AppRoutes = () => {
	
	return (
		<Routes>
			{routesConfig.map(
				(route, index) => (
					
						<Route
							key={index}
							path={index === 0 ? '/' : route.path}
							element={<route.component />}
						/>
					
				),
			)}
		</Routes>
	);
	
};