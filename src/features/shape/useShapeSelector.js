import { useSelector, useDispatch } from 'react-redux';

import { selectShapeOptions, selectCurrentShape } from './selectors.shape';
import { setShape, resetShape } from './shapeSlice';

export const useShapeSelector = () => {
    const dispatch = useDispatch();
    const options = useSelector(selectShapeOptions);
    const selected = useSelector(selectCurrentShape);

    const onSelect = (value) => {
        if (value === selected) {
            dispatch(resetShape());
        } else {
            dispatch(setShape(value));
        }
    };

    return {
        options,
        selected,
        onSelect,
    };
};
