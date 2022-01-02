import React from 'react';
import './Header.css';

const handleHomeClick = () => {
    window.location.href = './';
};

const handleAboutClick = () => {
    window.location.href = './about';
};

const Header: React.FC = (): JSX.Element => {
    return (
        <div className="header-container">
            <h1 className="name" onClick={handleHomeClick}>
                Mood Ring
            </h1>
            <h2 className="about-us" onClick={handleAboutClick}>
                About Us
            </h2>
        </div>
    );
};

export default Header;
