import { configureStore, createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: false,
    reducers: {
        toggleTheme: (state) => {
            return !state;
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
})