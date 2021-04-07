import styled from "styled-components"
import { media } from "./media";

export const STYLED = {
  Container:styled.div`
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
    
    ${props=>props.main && media.forMobile`margin-top:60px` + media.upToMobile`margin-top:80px`}
  `


}