import React from 'react';
import tree from '../assets/images/tree.png';
import feeling from '../assets/images/howAreYouFeeling.png';
import SpotifyLogin from '../components/SpotifyLogin';
import DemoButton from '../components/DemoButton';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const LoginPage: React.FC = () => {
    const handleDemoLogin = (): void => {
        window.location.href = 'demo';
    };

    return (
        <div className="page-container">
            <Header />
            <div className="page-content">
                <img
                    className="logo-vector"
                    src={tree}
                    alt="Logo Vector"
                    width="105"
                />
                <img
                    className="text-arc"
                    src={feeling}
                    alt="How are you feeling?"
                />
                <h3 className="text-tag">
                    A mood detector based on your recently played music.
                </h3>
                <SpotifyLogin />
                <h4 className="text-sub-tag">Don't have a Spotify account?</h4>
                <DemoButton handleClick={handleDemoLogin} />
                <Footer />
            </div>
        </div>
    );
};

export default LoginPage;
