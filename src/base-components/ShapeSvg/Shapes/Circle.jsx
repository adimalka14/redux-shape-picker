import React from 'react';
import PropTypes from 'prop-types';

export const Circle = ({ color, size }) => {
    return (
        <circle
            r={size / 2 - 5}
            cx={size / 2}
            cy={size / 2}
            fill={color ?? 'transparent'}
            stroke={color ?? 'var(--text-color)'}
            strokeWidth={'4'}
        />
    );
};

Circle.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
};
