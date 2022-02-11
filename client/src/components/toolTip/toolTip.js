import { Tooltip, withStyles } from '@material-ui/core';
import { colors } from "@eachbase/theme";

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        width:'auto',
        minWidth: 300,
        background: colors.text,
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        fontSize: '14px',
        color:colors.white,
        padding:'24px 16px',
        '@media (min-width: 767px)': {
            marginLeft:'500px'
         }
    },
}))(Tooltip);
