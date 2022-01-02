import React from 'react';

interface BreakdownDetailProps {
    emoji: string;
    percent: string;
    mood: string;
}

const BreakdownDetail: React.FC<BreakdownDetailProps> = ({
    emoji,
    percent,
    mood,
}) => {
    return (
        <div className="breakdown-container">
            <h3 className="breakdown-percent">
                <span className="emoji">{emoji}</span> {percent}
            </h3>
            <h4 className="breakdown-mood">{mood}</h4>
        </div>
    );
};

export default BreakdownDetail;
