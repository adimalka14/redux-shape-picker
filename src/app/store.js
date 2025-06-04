import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../features/color/colorSlice';
import shapeReducer from '../features/shape/shapeSlice';

export const store = configureStore({
    reducer: {
        color: colorReducer,
        shape: shapeReducer,
    },
});
