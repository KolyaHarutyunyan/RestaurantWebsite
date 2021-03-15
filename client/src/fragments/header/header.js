import { memo } from "react"
import { AppBar  } from "@material-ui/core"
import { useStyles, Logo,  RightContent } from "./core"

export const Header = memo(
  () => {
    const classes = useStyles();

    return (
      <AppBar className={classes.header}>
        <Logo className={classes.logo}/>
        <RightContent className={classes.navbar}/>
      </AppBar>
    )
  }
)