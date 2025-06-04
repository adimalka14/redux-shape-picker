import { useSelector, useDispatch } from 'react-redux';

import { selectColorOptions, selectCurrentColor } from './selectors.color.js';
import { setColor, resetColor } from './colorSlice';

export const useColorSelector = () => {
    const dispatch = useDispatch();
    const options = useSelector(selectColorOptions);
    const selected = useSelector(selectCurrentColor);

    const onSelect = (value) => {
        if (value === selected) {
            dispatch(resetColor());
        } else {
            dispatch(setColor(value));
        }
    };

    return { options, selected, onSelect };
};
