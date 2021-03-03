import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import data from '../../../cms/footer.json';

const AutocompleteBuilder = ({ styles, index = 0, cat }) => {
    const { machineName, required, variant, placeholder, categories, size, multiple } = data;
    console.log(data);
    return (
        <Autocomplete
            className={styles?.root}
            id={`input-${machineName}-${index}`}
            size={size}
            multiple
            options={cat}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => <TextField required={required} {...params} variant={variant} placeholder={placeholder} />}
        />
    );
};

export default AutocompleteBuilder;
