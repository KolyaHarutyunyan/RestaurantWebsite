import { Grid, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(( theme ) => ( {
  footer: {
    background: "#333",

    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    height: "80px",
    padding: "0 100px",
    [ theme.breakpoints.down("md") ]: {
      padding: "0 42px",
    },
    [ theme.breakpoints.down("sm") ]: {
      padding: "0 40px",
    },
    [ theme.breakpoints.down("xs") ]: {
      height: "60px",
      padding: "0 16px",
    },
  },
  navbar: {
    justify: "space-between",
    alignItems: "center",
    width:"fit-content",
  },
  logo: {
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
