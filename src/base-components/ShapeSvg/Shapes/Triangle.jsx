import React from 'react';
import PropTypes from 'prop-types';

export const Triangle = ({ color, size }) => {
    const half = size / 2;
    const offset = 5;

    return (
        <polygon
            points={`
              ${half},${offset} 
              ${size - offset},${size - offset} 
              ${offset},${size - offset}
            `}
            fill={color ?? 'transparent'}
            stroke={color ?? 'var(--text-color)'}
            strokeWidth={'4'}
        />
    );
};

Triangle.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
};
