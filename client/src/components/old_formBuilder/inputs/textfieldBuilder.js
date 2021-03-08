import { useEffect, useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { isDisabled } from '../util';
import { Spring } from 'react-spring/renderprops.cjs';
import Icon from '../../icon';
import { Typography } from '@material-ui/core';

const TextfieldBuilder = ({ data, value, dependsOn, handleChange, styles, index }) => {
    console.log(styles, 'teeeeeeeeeeeeeext');
    // Destructuring th data object
    const { machineName, label, required, inputType, icon, description, animatedLabel } = data;
    const [active, setActive] = useState(dependsOn ? false : true);
    // const [ height, setHeight ] = useState(0);

    useEffect(() => {
        if (dependsOn) {
            setActive(!isDisabled(dependsOn, value));
        }
    }, [dependsOn, value]);

    return (
        <Fragment>
            <Spring
                from={dependsOn ? { height: 0, opacity: 0 } : { height: 'auto', opacity: 1 }}
                to={dependsOn ? { height: active ? 'auto' : 0, opacity: active ? 1 : 0 } : {}}>
                {(props) => (
                    <div style={props} className={styles?.contentWrapper}>
                        {icon ? (
                            <div className="icon-wrapper">
                                <Icon name={icon} />
                            </div>
                        ) : null}

                        {description ? (
                            <div className="description-wrapper">
                                <Typography>{description}</Typography>
                            </div>
                        ) : null}

                        <TextField
                            InputLabelProps={{
                                shrink: animatedLabel,
                            }}
                            className={styles?.root}
                            id={`input-${machineName}-${index}`}
                            name={value}
                            type={inputType}
                            required={required}
                            placeholder={data.placeholder}
                            disabled={isDisabled(dependsOn, value)}
                            label={label}
                            value={value}
                            onChange={(e) => handleChange(e.target.value, machineName, inputType, e.target.validity.valid)}
                            fullWidth={data.fullWidth}
                            margin="normal"
                            autoComplete={data.autofill}
                            autofill={data.autofill}
                            inputProps={data.inputProps === 'number' ? { pattern: '[0-9]*' } : data.inputProps}
                            variant={data.variant}
                        />
                    </div>
                )}
            </Spring>
        </Fragment>
    );
};

export default TextfieldBuilder;
