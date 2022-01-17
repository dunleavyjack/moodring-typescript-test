import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
    // Automatically set winter version (false defaults to normal version)
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
        console.log(checked);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span className="slider round">
                {checked ? (
                    <h3 className="initial-slider-text">On</h3>
                ) : (
                    <h3 className="secondary-slider-text">Off</h3>
                )}
            </span>
        </label>
    );
};

export default ToggleSwitch;
