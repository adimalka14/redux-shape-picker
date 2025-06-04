import React from 'react';
import PropTypes from 'prop-types';

import styles from './SelectionButton.module.scss';
import { ToggleButton } from '@/base-components';

export default function SelectionButton({
    label = 'Option',
    selected = false,
    onSelect,
    backgroundColor,
    disabled = false,
    style = {},
}) {
    return (
        <ToggleButton
            label={label}
            selected={selected}
            onClick={disabled ? undefined : onSelect}
            className={`${styles.selectionButton} ${selected && styles.selected} ${disabled && styles.disabled}`}
            style={selected ? { ...style, backgroundColor } : { ...style }}
        />
    );
}

SelectionButton.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    backgroundColor: PropTypes.string,
    style: PropTypes.object,
};
