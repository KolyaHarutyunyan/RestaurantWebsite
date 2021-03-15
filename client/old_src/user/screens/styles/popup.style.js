import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(( theme ) => ( {
  dialog: {
    '& .MuiDialog-paper': {
      width: '100%',
      padding: 0,
      margin: "20px",
      borderRadius: "32px",
      [ theme.breakpoints.up('lg') ]: {
        maxWidth: '548px !important',
      },
      [ theme.breakpoints.down('lg') ]: {
        maxWidth: '464px !important',
      },


      '& .MuiDialogContent-root': {
        padding: 0,
        display: 'flex',
      },
      '& .MuiDialogActions-root': {
        position: 'absolute',
        bottom: 0,
        right: 0,
      },
      '& .MuiBox-root': {
        margin: 0
      }
    },
  },
  closeIcon: {
    width: '30px',
    height: '30px',
    position: 'absolute',
    right: '16px',
    top: '16px',
    zIndex:10000,
    padding: 0,
    backgroundColor: '#2B273C1A',
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: '#2B273C1A',
    },
    '& .MuiSvgIcon-root': {
      width: '16px',
      height: '16px',
    }
  },
  authBox: {

    "&.active": {
      display: "flex",
      // backgroundColor: "#4444",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 1s",
      opacity: 1,
      width: "100%",
      padding:"32px 16px",

    },
    "&.disabled": {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    }
  },


} ));