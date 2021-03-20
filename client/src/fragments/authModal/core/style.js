import { makeStyles } from "@material-ui/core"
import styled from "styled-components"
import {theme} from "@eachbase/theme"

export const useAuthStyles = makeStyles(( theme ) => ( {
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
    width: "100%",
    padding: "32px 16px",
  },
  submit: {
    width: "100%",
    height: "48px",
    borderRadius: "25px",
    border: "0 !important",
    cursor: "pointer",
    marginTop: "16px",
    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "&.brd8":{
      borderRadius: "8px",
    }
  },
  lineBtn: {
    color: theme.palette.action.main,
    marginTop: "24px",

  }


} ));

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;

  p {
    &.after, &.before {
      margin: 0;
      font-size: 22px;
      @media (max-width: 768px) {
        font-size: 18px;
      }
      font-family: 'Poppins', sans-serif;
    }

    &.before {
      margin-top: 24px;
    }
  }

  .icon-logo {
    margin: 24px 0 0;
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
  padding: 0 16px;
  width: ${props => props.w !== undefined ? props.w : '100%'};
  height: ${props => props.h !== undefined ? props.h : '42'}px;
  border-radius: ${props => props.brd !== undefined ? props.brd : 25}px;
  border: 1px solid #2B273C80;

  @media (min-width: 768px) {
    height: ${props => props.h !== undefined ? props.h : '48'}px;
   

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
    border: 1px solid #FF453A;
  }

  .content {
    height: 24px;
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
  
  //&::placeholder:after,
  //&::-webkit-input-placeholder:after,
  //&:-moz-placeholder:after,
  //&::-moz-placeholder:after,
  //&:-ms-input-placeholder:after ,
  &:after {
    content:'*';
    position: absolute;
    color: ${theme.palette.primary.main};
  }
  // ::placeholder:after{
  //   content: "*";
  //   /* Chrome, Firefox, Opera, Safari 10.1+ */
  //   color: ${theme.palette.primary.main};
  //   opacity: 0.5; /* Firefox */
  // }
`
export const ErrorMessage = styled.p`
  width: fit-content;
  background-color: #fff;
  text-align: left;
  margin: -10px 0 0 50px;
  height: 20px;
  line-height: 20px;
  color: #FF453A;
  padding: 0 10px;
  font-size: 10px;
  display: block;
  @media (min-width: 768px) {
    font-size: 12px !important;
  }
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