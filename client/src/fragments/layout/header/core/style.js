import { makeStyles } from "@material-ui/core";
import { colors } from "@eachbase/theme";
export const useHeaderStyles = makeStyles((theme) => ({
  header: {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0 100px",
    color: theme.palette.text.primary,
    height: "80px",
    [theme.breakpoints.down("md")]: {
      padding: "0 42px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      padding: "0 16px",
    },
  },
  headerSpace: {
    height: "80px",
    [theme.breakpoints.down("md")]: {
      padding: "0 42px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 40px",
    },
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
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
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginLeft: "32px",
  },
  button: {
    width: "160px",
    border: "1px solid " + theme.palette.text.primary,
    borderRadius: "24px",
    textAlign: "center",
    display: "block",
    height: "42px",
    lineHeight: "40px",
    padding: 0,
    color: theme.palette.text.primary,
    font: "normal normal 600 16px/22px Open Sans",
    "&.red": {
      color: "#fff",
      backgroundColor: theme.palette.primary.main,
      border: "none",
    },
  },
  userButton: {
    "& svg": {
      margin: "0 8px",
      transition: "all .5s",
    },
    "& svg.icon-DownArrow": {
      transform: "rotate(180deg)",
    },
    "&.rotated svg.icon-DownArrow": {
      transform: "rotate(0deg)",
    },
  },
  userButtonContainer: {
    position: "relative",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  dropdownMenu: {
    opacity: 0,
    visibility: "hidden",
    position: "absolute",
    height: 0,
    zIndex: 10,
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
    },
  },
  dropdownMenuItem: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    height: "48px",
    alignItems: "center",
    justifyContent: "flex-start",
    color: theme.palette.text.primary,
    font: "normal normal normal 16px/22px Open Sans",
    "& .link-item": {
      flex: "0 0 48px",
      justifyContent: "center",
    },
    "& svg": {
      flex: "0 0 48px",
      margin: "0 6px",
      alignSelf: "flex-end",
      width: "100%",
      height: "34px",
      fill: theme.palette.text.primary,
    },
  },
  dropdownMenuItemHover: {
    "&:hover": {
      color: theme.palette.primary.contrastText,

      "& svg": {
        fill: theme.palette.primary.contrastText,
      },
      backgroundColor: theme.palette.primary.main,
    },
  },
  toggleMenuBtn: {
    "& svg": {
      fontSize: "40px",
      color: colors.primary,
    },
  },
  toggleMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    gap: "20px",
    width: "250px",
    height: "100%",
    background:
      "transparent linear-gradient(180deg, #FFFFFF 0%, #F3F3F3DF 53%, #E3E3E3B3 100%) 0% 0% no-repeat padding-box;",
    top: "0",
    right: "-250px !important",
    marginTop: "60px",
    paddingTop: "20px",
    transition: "right .3s ease-in-out",
    "&.opened": {
      right: "0px !important",
    },
  },
}));
