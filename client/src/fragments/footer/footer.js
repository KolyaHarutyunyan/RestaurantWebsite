import { memo } from "react"
import { AppBar, Box, Grid } from "@material-ui/core"
import { useStyles } from "./style"


export const Footer = memo(
  () => {
    const classes = useStyles();

    return (
      <Box className={classes.footer}>

      </Box>
    )
  }
)