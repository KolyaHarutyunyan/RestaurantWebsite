import { Box, Dialog, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { Screens, useAuthStyles } from "./core"
import { memo, useState } from "react"
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useDispatch } from "react-redux";
import { authActions } from "@eachbase/store";

const screens = {
  signIn: "SignIn",
  signUp: "SignUp",
  getEmail: "RetEmail",
  getRestaurant: "RetRestaurant",
  done: "Done",
  verify: "Verify",
  resetPass: "ResetPass"
}

export const AuthModal = memo(
  ({status, close}) => {
    let classes = useAuthStyles()


    let selectScreen = (type, props = {}) => {
      // dispatch(authActions.cleanError())
      setActiveScreen({type, props})
    }
    const dispatch = useDispatch();

    let open = {
      signIn: () => selectScreen(screens.signIn),
      signUp: () => selectScreen(screens.signUp),
      getEmail: props => selectScreen(screens.getEmail, {
        ...props,
        notCloseBtn: true,
        hasBackBtn: true,
        backTo: screens.signIn
      }),
      verify: props => selectScreen(screens.verify, {
        ...props,
        notCloseBtn: true,
        hasBackBtn: true,
        backTo: screens.getEmail
      }),
      resetPass: () => selectScreen(screens.resetPass),
      getRestaurant: props => selectScreen(screens.getRestaurant, {...props, notCloseBtn: true,}),
      done: props => selectScreen(screens.done, props),
    }
    let selfClose = () => {
      close()
      // dispatch(authActions.cleanError())
      setTimeout(() => selectScreen(screens.signIn), 100)
    }

    let [activeScreen, setActiveScreen] = useState({
      type: screens.done,
      props: {
        type: "restaurant",
        open,
        close: selfClose
      },

    })

    let  ActiveScreen = (props)=>{
      let Screen = Screens[activeScreen.type]
      return Screen ? <Screen {...props} {...activeScreen.props}/>:<></>
    }


    console.log(activeScreen)
    return (
      <Dialog
        className={classes.dialog}
        open={status}
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
          <ActiveScreen/>
        </Box>
      </Dialog>
    )
  }
)