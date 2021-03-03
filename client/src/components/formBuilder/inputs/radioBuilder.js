import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, isDisabled } from '../util';

const RadioBuilder = ({ data, dependsOn, handleChange, value, styles, index }) => {
    // Destructuring the data object
    const { machineName, label, required } = data;

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                className={styles?.root}
                id={`input-${machineName}-${index}`}
                aria-label="position"
                name="position"
                disabled={isDisabled(dependsOn, value)}
                required={required}
                value={value}
                onChange={(e) => handleChange(e.target.value, machineName)}
                row>
                {data.options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option.value}
                        control={<Radio className={createStyles(styles, 'root')} />}
                        label={option.label}
                        labelPlacement={option.labelPlacement}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioBuilder;
