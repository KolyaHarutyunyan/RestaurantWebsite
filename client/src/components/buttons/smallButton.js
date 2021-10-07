import {Button} from "@material-ui/core";
import {colors} from "@eachbase/theme";
import {buttonsStyle} from "./uiStyle";

export const SmallButton = ({text, handleClick, width, disabled}) => {
    const classes = buttonsStyle()
    return (
        <Button
            disabled={disabled}
            className={classes.editButton}
            onClick={handleClick}
            style={{ width: width ? width : '', borderRadius: '24px', background: colors.primary, color:'white'}}
        >
            {text}
        </Button>
    )
}