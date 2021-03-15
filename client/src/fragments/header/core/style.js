import { Grid, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(( theme ) => ( {
  header: {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
    padding: "0 100px",
    color:theme.palette.text.primary,
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
    width: "fit-content",
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
      height: "40px",
      font: "normal normal 600 16px/25px Poppins",
      "& img": {
        marginRight: "8px",
      },

    },
  },
  menu: {
    padding: 0,
    margin: 0,
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '32px',
  },
  button: {
    width:"160px",
    border: "1px solid "+theme.palette.text.primary,
    borderRadius: "24px",
    textAlign:"center",
    height:"42px",
    lineHeight:"40px",
    color:theme.palette.text.primary,
    font: "normal normal 600 16px/22px Open Sans",
    "&.red":{
      color:"#fff",
      backgroundColor:theme.palette.primary.main,
      border:"none",
    }
  },
  userButton:{
    "& svg":{
      margin: "0 8px",
      transition:"all .5s"

    },
    "&.rotated svg.icon-arrowDown":{
      transform:"rotateZ(180deg)",
    }
  },
  toggleMenu:{

  }
} ))
