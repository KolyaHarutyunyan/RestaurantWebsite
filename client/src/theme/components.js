import styled from "styled-components";
import { media } from "./media";

export const STYLED = {
  Main: styled.div`
    width: 100%;
    height: calc(100% - 80px);
    ${media.forMobile`
      height: calc(100% - 60px)
    `};
    overflow: auto;
  `,
  Container: styled.div`
    width: 100%;
    ${media.forLargeDesktop`
      padding:0 100px ;
    `};
    ${media.forDesktop`
      padding:0 42px ;
    `};
    ${media.forTablet`
      padding:0 40px;
    `};
    ${media.forMobile`
      padding:0 16px;
    `};
    overflow: auto;
  `,
};
