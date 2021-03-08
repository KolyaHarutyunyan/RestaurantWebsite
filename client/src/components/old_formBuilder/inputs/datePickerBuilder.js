// import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { isDisabled } from '../util';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createMuiTheme({
    /* 
    overrides: {
        layoutPadding: '52px 39px',
        layoutPaddingTop: '52px',
        MuiButton: {
          root: {
            borderRadius: 30,
            width: '100%',
          }, 
        }, 
        MuiInput: {
          underline: {
            "&:before": {
              borderBottom: `1px solid white`
            }
          }
        },
        MuiFormLabel: {
          root: {
            color: 'white'
          }
        }
      }, 
      palette: {
        background: {
          main: '#0A226B',
        },
        primary: {
          main: '#0a226b',
        },
        secondary: {
          main: '#76c9d2',
          contrastText: '#FFFFFF',
        },
        error: {
          main: '#9D399E',
        },
      },
    });
 */

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
                border: '0.5px solid #387DFF',
                borderRadius: '24px',
                width: '100%',
                display: 'flex',
                '&:hover': {
                    border: '1px solid #387DFF',
                },
            },
            marginNormal: {
                marginTop: '12px',
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
                paddingLeft: '12px',
                paddingRight: '8px',
                paddingTop: '8px',
                '& svg': {
                    color: '#387DFF',
                },
            },
        },

        MuiInput: {
            width: '100%',
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
        MuiPickersDay: {
            color: '#387DFF',
            daySelected: {
                backgroundColor: '#387DFF',
                '&:hover': {
                    backgroundColor: '#387DFF',
                },
            },
        },
        MuiFormHelperText: {
            root: {
                display: 'none',
            },
        },
    },
});

const DatePickerBuilder = ({ data, dependsOn, handleChange, value, styles, index }) => {
    // Destructuring the data object
    const { machineName, label, required } = data;

    return (<></>
        // <ThemeProvider theme={materialTheme}>
        //     <MuiPickersUtilsProvider utils={DateFnsUtils}>
        //         <KeyboardDatePicker
        //             className={styles?.root}
        //             id={`input-${machineName}-${index}`}
        //             //disabled={isDisabled(dependsOn, value)}
        //             //required={required}
        //             //disableToolbar
        //             variant="inline"
        //             format="MM/dd/yyyy"
        //             margin="normal"
        //             label={label}
        //             value={value}
        //             onChange={(value) => handleChange(value, machineName)}
        //             KeyboardButtonProps={{
        //                 'aria-label': 'change date',
        //             }}
        //             placeholder={'MM/dd/yyyy'}
        //         />
        //     </MuiPickersUtilsProvider>
        // </ThemeProvider>
    );
};

export default DatePickerBuilder;
