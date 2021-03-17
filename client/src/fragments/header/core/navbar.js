import { memo } from "react";
import { Box, Button } from "@material-ui/core"
import { CreateMenu, useHeaderStyles } from "."
import {  SVGNames } from "@eachbase/constants"
import { Icon } from "@eachbase/components"


export const Navbar = memo(
  ( {toggle, type, user,status} ) => {
    let classes = useHeaderStyles()
    let openAuth = () => { }

    let handlerClick = ()=>{}
    return (
      <Box>
        {
          type
            ? <>
              <Button onClick={toggle} className={classes.toggleMenuBtn +(status?" opened":"")}>
                <Icon name={SVGNames.toggleMenu}/>
              </Button>
            </>
            : <ul className={classes.menu}>
              <li className={classes.listItem}>
                {
                  user.isAuth
                    ? <Box className={classes.userButtonContainer}>
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
                      <Button className={`${classes.button} red`} onClick={handlerClick}>
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