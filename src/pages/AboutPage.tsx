import React from 'react';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';
import aboutMoodRingDesktop from '../assets/images/aboutMoodRingDesktop.png';
import aboutMoodRingMobile from '../assets/images/aboutMoodRingMobile.png';
import aboutUsDesktop from '../assets/images/aboutUsDesktop.png';
import aboutUsMobile from '../assets/images/aboutUsMobile.png';
import techStackDesktop from '../assets/images/techStackDesktop.png';
import techStackMobile from '../assets/images/techStackMobile.png';
import privacyBorderDesktop from '../assets/images/privacyBorderDesktop.png';
import privacyBorderMobile from '../assets/images/privacyBorderMobile.png';
import privacyBorderBottomDesktop from '../assets/images/privacyBorderBottomDesktop.png';
import privacyBorderBottomMobile from '../assets/images/privacyBorderBottomMobile.png';
import '../styles/responsive.css';

// import Person from '../components/Person';

const AboutPage: React.FC = () => {
    return (
        <div className="page-content">
            <ResponsiveImage
                mobileURL={aboutMoodRingMobile}
                desktopURL={aboutMoodRingDesktop}
                breakPoint="700px"
                imageClass="about-moodring-image"
                imageAlt="About Moodring"
            />
            <h3 className="about-moodring-text">
                Mood Ring detects your mood based on different analytics of each
                song (tempo, energy, acousticness, etc.) There are over thirty
                moods and discover your mood!
                <br />
                <br />
                Moods are strange and ineffale. <br /> But hopefully it
                connected with you :)
            </h3>

            <ResponsiveImage
                mobileURL={aboutUsMobile}
                desktopURL={aboutUsDesktop}
                breakPoint="700px"
                imageClass="about-us-image"
                imageAlt="About Us"
            />

            {/* <img className="about-us-image" src={aboutUs} alt="About Us" /> */}

            <h3 className="about-moodring-text">
                We started this Mood Ring winter ver. project to celebrate
                Jack’s holiday and Jeonghye’s finishing final (with straight A’s
                :D)
                <br />
                <br />
                These nerds worked on 23rd and 24th of Dec with booze.
            </h3>

            {/* <Person name="name" photoURL="" linkedIn="" /> */}

            <ResponsiveImage
                mobileURL={techStackMobile}
                desktopURL={techStackMobile}
                breakPoint="700px"
                imageClass="tech-stack-image"
                imageAlt="How Mood Ring is Built"
            />

            <h3 className="about-moodring-text">
                This project was built with React, Redux, Bootstrap 5, the
                Spotify Web API, Spotify OAuth2, and designed in Figma. It’s
                also hosted with Vercel and the full code is available on GitHub
                here.
            </h3>

            <ResponsiveImage
                mobileURL={privacyBorderMobile}
                desktopURL={privacyBorderDesktop}
                breakPoint="700px"
                imageClass="privacy-border"
                imageAlt="Privacy"
            />

            <h3 className="about-moodring-text">
                The complete Spotify privacy policy can be viewed here, which
                also covers approved third-party projects like this one.
            </h3>

            <ResponsiveImage
                mobileURL={privacyBorderBottomMobile}
                desktopURL={privacyBorderBottomDesktop}
                breakPoint="700px"
                imageClass="privacy-border-bottom"
                imageAlt="Privacy Divider"
            />
        </div>
    );
};

export default AboutPage;
