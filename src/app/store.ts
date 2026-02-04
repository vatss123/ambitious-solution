import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import serviceReducer from './slices/serviceSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        service: serviceReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
