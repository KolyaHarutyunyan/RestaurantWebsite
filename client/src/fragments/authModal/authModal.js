import { memo, useState } from "react";
import { Box, Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { SignIn, SignUp,GetRestaurant, useAuthStyles } from "./core"


const screens = {
  signIn: "signIn",
  signUp: "signUp",
  getEmail: "getEmail",
  getRestaurant: "getRestaurant",
  done: "done",
  verify: "verify",
  resetPass: "resetPass"
}


export const AuthModal = memo(
  ( {status, close} ) => {
    let classes = useAuthStyles()

    let [screen, setScreen] = useState({
      type: screens.signIn,
      props: {}
    })

    let open = {
      signIn: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.signIn} )),
      signUp: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.signUp} )),
      getEmail: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.getEmail} )),
      getRestaurant: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.getRestaurant} )),
      done: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.done} )),
      verify: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.verify} )),
      resetPass: ( props = {} ) => setScreen(current => ( {...current, props, type: screens.resetPass} ))

    }

    let selfClose = ()=>{
      close()
      setTimeout(()=>setScreen({
        type: screens.signIn,
        props: {}
      }),100)

    }


    console.log(screen)
    return (
      <Dialog
        className={classes.dialog}
        open={status}
        // onClose={selfClose}
      >
        {
          !screen.props.notCloseBtn ?
            <IconButton
              aria-label="close"
              className={classes.closeIcon}
              onClick={selfClose}>
              <CloseIcon/>
            </IconButton>
            : null
        }
        <Box className={classes.authBox}>
          {screen.type === screens.signIn && <SignIn {...screen.props} open={open}/>}
          {screen.type === screens.signUp && <SignUp {...screen.props} open={open}/>}
          {screen.type === screens.getRestaurant && <GetRestaurant {...screen.props} close={selfClose} open={open}/>}
          {/*{screen.type === screens.signIn && <SignIn {...screen.props} open={open}/>}*/}
          {/*{screen.type === screens.signIn && <SignIn {...screen.props} open={open}/>}*/}
          {/*{screen.type === screens.signIn && <SignIn {...screen.props} open={open}/>}*/}

        </Box>


        {/*gdhglb fgfkxjhv cjhgf lhlhg l*/}
        {/*<Box width="100%" overflow="hidden" position="relative">*/}
        {/*  <SignIn className={classes.authBox + ( 0 === activePosition ? " active" : " disabled" )}*/}
        {/*          changePosition={setActivePosition}/>*/}
        {/*  <Forgot className={classes.authBox + ( 1 === activePosition ? " active" : " disabled" )}*/}
        {/*          changePosition={setActivePosition}*/}
        {/*          close={selfClose}/>*/}
        {/*  <SignUp className={classes.authBox + ( 2 === activePosition ? " active" : " disabled" )}*/}
        {/*          changePosition={setActivePosition}*/}
        {/*          close={selfClose}/>*/}
        {/*</Box>*/}
      </Dialog>
    )
  }
)