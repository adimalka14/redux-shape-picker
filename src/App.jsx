import React from 'react';

import styles from './styles/App.module.scss';
import SelectorPanel from './components/SelectorPanel/SelectorPanel';
import { useColorSelector } from './features/color/useColorSelector';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';
import { useShapeSelector } from './features/shape/useShapeSelector';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

function App() {
    const { options: colorOptions, ...colorProps } = useColorSelector();
    const { options: shapesOptions, ...shapeProps } = useShapeSelector();

    return (
        <>
            <ThemeSwitch />
            <div className={`${styles.selectorsContainer}`}>
                <SelectorPanel
                    {...colorProps}
                    options={colorOptions.map((color) => ({
                        label: color,
                        colorOnSelected: color,
                    }))}
                    title={'Choose a color'}
                />
                <SelectorPanel
                    {...shapeProps}
                    options={shapesOptions.map((shape) => ({
                        label: shape,
                    }))}
                    title={'Choose a shape'}
                />
            </div>
            <ResultDisplay />
        </>
    );
}

export default App;
