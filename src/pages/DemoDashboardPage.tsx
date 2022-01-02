import React, { useState, useEffect } from 'react';
import { demoSongData, demoUserProfile } from '../utils/demoSongData';
import AnalyzingContainer from '../components/AnalyzingContainer';
import Loading from '../components/Loading';

const DemoDashboardPage = () => {
    const [finishedLoading, setFinishedLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFinishedLoading(true);
        }, 3000);
    });

    if (finishedLoading === false) {
        return (
            <div>
                <Loading text="loading" />
            </div>
        );
    }

    return (
        <>
            <AnalyzingContainer
                songs={demoSongData}
                profile={demoUserProfile}
            />
        </>
    );
};

export default DemoDashboardPage;
