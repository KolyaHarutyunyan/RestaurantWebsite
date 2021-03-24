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
export const InputBlock = styled.div`
  display: flex;
  margin-top: ${props => props.mt || 16}px;
  align-items: center;
  padding: 9px 16px;
  width: ${props => props.w !== undefined ? props.w : '100%'};
  height: ${props => props.h || '42'}px;
  border-radius: ${props => props.brd !== undefined ? props.brd : 25}px;
  border: 1px solid #2B273C80;
  ${props => props.brdType !== undefined ? `border-style : ${props.brdType}` : ""};
  overflow: hidden;
  @media (min-width: 768px) {
    height: ${props => props.h || '48'}px;
    padding: 12px 16px;

  }
  background-color: #fff;
  transition: all .5s;

  &:hover {
    border: 1px solid #2B273C;
  }

  &.focused {
    border: 2px solid #2B273C;
  }

  &.disabled {
    border: 1px solid #2B273C80;
  }

  &.error {
    border: 2px solid #FF453A;
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    &.important:after {
      content: '*';
      position: absolute;
      width: 20px;
      color: #FF453A;
      height: 20px;
      display: block;
      z-index: 10000;
      top: 0;
      left: 200px
    }
  }
`

export const InputBlockIcon = styled.div`
  width: ${props => props.size !== undefined ? props.size : '24'}px;
  height: ${props => props.size !== undefined ? props.size : '24'}px;
  border-radius: ${props => props.brd || 0}px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Input = styled.input`
  display: block;
  height: 100%;
  margin-left: 8px;
  width: calc(100% - ${props => props.w !== undefined ? props.w : '34'}px);
  line-height: 100%;
  font-size: ${props => props.fs || 14}px;
  @media (min-width: 768px) {

    font-size: ${props => props.fsb || props.fs || 16}px;

  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: #FFFFFF !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: unset !important;
  }

  position: relative;
  outline: none;
  border: 0;


  &:after {
    content: '*';
    position: absolute;
    color: ${theme.palette.primary.main};
  }

`

export const InputTitle = styled.p`
  display: block;
  margin-bottom: -8px;
  font: normal normal 600 14px/21px Open Sans;

`
export const InputDescription = styled.p`
  display: block;
  margin: 8px 0 8px 16px;
  font: normal normal normal 12px/17px Open Sans;
`
export const TextArea = styled.textarea`
  font: normal normal normal 14px/19px Open Sans;
  resize: none;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
`


export const ErrorMessage = styled.p`
  width: fit-content;
  background-color: #fff;
  text-align: left;
  margin: 6px 0 0 48px;
  line-height: 17px;
  color: #FF453A;
  padding: 0 10px;
  display: block;
  font-size: 12px !important;

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
  ${({mt}) => mt && `margin-top: ${mt}px`}; 
  span {
    width: 100%;
    text-align: center;
    color: ${theme.palette.action.main};
    display: block;
  }
`