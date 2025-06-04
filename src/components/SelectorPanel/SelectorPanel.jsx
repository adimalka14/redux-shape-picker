import React from 'react';
import PropTypes from 'prop-types';

import styles from './SelectorPanel.module.scss';
import SelectionButton from '../OptionRadio/SelectionButton.jsx';

export default function SelectorPanel({
    title = '',
    options = [],
    selected,
    onSelect,
}) {
    return (
        <div className={`${styles.selectorPanel}`}>
            <p>{title}</p>
            <div className={`${styles.optionsContainer}`}>
                {options.map((option, index) => (
                    <SelectionButton
                        key={`${option.label}_${index}`}
                        label={option.label}
                        selected={option.label === selected}
                        onSelect={() => onSelect(option.label)}
                        backgroundColor={option.colorOnSelected}
                    />
                ))}
            </div>
        </div>
    );
}

SelectorPanel.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            colorOnSelected: PropTypes.string,
        })
    ),
    selected: PropTypes.string,
    onSelect: PropTypes.func,
};
