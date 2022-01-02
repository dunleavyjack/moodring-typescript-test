import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
// import SpotifyRedirectPage from '../pages/SpotifyRedirectPage';
import DashboardPage from '../pages/DashboardPage';
import DemoDashboardPage from '../pages/DemoDashboardPage';
import AboutPage from '../pages/AboutPage';
import Snow from '../components/snow/snow';

const AppRouter = (): JSX.Element => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/redirect" element={<SpotifyRedirectPage />} /> */}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/demo" element={<DemoDashboardPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
        {/* <Snow /> */}
    </>
);

export default AppRouter;
