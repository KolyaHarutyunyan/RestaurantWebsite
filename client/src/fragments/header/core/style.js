import { makeStyles } from "@material-ui/core"

export const useHeaderStyles = makeStyles(( theme ) => ( {
  header: {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
    padding: "0 100px",
    color: theme.palette.text.primary,
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
    width: "160px",
    border: "1px solid " + theme.palette.text.primary,
    borderRadius: "24px",
    textAlign: "center",
    display:"block",
    height: "42px",
    lineHeight: "40px",
    padding:0,
    color: theme.palette.text.primary,
    font: "normal normal 600 16px/22px Open Sans",
    "&.red": {
      color: "#fff",
      backgroundColor: theme.palette.primary.main,
      border: "none",
    }
  },
  userButton: {
    "& svg": {
      margin: "0 8px",
      transition: "all .5s",

    },
    "& svg.icon-arrowDown": {
      transform: "rotateZ(180deg)",
    },
    "&.rotated svg.icon-arrowDown": {
      transform: "rotateZ(0)",
    }
  },
  userButtonContainer: {
    position: "relative",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "column"
  },
  dropdownMenu: {
    opacity: 0,
    visibility: "hidden",
    transition: "all .5s ",
    position: "absolute",
    height: 0,
    top: "88px",
    width: "264px",
    left: "0",
    display: "block",
    overflow: "hidden",
    padding: "6px 0 ",
    "&.opened": {
      opacity: 1,
      borderRadius: "6px",
      height: "fit-content",
      visibility: "visible",
      backgroundColor: "#fff",
      boxShadow: "0 0 6px " + theme.palette.shadow.main,
    }
  },
  dropdownMenuItem: {
    width: "100%",
    display: "flex",
    height: "48px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    color: theme.palette.text.primary,
    font: "normal normal normal 16px/22px Open Sans",

    "& svg": {
      margin: "0 6px",
      fill: theme.palette.text.primary,
    },
    "&:hover": {
      color: theme.palette.primary.contrastText,

      "& svg": {
        fill: theme.palette.primary.contrastText,
      },
      backgroundColor: theme.palette.primary.main,
    },
  },
  toggleMenuBtn: {
    "&.opened svg ": {
      "& .ToggleMenuIcon_svg__close": {opacity: 0},
      "& .ToggleMenuIcon_svg__open": {opacity: 1}
    },
    "& svg": {
      "& > *": {transition: "all .5s"},
      "& .ToggleMenuIcon_svg__open": {opacity: 0},
      "& .ToggleMenuIcon_svg__close": {opacity: 1}
    }

  },
  toggleMenu: {
    position: "absolute",
    width: "200px",
    height: "100vh",
    background: "transparent linear-gradient(180deg, #FFFFFF 0%, #F3F3F3DF 53%, #E3E3E3B3 100%) 0% 0% no-repeat padding-box;",
    top: "0",
    right:"-100%",
    padding:"60px 0",
    transition: "all .5s",
    "&.opened":{
      right:"0",

    }

  }

} ))
