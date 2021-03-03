import { Box, Typography } from '@material-ui/core';
import Icon from '../icon';

const PageTitle = ({ title, style, iconStyle, icon }) => (
    <Box className={{ display: 'flex', flexDirection: 'row' }}>
        {icon ? (
            <div className={iconStyle}>
                <Icon name={icon} />
            </div>
        ) : null}
        <Typography className={style}>{title}</Typography>
    </Box>
);

export default PageTitle;
