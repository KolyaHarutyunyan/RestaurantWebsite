import {   memo, useState } from "react";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import { Forgot } from "./forgot";
import { Box, Dialog, IconButton } from "@material-ui/core";
import { useStyles } from "./styles";
import CloseIcon from '@material-ui/icons/Close';


export const Auth = memo(
  ( {active, close} ) => {
    let classes = useStyles()
    let [activePosition, setActivePosition] = useState(0)

    return (
      <Dialog
        className={classes.dialog}
        maxWidth={400}
        open={active}
        onClose={close}
      >
        <IconButton
          aria-label="close"
          className={classes.closeIcon}
          onClick={close}>
          <CloseIcon/>
        </IconButton>
        <Box width="100%" overflow="hidden" position="relative" >
          <SignIn pos={0-activePosition} changePosition={setActivePosition}/>
          <SignUp pos={1-activePosition} changePosition={setActivePosition}/>
          <Forgot pos={2-activePosition} changePosition={setActivePosition}/>
        </Box>
      </Dialog>
    )
  })