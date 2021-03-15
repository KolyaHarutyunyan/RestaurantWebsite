import { memo, useState } from "react"
import { Box, Button } from "@material-ui/core"
import { useStyles } from "./style"
import { Icon } from "../../../components";
import { SVGNames } from "../../../contexts/constants/svgNames";


let user = {
  fullName: "Vzgo Vzgov"
}


export const DropDown = memo(
  ( {isAuthed, handlerClick} ) => {
    let classes = useStyles()
    let [openPopup, setOpenPopup] = useState(false)
    console.log("openPopup is: ", openPopup)
    return (
      <>
        {
          isAuthed
            ? <>
              <Button
                onClick={() => setOpenPopup(!openPopup)}
                className={classes.userButton + ( openPopup ? " rotated" : "" )}
              >
                <Icon name={SVGNames.user}/>
                {user.fullName}
                <Icon name={SVGNames.arrowDown}/>
              </Button>
              <Box className={classes.toggleMenu  + ( openPopup ? " opened" : "" )}>
                <ul>

                </ul>
              </Box>

            </>
            :
            <>
              <Button className={`${classes.button} red`} onClick={handlerClick}>
                Sign In
              </Button>

            </>
        }
      </>
    )
  }
)