import styled from "styled-components"
import {   colors, media } from "@eachbase/theme"


export const Styled = {
  Title: styled.h1`
    width: 100%;
    text-align: center;
    font: normal normal bold 48px/72px Poppins;
    color: ${colors.text.primary};
    margin:0 0 32px;
    ${media.downToLargeDesktop`
      font: normal normal bold 48px/72px Poppins;
      margin-bottom:16px
      `};
    ${media.forMobile`
      font: normal normal bold 24px/35px Poppins;
      margin-bottom:8px
      `}
  `,
}