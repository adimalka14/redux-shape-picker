import React from 'react';

import ShapeSvg from '../ShapeSvg';

export default {
    title: 'Base Components/ShapeSvg',
    component: ShapeSvg,
    argTypes: {
        color: {
            control: {
                type: 'color',
            },
        },
        size: {
            control: {
                type: 'range',
                min: 50,
                max: 200,
                step: 10,
            },
        },
    },
};

const Template = (args) => <ShapeSvg {...args} />;

export const Circle = Template.bind({});
Circle.args = { shape: 'circle' };
Circle.argTypes = {
    shape: { table: { disable: true } },
};

export const Square = Template.bind({});
Square.args = { shape: 'square' };
Square.argTypes = {
    shape: { table: { disable: true } },
};

export const Triangle = Template.bind({});
Triangle.args = { shape: 'triangle' };
Triangle.argTypes = {
    shape: { table: { disable: true } },
};

export const Custom = Template.bind({});
Custom.args = {};
Custom.argTypes = {
    shape: {
        control: {
            type: 'select',
            options: ['circle', 'square', 'triangle'],
        },
    },
};
