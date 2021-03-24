import { memo, useState } from "react";
import { Box, Dialog, IconButton } from "@material-ui/core";
import { SignIn, SignUp, GetRestaurant, useAuthStyles, Done, GetEmail, Verify, ResetPass } from "./core"

import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close"
import { AuthScreenTypes, SVGNames } from "@eachbase/constants"
import { Icon } from "@eachbase/components"
import {authActions} from "@eachbase/store"



export const AuthModal = memo(
  ({status, close}) => {
    const auth = useSelector((state) => state.auth);

    let classes = useAuthStyles()

    const dispatch = useDispatch();

    console.log(auth)
    // let selectScreen = (type, props = {}) => setActiveScreen({type, props})

    let open = {
      // signIn: (props={})=>setActiveScreen({type:screens.signIn,props: {...props}}),
      signIn: () => dispatch(authActions.checkAuthScreen({type: AuthScreenTypes.signIn})),
      signUp: () => dispatch(authActions.checkAuthScreen({type: AuthScreenTypes.signUp}))

      // signIn: () => selectScreen(screens.signIn),
      // signUp: () => selectScreen(screens.signUp),
      // getEmail: props => selectScreen(screens.getEmail, {...props, hasBackBtn: true,backTo:screens.signIn}),
      // verify: props => selectScreen(screens.verify, {...props, notCloseBtn: true, hasBackBtn: true,backTo:screens.getEmail}),
      // resetPass: props => selectScreen(screens.resetPass, {...props, notCloseBtn: true, hasBackBtn: true,backTo:screens.getEmail}),
      // getRestaurant: props => selectScreen(screens.getRestaurant, props),
      // done: props => selectScreen(screens.done, props),
    }

    let selfClose = () => {
      close()
      setTimeout(() => open.signIn(), 100)
    }


    // console.log(activeScreen)
    return (
      <Dialog
        className={classes.dialog}
        open={status && !auth.isAuthenticated}
        // onClose={selfClose}
      >
        {
          auth.activeScreen.props.hasBackBtn ?
            <IconButton
              aria-label="back"
              className={classes.backIcon}
              onClick={open[auth.activeScreen.props.backTo || "signIn"]}>
              <Icon name={SVGNames.Back}/>
            </IconButton>
            : null
        }
        {
          !auth.activeScreen.props.notCloseBtn ?
            <IconButton
              aria-label="close"
              className={classes.closeIcon}
              onClick={selfClose}>
              <CloseIcon/>
            </IconButton>
            : null
        }

        <Box className={classes.authBox}>
          {auth.activeScreen.type === AuthScreenTypes.signIn && <SignIn {...auth.activeScreen.props} open={open}/>}
          {auth.activeScreen.type === AuthScreenTypes.signUp && <SignUp {...auth.activeScreen.props} open={open}/>}
          {auth.activeScreen.type === AuthScreenTypes.getRestaurant &&
          <GetRestaurant {...auth.activeScreen.props} open={open}/>}
          {auth.activeScreen.type === AuthScreenTypes.done &&
          <Done {...auth.activeScreen.props} close={selfClose} open={open}/>}
          {auth.activeScreen.type === AuthScreenTypes.getEmail &&
          <GetEmail {...auth.activeScreen.props} close={selfClose} open={open}/>}
          {auth.activeScreen.type === AuthScreenTypes.verify && <Verify {...auth.activeScreen.props} open={open}/>}
          {auth.activeScreen.type === AuthScreenTypes.resetPass &&
          <ResetPass {...auth.activeScreen.props} open={open}/>}
        </Box>

      </Dialog>
    )
  }
)