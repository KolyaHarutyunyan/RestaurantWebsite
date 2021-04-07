import { memo } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

export const SignUp = memo(
  ({pos,changePosition}) => {
    let classes = useStyles()

    return (
      <Box className={classes.authBox+(pos!==0?" disabled":" active")}>



      <h1>sign up {pos}</h1>
      </Box>
    )
  }
)