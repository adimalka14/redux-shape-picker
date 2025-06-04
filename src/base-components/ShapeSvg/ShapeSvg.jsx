import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Square, Triangle } from './Shapes';

export default function ShapeSvg({ shape = 'circle', color, size = 100 }) {
    const renderShape = () => {
        switch (shape) {
            case 'circle':
                return <Circle color={color} size={size} />;
            case 'square':
                return <Square color={color} size={size} />;
            case 'triangle':
                return <Triangle color={color} size={size} />;
            default:
                return null;
        }
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {renderShape()}
        </svg>
    );
}

ShapeSvg.propTypes = {
    shape: PropTypes.oneOf(['circle', 'square', 'triangle']),
    color: PropTypes.string,
    size: PropTypes.number,
};
