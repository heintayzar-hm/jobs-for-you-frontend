import {  configureStore, isPlain } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';




const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      }
    }
  ).concat(thunk, logger),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;

