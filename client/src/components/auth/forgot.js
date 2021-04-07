import { memo } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

export const Forgot = memo(
  ( {pos, changePosition} ) => {
    let classes = useStyles()

    return (
      <Box className={classes.authBox+(pos!==0?" disabled":" active")}>


      <h1>forgot {pos}</h1>
      <button onClick={()=>changePosition(pos=>pos-1)}>back</button>
      </Box>
    )
  }
)