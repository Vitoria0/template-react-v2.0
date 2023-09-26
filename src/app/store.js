import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';
import userDataReducer from '../features/user/userDataSlice';

export default configureStore({
	reducer: {
		location: locationReducer,
		userData: userDataReducer,
	},
});
