import { combineReducers } from '@reduxjs/toolkit';
import persistedAuthReducer from './currentUserSlice/currentUserSlice';
import appSlice from './appSlice/appSlice';
import usersReducer from './usersSlice/usersSlice';
const rootReducer = combineReducers({
    // Add reducers here
    currentUser: persistedAuthReducer,
    app: appSlice,
    users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;
