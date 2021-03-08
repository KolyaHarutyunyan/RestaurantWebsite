import React from 'react';
import dynamic from 'next/dynamic';
const MuiPhoneNumber = dynamic(import('material-ui-phone-number'), { ssr: false });

const PhoneBuilder = ({ value, data, handleChange, styles, index }) => {
    const { machineName, label, required, defaultCountry } = data;

    return (
        <MuiPhoneNumber
            className={styles?.root}
            id={`input-${machineName}-${index}`}
            label={label}
            required={required}
            inputProps={{
                name: 'phone',
                required: required,
                autoFocus: true,
            }}
            margin="normal"
            defaultCountry={defaultCountry}
            value={value}
            onChange={(phone) => handleChange(phone, machineName)}
        />
    );
};

export default PhoneBuilder;
