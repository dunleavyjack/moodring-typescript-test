import React from 'react';
import houses from '../assets/houses/house.png';
import lights from '../assets/houses/lights.png';

const Houses: React.FC = () => {
    return (
        <div className="houses-container">
            <img className="houses" alt="Light up houses" src={houses} />
            <img className="lights" alt="Light up houses" src={lights} />
        </div>
    );
};

export default Houses;
