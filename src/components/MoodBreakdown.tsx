import React from 'react';
import fullBreakdown from '../assets/text/fullBreakdown.png';
import BreakdownDetail from '../components/BreakdownDetail';
import MoodSound from '../components/MoodSound';
import Houses from '../components/Houses';

const MoodBreakdown: React.FC = (): JSX.Element => {
    return (
        <div className="breakdown-box-one">
            <div className="breakdown-box-two">
                <img
                    className="full-breakdown-img"
                    src={fullBreakdown}
                    alt="Full Breakdown"
                />
                <BreakdownDetail
                    emoji={'🐶'}
                    percent={'50.2%'}
                    mood={'More Happiness'}
                />
                <BreakdownDetail
                    emoji={'🕺'}
                    percent={'23.9%'}
                    mood={'More Danceability'}
                />
                <BreakdownDetail
                    emoji={'⚡'}
                    percent={'15.1%'}
                    mood={'More Energy'}
                />
                <BreakdownDetail
                    emoji={'🍵'}
                    percent={'79.2%'}
                    mood={'More Acousticness'}
                />
                <MoodSound songKey={'C'} />
                <Houses />
            </div>
        </div>
    );
};

export default MoodBreakdown;
