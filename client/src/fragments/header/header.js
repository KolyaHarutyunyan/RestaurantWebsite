import { memo, useEffect, useState } from "react"
import { AppBar, Box } from "@material-ui/core"
import { useHeaderStyles, Logo, Menus } from "./core"
import { Navbar } from "./core/navbar";

let mobileWidth = 768
let user = {
  isAuth:true,
  fullName: "Vzgo Vzgov"
}

export const Header = memo(
  () => {
    const classes = useHeaderStyles()

    let [openedMenu, setOpenedMenu] = useState(false)
    let [isMobile,setIsMobile]= useState(false)

    const handleResize = () => setIsMobile(window.innerWidth < mobileWidth)

    useEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
      <>
        <AppBar className={classes.header}>
          <Logo className={classes.logo}/>
          <Navbar status={openedMenu} toggle={()=>setOpenedMenu(current=>!current)} type={isMobile} user={user}/>
        </AppBar>
         <Menus status={openedMenu} type={isMobile} user={user}/>
      </>
    )
  }
)