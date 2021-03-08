import ReactCodeInput from 'react-verification-code-input';

const CodeVerificationBuilder = ({ data, styles, handleChange, index }) => {
    const { machineName, placeholders, required } = data;

    return (
        <ReactCodeInput
            className={styles?.root}
            id={`input-${machineName}-${index}`}
            placeholder={placeholders}
            required={required}
            onChange={(value) => handleChange(value, machineName)}
        />
    );
};

export default CodeVerificationBuilder;
