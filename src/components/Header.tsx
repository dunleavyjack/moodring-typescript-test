import React from 'react';

// interface HeaderProps {
//     color?: string;
// }

const handleClick = (): void => {
    window.location.href = './about';
};

const Header: React.FC = (): JSX.Element => {
    return (
        <div className="header">
            <h2 className="blank">About Us</h2>
            <h1 className="name">Mood Ring</h1>
            <h2 className="about" onClick={() => handleClick()}>
                About Us
            </h2>
        </div>
    );
};

export default Header;
