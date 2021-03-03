import { memo, useContext } from "react";
import { Box } from "@material-ui/core";
import Icon from "../icon";
import { IconContext } from "../../context";

export const Input = memo(
  ( {
      iconName,

    } ) => {
    let {SVGIcon, SVGNames} = useContext(IconContext)
    let pass
    return (
      <Box>
        <SVGIcon name={iconName}/>
        <input/>
        {
          type === 'passWord' &&
          <SVGIcon name={SVGNames.eyeOn}/>

        }
      </Box>
    )
  }
)