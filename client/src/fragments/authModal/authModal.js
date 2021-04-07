import { Box, Dialog, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { Screens, useAuthStyles } from "./core"
import { memo,  useState } from "react"
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useDispatch } from "react-redux"
import { authActions } from "@eachbase/store"

const screens = {
  signIn: "SignIn",
  signUp: "SignUp",
  getEmail: "GetEmail",
  getRestaurant: "GetRestaurant",
  done: "Done",
  verify: "Verify",
  resetPass: "ResetPass"
}

export const AuthModal = memo(
  ({status,props, close}) => {
    let classes = useAuthStyles()
    let [activeScreen, setActiveScreen] = useState({
      type: screens.signIn,
      props: {  },

    })



    let  ActiveScreen = props=>{
      let Screen = Screens[activeScreen.type]
      return Screen ? <Screen  {...props} {...activeScreen.props}/>:<></>
    }

    let selectScreen = (type, props = {}) => {
      dispatch(authActions.cleanError())
      setActiveScreen({type, props})
    }
    const dispatch = useDispatch();

    let open = {
      SignIn: () => selectScreen(screens.signIn),
      SignUp: () => selectScreen(screens.signUp),
      GetEmail: props => selectScreen(screens.getEmail, {
        ...props,
        notCloseBtn: true,
        hasBackBtn: true,
        backTo: screens.signIn
      }),
      Verify: props => selectScreen(screens.verify, {
        ...props,
        notCloseBtn: true,
        hasBackBtn: true,
        backTo: screens.getEmail
      }),
      ResetPass: props => selectScreen(screens.resetPass,{
        ...props,
        notCloseBtn: true,
        hasBackBtn: true,
        backTo: screens.getEmail
      }),
      GetRestaurant: props => selectScreen(screens.getRestaurant, {...props, notCloseBtn: true,}),
      Done: props => selectScreen(screens.done, props),
    }
    let selfClose = () => {
      close()

      setTimeout(() => selectScreen(screens.signIn), 100)
    }


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
              onClick={open[activeScreen.props.backTo || "SignIn"]}>
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
          <ActiveScreen open={open} close={selfClose}/>
        </Box>
      </Dialog>
    )
  }
)