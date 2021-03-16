import { memo, useState } from "react"
import { Box, Dialog, IconButton } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import { SignIn } from "./signIn/signIn"
import {useStyles} from "./styles/popup.style"
import { SignUp } from "./signUp/signUp";
import { Forgot } from "./forgot/forgot";

export const Auth = memo(
  ( {active, close, hasCloseBtn} ) => {
    let classNames = useStyles()
    let [activePosition, setActivePosition] = useState(0)


    let selfClose = () => {
      setActivePosition(0)
      close()
    }

    return (
      <Dialog
        className={classNames.dialog}
        open={active}
        onClose={selfClose}
      >
        {hasCloseBtn ?
          <IconButton
          aria-label="close"
          className={classNames.closeIcon}
          onClick={selfClose}>
          <CloseIcon/>
        </IconButton>
        :null}
        <Box width="100%" overflow="hidden" position="relative">
          <SignIn className={classNames.authBox + ( 0 === activePosition ? " active" : " disabled" )}
                  changePosition={setActivePosition}/>
          <Forgot className={classNames.authBox + ( 1 === activePosition ? " active" : " disabled" )}
                  changePosition={setActivePosition}
                  close={selfClose}/>
          <SignUp className={classNames.authBox + ( 2 === activePosition ? " active" : " disabled" )}
                  changePosition={setActivePosition}
                  close={selfClose}/>
        </Box>
      </Dialog>
    )
  })