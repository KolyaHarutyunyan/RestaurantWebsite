import styled from "styled-components"
import { colors, media } from "@eachbase/theme";
import { makeStyles } from "@material-ui/core";






export const Styled = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    max-width: 628px;
    padding: 0 16px;
    ${media.downToLargeDesktop`max-width: 546px;`}
     
    
  `,
  Title: styled.p`
    width: 100%;
    text-align: center;
    font: normal normal bold 48px/72px Poppins;
    color: ${colors.text.primary};
    margin-bottom: 32px;
    ${media.downToLargeDesktop`
      font: normal normal bold 48px/72px Poppins;
      margin-bottom:16px
      `};
    ${media.forMobile`
      font: normal normal bold 24px/35px Poppins;
      margin-bottom:8px
      `}
  `,
  Block: styled.div`
    box-shadow: 0 0 6px #0000001A;
    border-radius: 8px;
    background-color: ${colors.bg.primary};
    margin-top: 40px;
    min-height: 100px;
    width: 100%;
  `,
  RemoveBtn:styled.button`
    font: normal normal 600 16px/22px Open Sans;
    color: ${colors.button.primary};
    margin-top: 40px;
    ${media.downToLargeDesktop`margin-top: 32px;`};
    ${media.forMobile`margin-top: 24px;`}
  `,

}