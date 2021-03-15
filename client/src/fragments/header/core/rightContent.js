import { memo, useEffect, useState } from "react"
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import { Menu } from "./menu";

let mobileWidth = 768

export const RightContent = memo(
  () => {
    let classes = useStyles()
    let [isMobile, setIsMobile] = useState(false)

    const handleResize = () => setIsMobile(window.innerWidth < mobileWidth)

    useEffect(() => {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])


    return (
      <Grid component="nav" container className={classes.navbar}>
        {
          isMobile
            ? <></>
            : <Menu/>
        }

      </Grid>
    )
  })