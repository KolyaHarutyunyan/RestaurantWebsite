import { createGlobalStyle } from "styled-components";
import { media } from "./media";
import { colors } from "./colors";
export const GlobalScss = createGlobalStyle`
  .container {
    width: 100%;
    overflow-x: visible;
    ${media.forLargeDesktop`
      margin: 0 auto;
      max-width: 1600px;
    `};
    ${media.forDesktop`
      margin: 0 auto;
      max-width: 1240px;
    `};
    ${media.forTablet`
      padding:0 40px;
    `};
    ${media.forMobile`
      padding:0 16px;
    `};
  }
  .container-mini {
    width: 100%;
    overflow-x: visible;
    ${media.forLargeDesktop`
      margin: 0 auto;
      max-width: 1500px;
    `};
    ${media.forDesktop`
      margin: 0 auto;
      max-width: 1140px;
    `};
    ${media.forTablet`
      padding:0 40px;
    `};
    ${media.forMobile`
      padding:0 16px;
    `};
  }


  /* CASTIL */
  .toggle-header-menu {
    display: none;
    @media only screen and (max-width: 768px){
      display: flex;
    }
  }
  /* [CASTIL-END] */

  .divider-or {
    position: relative;
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background-color: ${colors.text};
    &::before {
      position: absolute;
      content: "OR";
      left: calc(50% - (60px /2));
      top: -10px;
      background: white;
      width: 60px;
      text-align: center;
    }
  }
`;
