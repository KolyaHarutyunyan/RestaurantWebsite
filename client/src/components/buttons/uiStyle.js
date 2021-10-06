import {makeStyles} from "@material-ui/core/styles";
import {colors} from "@eachbase/theme";


export const buttonsStyle = makeStyles((theme) => ({
    editButton: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight:'600',
        color:colors.white,
        width: '90px',
        height:'36px',
        fontSize:'14px',
        '@media (min-width: 768px)': {
            width: '110px',
            fontSize:'16px',
            height:'42px',
        },
    }

}))