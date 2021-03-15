import { memo } from "react"
import { useStyles } from "./style"
import { CreateMenuBtn } from "./createMenuBtn"
import { Button } from "@material-ui/core";
import { DropDown } from "./dropDown";

let isAuth = true
// let isAuth = false


export const Menu = memo(
  ( props ) => {
    let classes = useStyles()
    console.log("props from menu is: ", props)
    const openAuth = () => {
      if (!isAuth) {
        console.log("open Auth form ")
      }
    }
    return (
      <>
        <ul className={classes.menu}>
          <li className={classes.listItem}>
            <DropDown isAuthed={isAuth} handlerClick={openAuth}/>

          </li>

          <li className={classes.listItem}>
            <CreateMenuBtn
              className={classes.button}
              isAuthed={isAuth}
              handlerClick={openAuth}
            />
          </li>
        </ul>
      </>
    )
  }
)