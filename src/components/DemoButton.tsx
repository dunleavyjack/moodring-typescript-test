import React from 'react';

interface Props {
    handleClick: any;
}

const DemoButton: React.FC<Props> = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="button demo">
            View a demo
        </button>
    );
};

export default DemoButton;
