import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Checkbox } from '@material-ui/core';
import { ValidationInput } from '../inputs/validationInput';
import { modalsStyles } from './styles';
import useWindowDimensions from '../../utils/width';
import {Icons} from "@eachbase/theme";

const inputStyle = {
    widths: '111px',
};

export const AvailabilitySchedule = ({ availabilityData, handleGetTimes, handleGetEditTimes, eventInfo }) => {

    const width = useWindowDimensions();
    const [times, setTime] = useState(
        availabilityData && Object.keys(availabilityData).length !== 0
            ? availabilityData
            : width.width < 1240
            ? {
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: [],
            }
            : {
                monday: [],
                friday: [],
                tuesday: [],
                saturday: [],
                wednesday: [],
                sunday: [],
                thursday: [],
            }
    );

    const shortDayNames = (name) => {
        switch (name) {
            case 'monday':
                return 'Mon';
            case 'tuesday':
                return 'tue';
            case 'wednesday':
                return 'wed';
            case 'thursday':
                return 'thu';
            case 'friday':
                return 'fri';
            case 'saturday':
                return 'sat';
            case 'sunday':
                return 'sun';
        }
    };

    useEffect(() => {
        handleGetTimes(times);
    }, [times]);

    const classes = modalsStyles();

    const addNewRow = (key) => {
        let newObj = { ...times };
        newObj[key].push({
            from: moment().format('HH:mm'),
            to: moment().format('HH:mm'),
            available: true,
        });
        setTime(newObj);
        setStateBool(true);
    };

    const changeData = (e, index, key) => {
        let obj = { ...times };
        obj[key][index][e.target.name] = e.target.value;
        if (e.target.value === '') {
            obj[key][index][e.target.name] = !e.target.checked;
        }
        setTime(obj);
        setStateBool(true);
    };

    const removeRow = (key, index) => {
        let obj = { ...times };
        obj[key].splice(index, 1);
        setTime(obj);
        setStateBool(true);
    };

    const [stateBool, setStateBool] = useState(false);

    useEffect(() => {
        if (stateBool === true && eventInfo && eventInfo.id) {
            handleGetEditTimes(times);
        }
    }, [stateBool]);

    return (
        <div className={classes.availableScheduleWrapper}>
            <div className={classes.scrollable}>
                {Object.keys(times).map(function (key, weekDayIndex) {
                    return (
                        <div key={weekDayIndex} className={classes.timeRow}>
                            <p className={classes.dayName}>{shortDayNames(key)}</p>
                            <div className={classes.timeRowWrapper}>
                                {!times[key].length && (
                                    <div className={classes.addTime} onClick={() => addNewRow(key)}>
                                        {/*<BiChevronDown size={25} />*/}
                                        {/*<Icon name={SVGNames.AddIcon} color={Colors.ThemeGreen} width={'18px'} height={'18px'} />*/}
                                        <span>Add Hours</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                {times[key].length
                                    ? times[key].map((item, index) => {
                                        return (
                                            <div key={index} className={classes.times}>
                                                <ValidationInput
                                                    style={inputStyle}
                                                    className={classes.timeInputStyle}
                                                    errorFalse={true}
                                                    // disabled={!item.isActive}
                                                    name="from"
                                                    value={item.from}
                                                    type="time"
                                                    onChange={(e) => {
                                                        changeData(e, index, key);
                                                    }}
                                                />
                                                <p className={classes.smallLine}>-</p>
                                                <ValidationInput
                                                    style={inputStyle}
                                                    className={classes.timeInputStyle}
                                                    errorFalse={true}
                                                    // disabled={!item.isActive}
                                                    name="to"
                                                    value={item.to}
                                                    type="time"
                                                    onChange={(e) => {
                                                        changeData(e, index, key);
                                                    }}
                                                />
                                                <div className={classes.closeCheckbox}>
                                                    <Checkbox
                                                        style={{ color: '#FF453A' }}
                                                        checked={!item.available}
                                                        name="available"
                                                        className={classes.customCheckbox}
                                                        onChange={(e) => {
                                                            changeData(e, index, key);
                                                        }}
                                                    />
                                                    <span className={classes.notAvailableText}>Closed</span>
                                                </div>
                                                <span
                                                    className={classes.removeTimeBtnMobile}
                                                    onClick={() => {
                                                        removeRow(key, index);
                                                    }}>
                                                         <Icons.DeleteButtonSmall/>
                                                  </span>

                                                <span
                                                    className={classes.removeTimeBtn}
                                                    onClick={() => {
                                                        removeRow(key, index);
                                                    }}>
                                                         <Icons.DeleteButtonSmall/>
                                                  </span>


                                            </div>
                                        );
                                    })
                                    : ''}
                                {times[key].length ? (
                                    <p onClick={() => addNewRow(key)} className={classes.moreHoursBtn}>
                                        Add more hours
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
