import { createSlice } from '@reduxjs/toolkit';

const SHAPE_OPTIONS = ['circle', 'square', 'triangle'];

const shapeSlice = createSlice({
    name: 'shape',
    initialState: {
        value: null,
        options: SHAPE_OPTIONS,
    },
    reducers: {
        setShape: (state, action) => {
            state.value = action.payload;
        },
        resetShape: (state) => {
            state.value = null;
        },
    },
});

export const { setShape, resetShape } = shapeSlice.actions;
export default shapeSlice.reducer;
