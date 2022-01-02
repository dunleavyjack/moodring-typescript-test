import React from 'react';

interface CircularProfilePicProps {
    imageURL: string;
}

const CircularProfilePic: React.FC<CircularProfilePicProps> = ({
    imageURL,
}) => {
    return (
        <div className="circular-portrait center-image">
            <img src={imageURL} alt="Current Profile" />
        </div>
    );
};

export default CircularProfilePic;
