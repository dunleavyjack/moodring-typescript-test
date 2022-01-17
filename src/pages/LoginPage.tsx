import React from 'react';
import SpotifyLoginButton from '../components/SpotifyLoginButton/SpotifyLoginButton';
import DemoLoginButton from '../components/DemoLoginButton/DemoLoginButton';
import WelcomeDisplay from '../components/WelcomeDisplay/WelcomeDisplay';
import ToggleTheme from '../components/ToggleTheme/ToggleTheme';

const LoginPage: React.FC = () => {
    return (
        <div className="page-content">
            <ToggleTheme />
            <WelcomeDisplay />
            <SpotifyLoginButton />
            <DemoLoginButton />
        </div>
    );
};

export default LoginPage;
