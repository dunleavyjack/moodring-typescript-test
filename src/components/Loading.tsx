import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';

interface Props {
    text: string;
}

const Loading: React.FC<Props> = ({ text }) => {
    return (
        <div className="page-container">
            <Header />
            <div className="page-content">
                <h1 style={{ color: 'white' }}>{text}</h1>
                <Footer />
            </div>
        </div>
    );
};

export default Loading;
