import React, { useEffect } from 'react';

import ResultDisplay from '../ResultDisplay';
import { useDispatch } from 'react-redux';
import { setShape } from '@/features/shape/shapeSlice.js';
import { setColor } from '@/features/color/colorSlice.js';

export default {
    title: 'Components/ResultDisplay',
    component: ResultDisplay,
    argTypes: {
        shape: {
            control: 'select',
            options: ['circle', 'square', 'triangle', null],
        },
        color: {
            control: 'color',
        },
    },
};

const Template = (args) => {
    const Wrapper = ({ shape, color }) => {
        const dispatch = useDispatch();
        console.log('render', shape, color);
        useEffect(() => {
            dispatch(setShape(shape));
        }, [shape, dispatch]);

        useEffect(() => {
            dispatch(setColor(color));
        }, [color, dispatch]);

        return <ResultDisplay />;
    };

    return <Wrapper {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    shape: 'circle',
    color: '#3b82f6',
};

export const NoShape = Template.bind({});
NoShape.args = {
    shape: null,
    color: '#facc15',
};

export const NoColor = Template.bind({});
NoColor.args = {
    shape: 'triangle',
    color: undefined,
};

export const CircleGreen = Template.bind({});
CircleGreen.args = {
    shape: 'circle',
    color: '#05ca1e',
};

export const SquareYellow = Template.bind({});
SquareYellow.args = {
    shape: 'square',
    color: '#facc15',
};

export const TriangleRed = Template.bind({});
TriangleRed.args = {
    shape: 'triangle',
    color: '#ef4444',
};
