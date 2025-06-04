import React from 'react';
import PropTypes from 'prop-types';

export const Square = ({ color, size }) => {
    return (
        <rect
            x={5}
            y={5}
            width={size - 10}
            height={size - 10}
            fill={color ?? 'transparent'}
            stroke={color ?? 'var(--text-color)'}
            strokeWidth={'4'}
        />
    );
};

Square.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
};
