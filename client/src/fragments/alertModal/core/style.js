import { makeStyles } from "@material-ui/core";
import styled from "styled-components"
import { colors, media } from "../../../theme";

export const useAlertStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      width: '100%',
      margin: "20px",
      borderRadius: "8px",

      maxWidth: '468px',
      padding: "48px 40px",
      overflow: "hidden",
      [theme.breakpoints.down('lg')]: {
        maxWidth: '454px !important',
        padding: "32px 24px"
      },

      [theme.breakpoints.down('xs')]: {
        maxWidth: "unset",
        padding: "32px 16px"
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
    right: '8px',
    top: '8px',
    zIndex: 10000,
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
  box: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "flex-start",
    alignItems: "center",
    transition: "all 1s",
    opacity: 1,
    [theme.breakpoints.down('md')]: {
      maxWidth: '464px !important',

    },


    height: "100%",
    overflow: "hidden auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#9993",
      borderRadius: "5px",

    },
    "&::-webkit-scrollbar-thumb": {
      width: "10px",
      borderRadius: "10px",
      background: "linear-gradient(#9993,#4444,#9993)",
      transition: "all .5s",
      cursor: "pointer",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#4444"
    },
    "&:hover::-webkit-scrollbar-thumb": {
      background: "#4444"
    }
    // padding: "32px 16px",
  },




  submit: {
    width: "100%",
    height: "48px",
    marginRight:"8px",
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
  cancel: {
    width: "100%",
    height: "48px",
    marginLeft:"8px",
    font: "normal normal 600 16px/22px Open Sans",
    [theme.breakpoints.down('xs')]: {
      height: "42px",
      font: "normal normal 600 14px/19px Open Sans",

    },
    borderRadius: "25px",
    border: "0 !important",
    cursor: "pointer",
    marginTop: "16px",
    backgroundColor: colors.button.close,
    color: colors.text.primary,
    "&:hover": {
      backgroundColor: colors.button.close,
    },
    "&.brd8": {
      borderRadius: "8px",
    }
  },



}));

export const Styled = {
  Title: styled.div`
    font: normal normal bold 24px/35px Poppins;
    color:${colors.text.primary};
    width: 100%;
    text-align: center;
    ${media.forMobile`font: normal normal bold 16px/25px Poppins;`};
  `,
  Description: styled.div`
    font: normal normal normal 16px/24px Open Sans;
    color:${colors.text.primary};
    width: 100%;
    ${media.forMobile`font: normal normal normal 14px/21px Open Sans;`};
    margin-top: ${props=>props.one ?14:32 }px;
    
    ${media.downToLargeDesktop`margin-top: ${props=>props.one ?14:24 }px;`};
  `,
  Actions: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    ${media.downToLargeDesktop`margin-top: 16px;`};


  `

}