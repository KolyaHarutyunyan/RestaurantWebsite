import { memo, useContext } from "react";
import { Box, Button } from "@material-ui/core"
import { CreateMenu, useHeaderStyles } from "."
import { SVGNames } from "@eachbase/constants"
import { Icon } from "@eachbase/components"
import { ModalContext } from "@eachbase/context";







export const Navbar = memo(
  ( {toggle, isMobile, user, status} ) => {
    let classes = useHeaderStyles()


    // const dispatch = useDispatch()

    // let handlerClick = (formData)=>{
    //   dipatch(authActions.signUp(formData))
    // }
    


    let {openModal} = useContext(ModalContext)
    let openAuth = () => openModal.auth()



    let openAvatar = () => openModal.avatar({type:"userAvatar"})

    let handlerClick = () => {
    }

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
                  user.fullName
                    ?
                    <Box className={classes.userButtonContainer}>
                      <Button
                        onClick={toggle}
                        className={classes.userButton + ( status ? " rotated" : "" )}
                      >
                        <Icon name={SVGNames.User}/>
                        {user.fullName}
                        <Icon name={SVGNames.DownArrow}/>
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
                <CreateMenu isAuthed={!!user.fullName} className={classes.button} handlerClick={openAuth}/>
              </li>
            </ul>
        }
      </Box>
    )
  }
)