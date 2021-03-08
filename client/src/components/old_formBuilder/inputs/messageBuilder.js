import { Box } from '@material-ui/core';
import Message from '../../message';

const MessageBuilder = ({ data, styles, isLoading, message, error, index }) => {
    const { machineName } = data;

    return (
        <Box className={styles?.root} id={`input-${machineName}-${index}`}>
            {!isLoading && message ? <Message error={error} message={message} /> : null}
        </Box>
    );
};

export default MessageBuilder;
