import { createGlobalStyle } from "styled-components";
import { media } from "@eachbase/theme";
export const GlobalScss = createGlobalStyle`
  .container {
    width: 100%;
    ${media.forLargeDesktop`
      margin: 0 auto;
      max-width: 1400px;
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
    overflow: auto;
  }
  .toggle-header-menu {
    display: none;
    @media only screen and (max-width: 768px){
      display: flex;
    }
  }
`;
