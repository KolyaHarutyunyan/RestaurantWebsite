import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles } from '../util';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const materialTheme = createMuiTheme({
    overrides: {
        borderBottom: `none`,

        MuiButton: {
            root: {
                borderRadius: 24,
                width: '100%',
            },
        },
        MuiFormControl: {
            root: {
                height: '48px',
                border: '0.5px solid #387DFF',
                borderRadius: '24px',
                margin: 0,
                width: '100%',
                // marginLeft: '8px',
                marginTop: '0px',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'center',
                '&:hover': {
                    border: '1px solid #387DFF',
                },
            },
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
                '& :hover': {
                    borderBottom: 'none',
                },

                paddingLeft: '12px',
                paddingRight: '12px',
                paddingTop: '0px',
                '& svg': {
                    color: '#387DFF',
                    position: 'relative',
                    marginTop: '-10px',
                    marginRight: '7px',
                },
            },
        },
        MuiInputLabel: {
            shrink: {
                display: 'none',
            },
        },
        MuiListItem: {
            button: {
                '& selected': {
                    backgroundColor: '#387DFF',
                },
                '&:hover': {
                    backgroundColor: '#387DFF1A',
                },
            },
        },
        MuiList: {
            root: {
                backgroundColor: 'transparent',
            },
        },

        MuiInput: {
            width: '100%',

            formControl: {
                marginTop: 0,
                '&:hover': {
                    borderBottom: 'none',
                },
            },

            underline: {
                '&:before': {
                    borderBottom: `none`,
                },
                '&:after': {
                    borderBottom: `none`,
                },
                '&:hover': {
                    borderBottom: 'none',
                },
            },
        },
    },
});

const SelectBuilder = ({ data, value, handleChange, styles, index }) => {
    // destructuring data
    const { machineName, label, animatedLabel } = data;

    return (
        <ThemeProvider theme={materialTheme}>
            <FormControl className={createStyles(styles, 'root')} margin="normal" required={data.required}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    className={styles?.root}
                    id={`input-${machineName}-${index}`}
                    value={value}
                    label={label}
                    InputLabelProps={{
                        shrink: animatedLabel,
                    }}
                    onChange={(e) => handleChange(e.target.value, machineName)}>
                    {data.options.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ThemeProvider>
    );
};

export default SelectBuilder;
