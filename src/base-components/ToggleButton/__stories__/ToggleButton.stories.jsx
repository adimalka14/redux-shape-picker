import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import ToggleButton from '../ToggleButton';

export default {
    title: 'Base Components/ToggleButton',
    component: ToggleButton,
    argTypes: {
        label: { table: { disable: true } },
        selected: { table: { disable: true } },
        onClick: { table: { disable: true } },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
    },
};

export const Default = () => <ToggleButton onClick={action('clicked')} />;

export const Toggle = (args) => {
    const [label, setLabel] = useState('Click me');

    const handleClick = () => {
        setLabel((prev) => (prev === 'Click me' ? 'Clicked' : 'Click me'));
    };

    return <ToggleButton {...args} label={label} onClick={handleClick} />;
};
