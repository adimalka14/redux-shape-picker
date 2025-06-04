import { createSlice } from '@reduxjs/toolkit';

const COLORS_OPTIONS = ['red', 'green', 'blue'];

const colorSlice = createSlice({
    name: 'color',
    initialState: {
        value: null,
        options: COLORS_OPTIONS,
    },
    reducers: {
        setColor: (state, action) => {
            state.value = action.payload;
        },
        resetColor: (state) => {
            state.value = null;
        },
    },
});

export const { setColor, resetColor } = colorSlice.actions;
export default colorSlice.reducer;
