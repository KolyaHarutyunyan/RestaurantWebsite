import { createGlobalStyle } from "styled-components";
import { breakPoints } from "./breakPoints";
export const Font = createGlobalStyle`
  html {
    font-family: Poppins, sans-serif;
    font-size: 18px;
    @media ${breakPoints.mobile} {
    font-size: 12px;
    }
    @media ${breakPoints.tablet} {
      font-size: 14px;
    }
    @media ${breakPoints.tabletWide} {
      font-size: 16px;
    }
  }
`;
