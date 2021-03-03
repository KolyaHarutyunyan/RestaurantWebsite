import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    picture: {
        width: '100%',
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
        },
    },
});

const Picture = ({ image, wrapperImageRef, imageRef, className = '', classNameWrapper = '', width, height, smOnlySm }) => {
    const classes = useStyles();

    return (
        <picture className={`${classes.picture} ${classNameWrapper}`} ref={wrapperImageRef}>
            {image.xlJPG && image.lgJPG ? <source media="(min-width: 1281px)" data-srcset={image.xlJPG} /> : null}
            {image.xlWEBP && image.lgWEBP ? <source media="(min-width: 1281px)" data-srcset={image.xlWEBP} type="image/webp" /> : null}
            {image.lgJPG && image.mdJPG ? (
                <source media={`${image.mdJPG ? '(min-width: 960px)' : '(max-width: 1281px)'}`} data-srcset={image.lgJPG} />
            ) : null}
            {image.lgWEBP && image.mdWEBP ? (
                <source
                    media={`${image.mdWEBP ? '(min-width: 960px)' : '(max-width: 1281px)'}`}
                    data-srcset={image.lgWEBP}
                    type="image/webp"
                />
            ) : null}
            {image.mdJPG && image.smJPG ? (
                <source
                    media={`${image.smJPG ? `(min-width: ${smOnlySm ? '600px' : '768px'})` : '(max-width: 992px)'}`}
                    data-srcset={image.mdJPG}
                />
            ) : null}
            {image.mdWEBP && image.smWEBP ? (
                <source
                    media={`${image.smWEBP ? `(min-width: ${smOnlySm ? '600px' : '768px'})` : '(max-width: 992px)'}`}
                    data-srcset={image.mdWEBP}
                    type="image/webp"
                />
            ) : null}
            <source
                data-srcset={
                    image.WEBP
                        ? image.WEBP
                        : image.smWEBP
                        ? image.smWEBP
                        : image.mdWEBP
                        ? image.mdWEBP
                        : image.lgWEBP
                        ? image.lgWEBP
                        : image.xlWEBP
                        ? image.xlWEBP
                        : null
                }
                type="image/webp"
            />
            <img
                data-src={
                    image.JPG
                        ? image.JPG
                        : image.smJPG
                        ? image.smJPG
                        : image.mdJPG
                        ? image.mdJPG
                        : image.lgJPG
                        ? image.lgJPG
                        : image.xlJPG
                        ? image.xlJPG
                        : null
                }
                alt={image.alt}
                title={image.title}
                className={`lazyload ${className}`}
                width={width}
                height={height}
                ref={imageRef}
            />
        </picture>
    );
};

export default Picture;
