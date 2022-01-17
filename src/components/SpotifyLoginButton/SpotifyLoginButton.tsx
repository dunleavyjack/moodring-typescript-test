import React from 'react';
import './SpotifyLoginButton.css';

const SpotifyLogin: React.FC = () => {
    // Grab environment variables from .env
    const authURL: string | undefined =
        process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL;
    const clientID: string | undefined =
        process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectURL: string | undefined =
        process.env.REACT_APP_SPOTIFY_REDIRECT_URL;

    // Define and encode scopes for Spotify API user access
    const scopes: string = 'user-read-private user-read-recently-played';
    const encodedScopes: any = encodeURIComponent(scopes);

    // Direct user to spotify login page
    const handleLogin = (): void => {
        window.location.href = `${authURL}?client_id=${clientID}&scope=${encodedScopes}&redirect_uri=${redirectURL}&response_type=token&show_dialog=true`;
        // console.log(clientID);
        // console.log(authURL);
        // console.log(redirectURL);
    };

    return (
        <button className="button spotify-login" onClick={handleLogin}>
            Connect with Spotify
        </button>
    );
};

export default SpotifyLogin;
