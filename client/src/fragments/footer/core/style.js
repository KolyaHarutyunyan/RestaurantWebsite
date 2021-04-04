import { Grid, makeStyles } from "@material-ui/core"
import styled from "styled-components"
import { colors, media } from "../../../theme";

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#333",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "80px",
    padding: "0 100px",
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
    [theme.breakpoints.down('xs')]: {
      height: "40px",
      font: "normal normal 600 16px/25px Poppins",
      "& img": {
        marginRight: "8px",
      },

    },
  }
}))

export const Styled = {
  Footer: styled.div`
    width: 100%;
    color: ${colors.text.white};
    background-color: ${colors.bg.active};
    height: 64px;
    ${media.forMobile`height:auto`};
    ${props => props.fix && `
      position: fixed;
      bottom: 0;
      left: 0;
    `};
  `,
  Content:styled.div`
    height: 64px;
    ${media.forMobile`height:auto;`};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    ${media.forMobile`
      flex-direction: column;
      padding: 16px;
      .infos{
        text-align: center;
        order: 1;
        hr{
          height: 32px;
        }
      }
      .copyRight{
        order:2;
        margin-top: 16px;
      }
      `};
  `,

  CopyRight:styled.div``,
  Infos:styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      color: ${colors.white};
      
    }
    hr{
      display: inline-block;
      margin: 0 22px;
      height: 40px;
      width: 1px;
      color: ${colors.white}80;
    }
  `,
  Logo:styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.downToDesktop`display:none`};
    p{
      margin-left: 8px;
      font: normal normal 600 16px/25px Poppins;
    }
  `,

}