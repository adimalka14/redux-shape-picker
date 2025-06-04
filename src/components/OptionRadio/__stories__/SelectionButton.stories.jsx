import React, { useState } from 'react';
import SelectionButton from '../SelectionButton';

export default {
    title: 'Components/SelectionButton',
    component: SelectionButton,
    argTypes: {
        label: { control: 'text' },
        backgroundColor: { control: 'color' },
        onSelect: { table: { disable: true } },
    },
};

export const Default = (args) => {
    const [selected, setSelected] = useState(false);

    return (
        <SelectionButton
            {...args}
            selected={selected}
            onSelect={() => setSelected((prev) => !prev)}
        />
    );
};

export const Selected = (args) => <SelectionButton {...args} selected={true} />;
Selected.args = {
    label: 'Selected Option',
};

export const Disabled = (args) => <SelectionButton {...args} disabled />;
Disabled.args = {
    label: 'Disabled Option',
    selected: false,
};

export const Custom = (args) => <SelectionButton {...args} />;
Custom.args = {
    label: 'Styled Option',
    selected: true,
    style: { borderRadius: '20px', border: '2px dashed red' },
};

export const Group = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const options = ['Option A', 'Option B', 'Option C'];

    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            {options.map((opt, i) => (
                <SelectionButton
                    key={opt}
                    label={opt}
                    selected={selectedIndex === i}
                    onSelect={() => setSelectedIndex(i)}
                />
            ))}
        </div>
    );
};
