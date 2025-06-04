import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleButton.module.scss';

export default function ToggleButton({
    label = 'Click me',
    selected = false,
    onClick,
    className = '',
    style = {},
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.btn} ${className}`}
            aria-pressed={selected}
            style={style}
        >
            {label}
        </button>
    );
}

ToggleButton.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};
