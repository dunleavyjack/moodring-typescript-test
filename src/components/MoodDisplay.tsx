import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Mood from '../components/Mood';
import MoodBreakdown from '../components/MoodBreakdown';

interface MoodDisplayProps {
    songs?: any;
    profile?: any;
}

const MoodDisplay: React.FC<MoodDisplayProps> = ({ songs, profile }) => {
    console.log(songs);
    console.log(profile);
    return (
        <>
            <ProfileHeader profilePic={profile.images[0].url} />
            <Mood mood={'expressive'} />
            <MoodBreakdown />
        </>
    );
};

export default MoodDisplay;
