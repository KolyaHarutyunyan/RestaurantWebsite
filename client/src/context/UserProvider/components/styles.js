import { makeStyles } from '@material-ui/core/styles';


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



  // for form builder
  form: {
    position: 'relative',
  },
  fieldsGroup: {
    width: '100%',
    marginRight: '16px',
  },
  inputWrapper: {
    position: 'relative',
    '& > div': {
      position: 'relative',
    },
    '& .icon-wrapper': {
      height: '100%',
      width: '20px',
      position: 'absolute',
      '& svg': {
        width: '20px',
        height: '20px',
        marginTop: '12.5px',
        marginLeft: '20px',
        fill: theme.palette.primary.main,
      },
    },
  },
  fieldStyles: {
    width: '100%',
    marginTop: 0,
    marginBottom: '16px',
    '& label': {
      display: 'none',
      color: '#545F7EB3',
    },
    '& .MuiInputBase-root': {
      borderRadius: '24px',
      paddingRight: '0',
      '& .MuiInputAdornment-positionEnd': {
        display: 'none',
      },
      '& input.MuiInputBase-input::placeholder, textarea.MuiInputBase-input::placeholder': {
        opacity: '1 !important',
        color: `${theme.palette.text.hint}`,
      },
      '& input': {
        padding: '14.5px 14px',
        paddingLeft: '52px',
        [theme.breakpoints.down('xs')]: {
          padding: '12.7px 14px',
        },
      },
      '& fieldset': {
        paddingLeft: '46px',
        borderColor: theme.palette.primary.main,
        borderWidth: '0.5px',
        top:0,
        height:"100%"
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: '1px',
      },
    },
    '& fieldset legend': {
      display: 'none',
    },
    '& .MuiInputLabel-asterisk': {
      color: '#545F7EB3',
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px !important',
      },
      ' &::after': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px !important',
      },
    },
  },
} ));
