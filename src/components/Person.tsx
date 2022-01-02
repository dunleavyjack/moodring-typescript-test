import React from 'react';
import NameCircle from '../components/NameCircle';
import aboutJack from '../assets/images/aboutJack.png';
import aboutJeonghye from '../assets/images/aboutJeonghye.png';
import linkedinIcon from '../assets/images/linkedinIcon.png';
import mediumIcon from '../assets/images/mediumIcon.png';
import githubIcon from '../assets/images/githubIcon.png';

interface PersonProps {
    name: string;
    photoURL: string;
    linkedIn: string;
    github?: string;
    medium?: string;
}

const Person: React.FC<PersonProps> = ({
    name,
    photoURL,
    linkedIn,
    github,
    medium,
}): JSX.Element => {
    return (
        <div
            style={{
                maxWidth: '745px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <NameCircle name="Jack" />
                <img
                    src={aboutJack}
                    className="about-person-image jack"
                    alt="About Jack"
                />
                <h4 className="job-text">Developer</h4>
                <h5 className="email-text">dunleavyjack@gmail.com</h5>
                <div className="icon-container">
                    <img
                        className="link-icon"
                        src={linkedinIcon}
                        alt="LinkedIn Icon"
                    />
                    <img
                        className="link-icon"
                        src={mediumIcon}
                        alt="Medium Icon"
                    />
                    <img
                        className="link-icon"
                        src={githubIcon}
                        alt="Github Icon"
                    />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <NameCircle name="Jeonghye" />
                <img
                    src={aboutJeonghye}
                    className="about-person-image jeonghye"
                    alt="About Jack"
                />
                <h4 className="job-text">Designer</h4>
                <h5 className="email-text">jhyoon350@gatech.edu</h5>
                <div className="icon-container">
                    <img
                        className="link-icon"
                        src={linkedinIcon}
                        alt="LinkedIn Icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default Person;
