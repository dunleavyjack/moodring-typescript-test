import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import DemoDashboardPage from '../pages/DemoDashboardPage';
import AboutPage from '../pages/AboutPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Snow from '../components/Snow/Snow';

const AppRouter = (): JSX.Element => (
    <>
        <BrowserRouter>
            <Header />
            <div className="page">
                <div className="responsive-padding">
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        {/* <Route path="/redirect" element={<SpotifyRedirectPage />} /> */}
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/demo" element={<DemoDashboardPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
        <Snow />
    </>
);

export default AppRouter;
