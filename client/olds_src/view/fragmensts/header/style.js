import { Grid, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(( theme ) => ( {
  header: {
    background: "#fff",
    height: "80px",
    [ theme.breakpoints.down("xs") ]: {
      height: "60px",
    },
  },
  navbar: {
    justify: "space-between",
    alignItems: "center",
  },
  link: {
    color: "#2B273C",
    fontFamily: "'Poppins', 'sans-serif'",
    font: " normal normal 600 20px/30px Poppins",
    height: "60px",
    display: "flex",
    alignItems: "center",
    "& img": {
      height: "100%",
      marginRight: "16px",
    },
    [ theme.breakpoints.down('xs') ]: {
      height:"40px",
      font: "normal normal 600 16px/25px Poppins",
      "& img": {
        marginRight: "8px",
      },

    },
  }
} ))
