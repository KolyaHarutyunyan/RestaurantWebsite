import { Button } from '@material-ui/core';

const ButtonBuilder = ({ data, styles, handleClick, isLoading, index }) => {
    const { machineName, label, inputType, variant } = data;

    return (
        <Button
            type={inputType}
            className={styles?.root}
            id={`input-${machineName}-${index}`}
            variant={variant}
            disabled={isLoading ? true : false}
            onClick={inputType === 'button' ? () => handleClick() : null}>
            {label}
        </Button>
    );
};

export default ButtonBuilder;
