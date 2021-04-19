
import styled from "styled-components"
import { colors, media } from "@eachbase/theme";



export const Styled = {
  Footer: styled.div`
    width: 100%;
    color: ${colors.white};
    background-color: ${colors.primary};
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
      padding: 16px 0;
      .infos{
        text-align: center;
        order: 1;
        hr{
          height: 32px;
          margin: 0 15px;
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
      color: ${colors.white};
      margin-left: 8px;
      font: normal normal 600 16px/25px Poppins;
    }
  `,

}