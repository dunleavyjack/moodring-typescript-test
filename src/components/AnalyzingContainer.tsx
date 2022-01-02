import React, { useState, useEffect } from 'react';
import Loading from './Loading';
// import DemoDashboardPage from '../pages/DemoDashboardPage';
import AnalyzingDisplay from '../components/AnalyzingDisplay';
import MoodDisplay from '../components/MoodDisplay';
import Header from '../components/Header';

interface AnalyzingContainerProps {
    songs: any;
    profile: any;
}

const AnalyzingContainer = ({ songs, profile }: AnalyzingContainerProps) => {
    const [analyizedSong, setAnalyizedSong] = useState('');
    const [finishedShuffeling, setFinishedShuffeling] = useState(false);

    useEffect(() => {
        songs.forEach((song: any, i: any) => {
            setTimeout(() => {
                setAnalyizedSong(song);
            }, i * 150);
        });
        setTimeout(() => {
            setFinishedShuffeling(true);
        }, 3150);
    }, [songs]);

    // Return loading screen while waiting for async/await
    if (finishedShuffeling === false && songs.length === 0) {
        return (
            <div>
                <Loading text={'Connecting with Spotify.'} />
            </div>
        );
    }

    // Return YourMood page when shuffeling is complete
    if (finishedShuffeling === false && songs.length > 0) {
        return <AnalyzingDisplay song={analyizedSong} />;
    }

    // Shuffle through songs being 'analyized'
    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                color: '#ffffff',
            }}
        >
            <Header />
            <div className="page-content">
                <MoodDisplay songs={songs} profile={profile} />
            </div>
        </div>
    );
};

export default AnalyzingContainer;
