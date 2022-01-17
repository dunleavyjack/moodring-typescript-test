import React from 'react';

interface Props {
    desktopURL: string;
    mobileURL: string;
    breakPoint: string;
    imageClass: string;
    imageAlt: string;
}

const ResponsiveImage: React.FC<Props> = ({
    desktopURL,
    mobileURL,
    breakPoint,
    imageClass,
    imageAlt,
}) => {
    return (
        <picture>
            <source media={`(max-width: ${breakPoint})`} srcSet={mobileURL} />
            <img src={desktopURL} className={imageClass} alt={imageAlt} />
        </picture>
    );
};

export default ResponsiveImage;
