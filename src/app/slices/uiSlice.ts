import { createSlice } from '@reduxjs/toolkit';

interface UIState {
    isMobileMenuOpen: boolean;
}

const initialState: UIState = {
    isMobileMenuOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        closeMobileMenu: (state) => {
            state.isMobileMenuOpen = false;
        },
        openMobileMenu: (state) => {
            state.isMobileMenuOpen = true;
        },
    },
});

export const { toggleMobileMenu, closeMobileMenu, openMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
