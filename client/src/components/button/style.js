import { makeStyles } from "@material-ui/core";

export const useBtnStyles = makeStyles((theme) => ({


  accept: {
    width: "100%",
    height: "48px",
    font: "normal normal 600 16px/22px Open Sans",
    [theme.breakpoints.down('xs')]: {
      height: "42px",
      font: "normal normal 600 14px/19px Open Sans",

    },
    borderRadius: "25px",
    border: "0 !important",
    cursor: "pointer",
    marginTop: "16px",
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&.brd8": {
      borderRadius: "8px",
    }
  },



}));