import { memo } from "react"
import { AppBar, Grid } from "@material-ui/core";
import { useStyles } from "./style";
import Link from "next/link";
import header from "../../../cms/header.json"

export const Header = memo(
  ()=>{
    const classes = useStyles();

    return(
      <AppBar className={classes.header}>
        <Grid component="nav" container>

        </Grid>
      </AppBar>
    )
  }
)