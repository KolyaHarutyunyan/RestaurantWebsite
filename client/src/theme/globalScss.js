import { createGlobalStyle } from "styled-components";
import { media } from "./media";
import { colors } from "./colors";
export const GlobalScss = createGlobalStyle`
  body {
    -webkit-overflow-scrolling: touch !important;
  }
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
  }

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

    .breadcrumb{
        @media (min-width: 320px) {
            margin: 120px 0 24px 0;
        }
        @media (min-width: 768px) {
            margin: 120px 0 40px 0;
        }
        @media (min-width: 1279px) {
            margin: 120px 0 40px 0;
        }
        @media (min-width: 1919px) {
            margin: 120px 0 40px 0;
        }

        display: flex;
        align-items: center;
        margin:40px 0;


        a{
            font-family: Open Sans, sans-serif;
            font-weight: bold;
            font-size: 18px;
            color: #2B273C80;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
        svg{
            margin: -4px 4px 0 4px;
        }
        .bred-menu{
            font-family: Open Sans, sans-serif;
            font-weight: bold;
            font-size: 18px;
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }
    }

    .g-title {
        text-align: center;
        font-family: Poppins,sans-serif;
        line-height: 72px;
        font-size: 48px!important;
        @media (max-width: 767px) {
            line-height: 36px;
            font-size: 28px!important;
        }
    }
    .descr {
        text-align: center;
        font-family: Open Sans, sans-serif;
        line-height: 24px ;
        font-size: 16px;
        @media (min-width: 320px) {
            font-size: 14px;
            line-height:21px ;
            margin-top: 32px;
        }
        @media (min-width: 768px) {
            line-height: 24px ;
            font-size: 16px;
            margin-top: 23px;
        }
    }
    
`;
