import React from 'react';
import tree from '../../assets/images/tree.png';
import howAreYouFeelingDesktop from '../../assets/images/howAreYouFeelingDesktop.png';
import howAreYouFeelingMobile from '../../assets/images/howAreYouFeelingMobile.png';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import './WelcomeDisplay.css';

const WelcomeDisplay: React.FC = (): JSX.Element => {
    return (
        <>
            <img
                className="logo-vector"
                src={tree}
                alt="Logo Vector"
                width="105"
            />
            <ResponsiveImage
                mobileURL={howAreYouFeelingMobile}
                desktopURL={howAreYouFeelingDesktop}
                breakPoint="600px"
                imageClass="responsive-feeling"
                imageAlt="How are you feeling?"
            />
            <h3 className="text-tag">
                A mood detector based on your recently played music.
            </h3>
        </>
    );
};

export default WelcomeDisplay;
