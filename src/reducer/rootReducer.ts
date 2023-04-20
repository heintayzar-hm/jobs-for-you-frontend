import { combineReducers } from '@reduxjs/toolkit';
import persistedAuthReducer from './currentUserSlice/currentUserSlice';
import appSlice from './appSlice/appSlice';

const rootReducer = combineReducers({
    // Add reducers here
    currentUser: persistedAuthReducer,
    app: appSlice
});

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;
