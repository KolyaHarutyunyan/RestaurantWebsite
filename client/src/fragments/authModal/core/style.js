import { makeStyles } from "@material-ui/core"
import styled from "styled-components"
import { theme } from "@eachbase/theme"

export const useAuthStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      width: '100%',

      margin: "20px",
      borderRadius: "32px",

      maxWidth: '548px !important',
      padding: "64px 8px 64px 48px",
      overflow: "hidden",
      [theme.breakpoints.down('md')]: {
        maxWidth: '464px !important',
        padding: "64px 8px 64px 32px"
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '464px !important',
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
    right: '16px',
    top: '16px',
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
  authBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 1s",
    opacity: 1,
    [theme.breakpoints.down('md')]: {
      maxWidth: '464px !important',
      paddingRight: "16px",
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: "0",
    },
    paddingRight: "32px",
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
  lineBtn: {
    color: theme.palette.action.main,
    "&:hover": {
      textDecoration: "underline",
      background: "unset"
    },
    "&.dark": {
      color: theme.palette.text.primary,
    },
    "&.mt24":{
      marginTop:"24px",
    },
    "&.mt16":{
      marginTop:"16px",
    }
  },
  backIcon: {
    width: '30px',
    height: '30px',
    position: 'absolute',
    left: '16px',
    top: '16px',
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
  }


}));

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;

  p {
    &.after, &.before {
      font: normal normal bold 24px/35px Poppins;
      margin: 0;

      @media (max-width: 768px) {
        font: normal normal bold 18px/27px Poppins;
      }

    }

    &.before {
      margin-top: 24px;
    }

    &.after {
      margin-bottom: 24px;
    }
  }

  .icon-Logo {
    width: 60px;
    height: 60px;
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`

export const FormBlock = styled.form`
  width: 100%;
`


export const Or = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 1px solid #2B273C;
  margin-top: ${props => props.mt || "24px"};

  p {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 0 32px;
    background-color: #fff;
  }
`
export const SocialBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 24px;

  p {
    margin: 0;
  }

  .icons {
    margin-top: 24px;

    display: flex;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: #fff;
      box-shadow: 0 0 12px #0000001A;
      margin: 0 12px;

    }

    svg {
      margin: 0 10px;
    }
  }
`

export const Description = styled.p`
  text-align: center;
 
  font: normal normal normal 16px/24px Open Sans;
  @media (max-width: 768px) {
    font: normal normal normal 14px/21px Open Sans;
  }
  margin: 0;
  color: ${props => props.red? theme.palette.primary.main:theme.palette.text.primary};

  margin-top: ${props  =>props.red? "16px": (props.mt ? ` ${props.mt}px`:"unset")}; 
  span {
    width: 100%;
    text-align: center;
    color: ${theme.palette.action.main};
    display: block;
  }
`