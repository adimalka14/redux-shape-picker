import React, { useState, useEffect } from 'react';
import { ToggleButton } from '@/base-components';

export default function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    return (
        <ToggleButton
            label={isDarkMode ? 'Light' : 'Dark'}
            selected={isDarkMode}
            onClick={() => setIsDarkMode((prev) => !prev)}
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                fontSize: '1em',
                textWrapping: 'nowrap',
            }}
        />
    );
}
