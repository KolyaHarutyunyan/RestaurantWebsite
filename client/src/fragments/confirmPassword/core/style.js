import styled from "styled-components";
import { colors, media } from "../../../theme";

export const Styled = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0 auto 16px;
    max-width: 628px;
    padding: 0 16px;
    ${media.downToLargeDesktop`max-width: 546px;`}
    .icon-Logo {
      width: 80px;
      height: 80px;
      margin-top: 80px;
      margin-bottom: 32px;
      ${media.downToLargeDesktop`
        margin-top:64px;      
        margin-bottom: 16px;

      `};
      ${media.forMobile`
        width: 60px; 
        height: 60px;
        margin-top:48px;
        margin-bottom:0;
   `};
    }
  `,
  Block: styled.div`
    box-shadow: 0 0 6px #0000001a;
    border-radius: 8px;
    background-color: ${colors.bg.primary};
    margin-top: 40px;
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 32px 48px 64px;
    ${media.downToLargeDesktop`padding: 16px 32px 48px;`};
    ${media.forMobile`padding: 16px 16px 32px;`}
  `,
  BlockDescription: styled.p`
    align-self: flex-start;
    margin-top: 16px;
    width: 100%;
    text-align: center;
    font: normal normal 600 18px/24px Open Sans;
    color: ${colors.text};
  `,
};
