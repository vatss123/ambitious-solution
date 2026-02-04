import { createSlice } from '@reduxjs/toolkit';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

interface ServiceState {
    services: Service[];
}

const initialState: ServiceState = {
    services: [], // Will be populated with mock data later or in component
};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        },
    },
});

export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;
