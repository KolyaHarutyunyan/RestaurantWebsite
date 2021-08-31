import {makeStyles} from "@material-ui/core/styles";
import {colors} from "@eachbase/theme";


export const restaurantStile = makeStyles((theme) => ({
    value: {
        fontFamily: 'Open Sans, sans-serif',
        color: `${colors.text}!important`,
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px',
        '@media (max-width: 767px)': {
            fontSize: '14px'
        }
    },

    valueNotSet: {
        fontFamily: 'Open Sans, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        color: `${colors.notSet}!important`,
        fontSize: '16px',
        '@media (max-width: 767px)': {
            fontSize: '14px'
        }
    }
}))