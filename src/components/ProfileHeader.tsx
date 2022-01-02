import React from 'react';
import profileLine from '../assets/images/profileLine.png';
import CircularProfilePic from '../components/CircularProfilePic';

interface ProfileHeaderProps {
    profilePic: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profilePic }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '100px',
            }}
        >
            <img
                src={profileLine}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    position: 'relative',
                    top: '30px',
                }}
                alt="profile line"
            />
            <CircularProfilePic imageURL={profilePic} />
        </div>
    );
};

export default ProfileHeader;
