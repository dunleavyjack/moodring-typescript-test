import React from 'react';

interface NameCircleProps {
    name: string;
}

const NameCircle: React.FC<NameCircleProps> = ({ name }) => {
    return <h3 className="name-circle">{name}</h3>;
};

export default NameCircle;
