import React from 'react';
import { availabilityStyles } from './styles';

export const AvailableHourseBox = ({ day, info }) => {
    const classes = availabilityStyles();

    return (
        <div className={classes.availableHoursBox}>
            <div className={classes.availableHoursBoxHeader}>
                <span>{day}</span>
            </div>
            <div className={classes.availableHoursBoxBody}>
                {info && info.length ? (
                    info.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item && item.available ? (
                                    <span key={index} className={classes.availableHoursBoxBodyInfo}>
                                        {`${item.from} - ${item.to}`}
                                    </span>
                                ) : (
                                    <span className={classes.availableHoursBoxBodyInfo}> Closed </span>
                                )}
                            </React.Fragment>
                        );
                    })
                ) : (
                    <span className={classes.availableHoursBoxBodyInfo}>Not Set</span>
                )}
            </div>
        </div>
    );
};
