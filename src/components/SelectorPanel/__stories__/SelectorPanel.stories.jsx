import React, { useState } from 'react';
import SelectorPanel from '../SelectorPanel';

export default {
    title: 'Components/SelectorPanel',
    component: SelectorPanel,
    argTypes: {
        title: { control: 'text' },
        options: { control: 'array' },
    },
};

const Template = (args) => {
    const [selected, setSelected] = useState(args.options[0]);
    return (
        <SelectorPanel {...args} selected={selected} onSelect={setSelected} />
    );
};

export const Colors = Template.bind({});
Colors.args = {
    title: 'Pick a color',
    options: [
        { label: 'red', colorOnSelected: '#f87171' },
        { label: 'green', colorOnSelected: '#34d399' },
        { label: 'blue', colorOnSelected: '#60a5fa' },
    ],
};

export const Shapes = Template.bind({});
Shapes.args = {
    title: 'Pick a shape',
    options: [{ label: 'circle' }, { label: 'triangle' }, { label: 'square' }],
};
