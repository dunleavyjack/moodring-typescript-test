import React from 'react';
// import Header from '../components/Header';
import Header from '../components/Header/Header';
import aboutMoodRing from '../assets/images/aboutMoodRing.png';
import aboutUs from '../assets/images/aboutUs.png';
import NameCircle from '../components/NameCircle';
import aboutJack from '../assets/images/aboutJack.png';
import aboutJeonghye from '../assets/images/aboutJeonghye.png';
import linkedinIcon from '../assets/images/linkedinIcon.png';
import mediumIcon from '../assets/images/mediumIcon.png';
import githubIcon from '../assets/images/githubIcon.png';
import techStack from '../assets/images/techStack.png';
import privacyBorder from '../assets/images/privacyBorder.png';
import privacyBorderBottom from '../assets/images/privacyBorderBottom.png';
import Person from '../components/Person';

const AboutPage = () => {
    return (
        <>
            <Header />
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
                <img
                    className="about-moodring-image"
                    src={aboutMoodRing}
                    alt="About Mood Ring"
                    style={{ marginTop: '40px' }}
                />
                <h3 className="about-moodring-text">
                    Mood Ring detect your mood based on different analytics of
                    each song (tempo, energy, acousticness, etc.) There are over
                    thirty moods and discover your mood!
                    <br />
                    <br />
                    Moods are strange and ineffale. <br /> But hopefully it
                    connected with you :)
                </h3>

                <img className="about-us-image" src={aboutUs} alt="About Us" />

                <h3 className="about-moodring-text">
                    We started this Mood Ring winter ver. project to celebrate
                    Jack’s holiday and Jeonghye’s finishing final (with straight
                    A’s :D)
                    <br />
                    <br />
                    These nerds worked on 23rd and 24th of Dec with booze.
                </h3>

                <Person name="name" photoURL="" linkedIn="" />

                <img src={techStack} className="tech-stack" alt="tech-stack" />

                <h3 className="about-moodring-text">
                    This project was built with React, Redux, Bootstrap 5, the
                    Spotify Web API, Spotify OAuth2, and designed in Figma. It’s
                    also hosted with Vercel and the full code is available on
                    GitHub here.
                </h3>

                <img
                    src={privacyBorder}
                    className="privacy-border"
                    alt="Privacy"
                />
                <h3 className="about-moodring-text">
                    The complete Spotify privacy policy can be viewed here,
                    which also covers approved third-party projects like this
                    one.
                </h3>
                <img
                    src={privacyBorderBottom}
                    className="privacy-border-bottom"
                    alt="Privacy Divider"
                />
            </div>
            <h5 className="footer-text-bottom">2021/2022 Winter Ver.</h5>
        </>
    );
};

export default AboutPage;
