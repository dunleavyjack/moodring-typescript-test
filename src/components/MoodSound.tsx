import React from 'react';
import keyboard from '../assets/images/keyboard.png';

interface MoodSoundProps {
    songKey: string;
}

const MoodSound: React.FC<MoodSoundProps> = ({ songKey }) => {
    return (
        <>
            <div className="sound-container">
                <h4 className="sound-key">{songKey}</h4>
                <h4 className="sound-text">Average key</h4>
                <button className="sound-button">
                    Press to listen to your mood sound
                </button>
            </div>
            <img src={keyboard} className="keyboard" alt="Playable Keyboard" />
        </>
    );
};

export default MoodSound;
