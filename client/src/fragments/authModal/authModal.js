import { memo, useState } from "react";
import { Box, Dialog, IconButton } from "@material-ui/core";
import { SignIn, SignUp, GetRestaurant, useAuthStyles, Done, GetEmail, Verify, ResetPass } from "./core"
import { signIn } from "../../store/auth";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close"
import { SVGNames } from "@eachbase/constants"
import { Icon } from "@eachbase/components"


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
  ({status, close}) => {
    const auth = useSelector((state) => state.auth);


    let classes = useAuthStyles()

    let [activeScreen, setActiveScreen] = useState({
      type: screens.signIn,
      props: {}
    })

    let selectScreen = (type, props = {}) => setActiveScreen({type, props})

    let open = {
      // signIn: (props={})=>setActiveScreen({type:screens.signIn,props: {...props}}),
      signIn: () => selectScreen(screens.signIn),
      signUp: () => selectScreen(screens.signUp),
      getEmail: props => selectScreen(screens.getEmail, {...props, hasBackBtn: true,backTo:screens.signIn}),
      verify: props => selectScreen(screens.verify, {...props, notCloseBtn: true, hasBackBtn: true,backTo:screens.getEmail}),
      resetPass: props => selectScreen(screens.resetPass, {...props, notCloseBtn: true, hasBackBtn: true,backTo:screens.getEmail}),
      getRestaurant: props => selectScreen(screens.getRestaurant, props),
      done: props => selectScreen(screens.done, props),
    }

    let selfClose = () => {
      close()
      setTimeout(() => selectScreen(screens.signIn), 100)
    }


    console.log(activeScreen)
    return (
      <Dialog
        className={classes.dialog}
        open={status && !auth.isAuthenticated}
        // onClose={selfClose}
      >
        {
          activeScreen.props.hasBackBtn ?
            <IconButton
              aria-label="back"
              className={classes.backIcon}
              onClick={open[activeScreen.props.backTo || "signIn"]}>
              <Icon name={SVGNames.Back}/>
            </IconButton>
            : null
        }
        {
          !activeScreen.props.notCloseBtn ?
            <IconButton
              aria-label="close"
              className={classes.closeIcon}
              onClick={selfClose}>
              <CloseIcon/>
            </IconButton>
            : null
        }
        <Box className={classes.authBox}>
          {activeScreen.type === screens.signIn && <SignIn {...activeScreen.props} open={open}/>}
          {activeScreen.type === screens.signUp && <SignUp {...activeScreen.props} open={open}/>}
          {activeScreen.type === screens.getRestaurant && <GetRestaurant {...activeScreen.props} open={open}/>}
          {activeScreen.type === screens.done && <Done {...activeScreen.props} close={selfClose} open={open}/>}
          {activeScreen.type === screens.getEmail && <GetEmail {...activeScreen.props} close={selfClose} open={open}/>}
          {activeScreen.type === screens.verify && <Verify {...activeScreen.props} open={open}/>}
          {activeScreen.type === screens.resetPass && <ResetPass {...activeScreen.props} open={open}/>}
        </Box>

      </Dialog>
    )
  }
)