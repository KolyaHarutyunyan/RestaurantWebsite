import { memo, useContext } from "react";
import { Box, Button } from "@material-ui/core"
import { CreateMenu, useHeaderStyles } from "."
import { SVGNames } from "@eachbase/constants"
import { Icon } from "@eachbase/components"
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import {authActions} from '@eachbase/store'
=======
import { ModalContext } from "@eachbase/context";
>>>>>>> 79fba9b11727692fc59a031dcf58fba855351fda


export const Navbar = memo(
  ( {toggle, isMobile, user, status} ) => {
    let classes = useHeaderStyles()
<<<<<<< HEAD
    let openAuth = () => { }
    const dispatch = useDispatch()

    let handlerClick = (formData)=>{
      dipatch(authActions.signUp(formData))
    }
    
=======

    let {openModal} = useContext(ModalContext)
    let openAuth = () => openModal.auth()



    let openAvatar = () => openModal.avatar()

    let handlerClick = () => {
    }
>>>>>>> 79fba9b11727692fc59a031dcf58fba855351fda
    return (
      <Box>
        {
          isMobile
            ?
            <>
              <Button onClick={toggle} className={classes.toggleMenuBtn + ( status ? " opened" : "" )}>
                <Icon name={SVGNames.toggleMenu} />
              </Button>
            </>
            :
            <ul className={classes.menu}>
              <li className={classes.listItem}>
                {
                  user.isAuthenticated
                    ?
                    <Box className={classes.userButtonContainer}>
                      <Button
                        onClick={toggle}
                        className={classes.userButton + ( status ? " rotated" : "" )}
                      >
                        <Icon name={SVGNames.user}/>
                        {user.fullName}
                        <Icon name={SVGNames.arrowDown}/>
                      </Button>

                    </Box>


                    :
                    <>
                      <Button className={`${classes.button} red`} onClick={openAuth}>
                        Sign In
                      </Button>
                    </>
                }

              </li>

              <li className={classes.listItem}>
                <CreateMenu isAuthed={user.isAuth} className={classes.button} handlerClick={openAuth}/>
              </li>
            </ul>
        }
      </Box>
    )
  }
)