import {makeStyles} from "@material-ui/core/styles";
import {colors} from "@eachbase/theme";

export const toolTipStyles = makeStyles(() => ({
    name:{
        fontSize:'18px',
        marginBottom:'16px',
        fontWeight:'bold',

    },
    desc:{
        fontSize:'14px',
        marginBottom:'16px',
    },
    sub:{
        fontSize:'14px',
        marginBottom:'16px',
        color:colors.green
    }
}))