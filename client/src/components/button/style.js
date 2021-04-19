import { makeStyles } from "@material-ui/core"
import styled from "styled-components"
import { colors, media } from "@eachbase/theme"

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



export const Styled = {
  ActionBtn:styled.button`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: flex-start;
    font: normal normal normal 14px/21px Open Sans;
    color: ${props => props.remove ? colors.primary : colors.action};
  
    .icon {
      width: 24px;
      height: 24px;
      ${media.forMobile`
        width: 18px;
        height: 18px;
      `};
    }
  
    .btnTitle {
      margin-left: 8px;
      ${media.forMobile`display:none`};
    }

  `
}