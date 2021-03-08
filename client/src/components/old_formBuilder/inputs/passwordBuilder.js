import { Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Fragment } from 'react';
import { useState } from 'react';
import Icon from '../../icon';

const PasswordBuilder = ({ data, value, handleChange, styles, index }) => {
    // Destructuring th data object
    const { machineName, label, required, inputType, icon } = data;
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Fragment>
            {icon ? (
                <div className="icon-wrapper">
                    <Icon name={icon} />
                </div>
            ) : null}
            <FormControl
                className={styles?.root}
                id={`input-${machineName}-${index}`}
                variant={data.variant}
                margin="normal"
                required={required}>
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                {data.variant === 'outlined' ? (
                    <OutlinedInput
                        name={value}
                        label={label}
                        type={showPassword ? 'text' : 'password'}
                        value={value}
                        placeholder={data.placeholder}
                        onChange={(e) => handleChange(e.target.value, machineName, inputType, e.target.validity.valid)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                ) : (
                    <Input
                        name={value}
                        label={label}
                        type={showPassword ? 'text' : 'password'}
                        value={value}
                        placeholder={data.placeholder}
                        onChange={(e) => handleChange(e.target.value, machineName, inputType, e.target.validity.valid)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {value.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                )}
            </FormControl>
        </Fragment>
    );
};

export default PasswordBuilder;
