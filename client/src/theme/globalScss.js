import { createGlobalStyle } from "styled-components";
import { media } from "./media";
import { colors } from "./colors";
export const GlobalScss = createGlobalStyle`
    .element::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 0;
        height: 0;
    }
    
  .hide-scroll{
    overflow: hidden;
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none; 
  }
  .container {
    width: 100%;
    overflow-x: visible;
    ${media.forLargeDesktop`
      margin: 0 auto;
      max-width: 1600px;
    `};
    ${media.forDesktop`
      margin: 0 auto;
      // max-width: 1240px;
         padding:0 40px;
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
  .container-hero {
    width: 100%;
    overflow-x: visible;
    ${media.forLargeDesktop`
      margin: 0 auto;
      max-width: 100%;
    `};
    ${media.forDesktop`
      margin: 0 auto;
      max-width: 100%;
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
    margin: 14px 0 0 0;
    background-color: ${colors.text};
    font-size: 14px;
    &::before {
      font-weight: bold;
      position: absolute;
      content: "OR";
      left: calc(50% - (70px /2));
      top: -10px;
      background: white;
      width: 70px;
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`;
