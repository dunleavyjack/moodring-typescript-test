import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './ToggleTheme.css';

const ToggleTheme: React.FC = () => {
    return (
        <div className="toggle-container">
            <h4 className="toggle-label">Winter ver.</h4>
            <ToggleSwitch />
        </div>
    );
};

export default ToggleTheme;
