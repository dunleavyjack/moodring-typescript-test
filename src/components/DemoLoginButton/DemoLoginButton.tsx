import React from 'react';
import './DemoLoginButton.css';

const handleClick = (): void => {
    window.location.href = 'demo';
};

const DemoLoginButton: React.FC = () => {
    return (
        <>
            <h4 className="demo-label">Don't have a Spotify account?</h4>
            <button onClick={handleClick} className="button demo">
                View a demo
            </button>
        </>
    );
};

export default DemoLoginButton;
