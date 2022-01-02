import React from 'react';
import expressive from '../assets/images/moods/expressive.png';

interface MoodProps {
    mood: string;
}

const Mood: React.FC<MoodProps> = ({ mood }) => {
    console.log(mood);
    return (
        <>
            <img
                style={{ width: '600px', marginTop: '120px' }}
                src={expressive}
                alt="Your Mood is Expressive"
            />
            <h3
                style={{
                    fontFamily: 'Unna serif',
                    fontSize: '30px',
                    fontWeight: 700,
                    color: '#ffffff',
                    maxWidth: '700px',
                }}
            >
                Your recent songs have{' '}
                <span style={{ fontSize: '40px' }}>23.84%</span> more happiness
                and <span style={{ fontSize: '40px' }}>16.03%</span> higher
                danceability than average.
            </h3>
        </>
    );
};

export default Mood;
