import { combineReducers } from '@reduxjs/toolkit';
import persistedAuthReducer from './currentUserSlice/currentUserSlice';

const rootReducer = combineReducers({
    // Add reducers here
    currentUser: persistedAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
