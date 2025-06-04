import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ResultDisplay.module.scss';
import { selectCurrentColor } from '@/features/color/selectors.color.js';
import { selectCurrentShape } from '@/features/shape/selectors.shape.js';
import ShapeSvg from '../../base-components/ShapeSvg/ShapeSvg';

export default function ResultDisplay() {
    const color = useSelector(selectCurrentColor);
    const shape = useSelector(selectCurrentShape);

    return (
        <div
            className={`${styles.resultDisplay}`}
            style={shape ? undefined : { backgroundColor: color }}
        >
            <ShapeSvg shape={shape} color={color} size={150} />
        </div>
    );
}
