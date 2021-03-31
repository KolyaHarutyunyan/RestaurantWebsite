import { Box, Button } from "@material-ui/core"
import { pageLinks, useHeaderStyles, CreateMenu } from "."
import Link from "next/link"
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"

export const Menus =
  ( {status, type, user} ) => {
    console.log(status, type, user)
    let classes = useHeaderStyles()
    let className = ( type ? classes.toggleMenu : classes.dropdownMenu ) + ( status ? " opened" : "" )

    return (
      <>
        <Box className={className}>
          {
            !user.id && <Button className={classes.button + " red"}>Sign In</Button>
          }
          {
            type && <CreateMenu isAuthed={user.id} className={classes.button} handlerClick={() => {
            }}/>
          }

          {
            user.id && <>
              {
                type && <Box>
                  <Icon name={SVGNames.User}/>
                  {user.fullName}
                </Box>
              }

              {
                pageLinks.map(( item, i ) =>
                  <Link href={item.url} key={i}>
                    <a className={classes.dropdownMenuItem}>
                      <Icon name={item.icon}/>
                      {item.title}
                    </a>
                  </Link>
                )
              }
              <button className={classes.dropdownMenuItem}>

                <Icon name={SVGNames.LogOut}/>
                Sign Up

              </button>
            </>
          }
        </Box>
      </>
    )
  }
