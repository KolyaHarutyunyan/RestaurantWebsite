// import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { isDisabled } from '../util';
import { createMuiTheme, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createMuiTheme({
    overrides: {
        borderBottom: `none`,

        MuiButton: {
            root: {
                borderRadius: 30,
                width: '100%',
            },
        },
        MuiFormControl: {
            root: {
                height: '48px',
                border: '1px solid #387DFF',
                borderRadius: '24px',
                margin: 0,
                width: '100%',
                // marginLeft: '8px',
                marginTop: '0px',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'center',
            },
            marginNormal: {},
        },
        MuiFormLabel: {
            root: {
                marginLeft: '15px',
                marginTop: '-10px',
            },
        },
        MuiSelect: {
            root: {
                marginTop: '-15px',
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                '& svg': {
                    fill: '#252E48',
                },
                '& p': {
                    font: 'normal normal normal 1.125rem Roboto',
                    color: '#387DFF',
                },
            },
            daysHeader: {
                '& span': { color: '#252E48' },
            },
        },
        MuiInputBase: {
            root: {
                '&:hover': {
                    borderBottom: `none`,
                },
                '& input': {
                    marginBottom: '12px',
                },
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingTop: '0px',

                '& svg': {
                    color: '#387DFF',
                    position: 'relative',
                    marginTop: '-10px',
                },
            },
        },
        MuiInputLabel: {
            shrink: {
                display: 'none',
            },
        },

        MuiInput: {
            width: '100%',

            /* MuiSvgIcon: {
                root: {
                    color: '#387DFF',
                },
            }, */
            formControl: {
                marginTop: 0,
            },
            underline: {
                '&:before': {
                    borderBottom: `none`,
                },
                '&:after': {
                    borderBottom: `none`,
                },
                '&:hover': {
                    borderBottom: `none`,
                },
            },
        },
    },
});

const TimePickerBuilder = ({ data, dependsOn, handleChange, value, styles, index }) => {
    // Destructuring the data object
    const { machineName, label, required, defaultValue, animatedLabel } = data;

    return (
        <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TextField
                    className={styles?.root}
                    id={`input-${machineName}-${index}`}
                    label={label}
                    type="time"
                    //value={value}
                    required={required}
                    defaultValue={defaultValue}
                    disabled={isDisabled(dependsOn, value)}
                    onChange={(value) => handleChange(value, machineName)}
                    InputLabelProps={{
                        shrink: animatedLabel,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};

export default TimePickerBuilder;
