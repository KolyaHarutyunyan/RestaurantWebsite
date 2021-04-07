import TextField from '@material-ui/core/TextField';
import { isDisabled } from '../util';

const TextareaBuilder = ({ data, value, dependsOn, handleChange, styles, index }) => {
    // DATA
    // destructuring data object
    const { machineName, label } = data;

    return (
        <TextField
            className={styles?.root}
            id={`input-${machineName}-${index}`}
            type="text"
            required={data.required}
            placeholder={data.placeholder}
            disabled={isDisabled(dependsOn, value)}
            multiline
            label={label}
            value={value}
            onChange={(e) => handleChange(e.target.value, machineName)}
            fullWidth
            margin="normal"
            rows={data.rows}
            autoComplete={data.autofill}
            inputProps={data.inputProps}
            variant={data.variant}
        />
    );
};

export default TextareaBuilder;
