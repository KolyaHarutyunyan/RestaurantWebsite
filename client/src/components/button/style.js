import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { colors, media } from "@eachbase/theme";

export const CommonButtonContainer = styled.button`
  min-width: 200px;
  height: 48px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 24px;
  font: normal normal 600 16px/22px Open Sans;
`;

export const useBtnStyles = makeStyles((theme) => ({
  accept: {
    width: "100%",
    height: "48px",
    font: "normal normal 600 16px/22px Open Sans",
    [theme.breakpoints.down("xs")]: {
      height: "42px",
      font: "normal normal 600 14px/19px Open Sans",
    },
    borderRadius: "25px",
    border: "0 !important",
    cursor: "pointer",

    backgroundColor: theme.palette.primary.main,
    color: "#FFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },

  cancel: {
    width: "100%",
    height: "48px",
    font: "normal normal 600 16px/22px Open Sans",
    [theme.breakpoints.down("xs")]: {
      height: "42px",
      font: "normal normal 600 14px/19px Open Sans",
    },
    borderRadius: "25px",
    border: "0 !important",
    cursor: "pointer",

    backgroundColor: colors.text + "1A",
    color: colors.text,
    "&:hover": {
      backgroundColor: colors.text + "1A",
    },
  },
}));

export const Styled = {
  ActionBtn: styled.button`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: flex-start;
    font: normal normal normal 14px/21px Open Sans;
    color: ${(props) => (props.remove ? colors.primary : colors.action)};

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
  `,
};
