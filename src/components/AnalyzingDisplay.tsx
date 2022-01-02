import React from 'react';
// import { fixDate, formatStr } from '../utils/functions';
import { formatStr } from '../utils/functions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import analyzingSong from '../assets/images/analyzingSong.png';
import presentsLeft from '../assets/images/presentsLeft.png';
import presentsRight from '../assets/images/presentsRight.png';

interface AnalyzingDisplayProps {
    song: {
        name: any;
        album: any;
        artist: any;
        imageURL: any;
        playedAt: any;
        countIndex: any;
    };
}

const AnalyzingDisplay = ({
    song: { name, album, artist, imageURL, playedAt, countIndex },
}: AnalyzingDisplayProps | any) => {
    return (
        <div className="page-container">
            <Header />
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <img
                    src={analyzingSong}
                    alt="Analyzing Song"
                    style={{ width: '420px', marginTop: '50px' }}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        flexDirection: 'row',
                    }}
                >
                    <img
                        src={presentsLeft}
                        alt="Christmas Presents"
                        style={{ width: '240px' }}
                    />
                    <img
                        src={imageURL}
                        alt="album cover"
                        style={{
                            width: '300px',
                            borderRadius: '35px',
                            marginRight: '9px',
                        }}
                    />
                    <img
                        src={presentsRight}
                        alt="Christmas Presents"
                        style={{ width: '240px' }}
                    />
                </div>
                <h2 className="analyzing-name">{formatStr(name)}</h2>
                <h3 className="analyzing-artist">{artist}</h3>
                <h3 className="analyzing-album">{album}</h3>
                {/* </div> */}
                <Footer />
            </div>
        </div>

        // <div className="tan d-flex justify-content-center align-items-center text-center content-body">
        //     <div>
        //         <h2 className="bold mt-5">
        //             Analyzing{' '}
        //             <span className="tan pinkish review-number bold">
        //                 {countIndex}/20
        //             </span>
        //         </h2>
        //         <div>
        //             <img
        //                 className="album-cover"
        //                 src={imageURL}
        //                 alt="album cover"
        //             />
        //         </div>
        //         <h2 className="bold mt-3">{formatStr(name)}</h2>
        //         <h3>{formatStr(artist)}</h3>
        //         <h4>{formatStr(album)}</h4>
        //         <h4 className="pinkish">{fixDate(playedAt)}</h4>
        //     </div>
        // </div>
    );
};
export default AnalyzingDisplay;
