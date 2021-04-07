import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { isDisabled } from '../util';

const CheckboxBuilder = ({ data, dependsOn, handleChange, value, styles, index }) => {
    const { machineName, label, required } = data;

    return (
        <FormControlLabel
            control={
                <Checkbox
                    className={styles?.root}
                    id={`input-${machineName}-${index}`}
                    disabled={isDisabled(dependsOn, value)}
                    required={required}
                    checked={value}
                    onChange={(e) => handleChange(e.target.checked, machineName)}
                    value={data.value}
                />
            }
            label={label}
        />
    );
};

export default CheckboxBuilder;
