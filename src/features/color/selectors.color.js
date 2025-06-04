export const selectCurrentColor = (state) => state.color.value;
export const selectColorOptions = (state) => state.color.options;
export const selectHasColor = (state) => state.color.value !== undefined;
