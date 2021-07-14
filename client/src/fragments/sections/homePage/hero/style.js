import styled from "styled-components";
import { media } from "@eachbase/theme";
export const Container = styled.section`
  background: transparent
    linear-gradient(180deg, #80808033 0%, #e8e8e899 41%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //padding: 60px 0 0 0;
    
    @media only screen and (max-width: 1280px) {
      flex-direction: column;
    } 
    @media only screen and (max-width: 768px) {
           padding: 60px 16px 0 16px;
    }
    
    .content {
      max-width: 520px;
      margin-right: 80px;
      @media only screen and (max-width: 768px) {
        margin-right: 0 !important;
      }
      flex: 1;
      
      .title {
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 48px;
        
        @media (max-width: 768px) {
           font-size: 24px;
        }
        
        margin-bottom: 5px;
        @media (max-width: 1600px) and (min-width: 768px) {
          margin-top: 72px;
        }
      }
      .description {
        font-family: Open Sans, sans-serif;
        font-size: 20px;
        line-height: 30px;
        margin: 32px 0 64px 0;
        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 24px;
          margin-top: 16 0 32px 0px;
        }
        @media (max-width: 1919px) {
          margin: 24px 0 48px 0;
        }
      }
      button {
        width: 232px;
        @media (max-width: 768px) {
          width: 217px;
        }
        //margin-top: 77px;
        //@media (max-width: 1600px) and (min-width: 768px) {
        //  margin-top: 48px;
        //}
      }
    }
    .image-wrapper {
      flex: 3;
      display: flex;
      justify-content: flex-end;
      height: 757px;
      max-width: 1180px;
      @media (max-width: 1280px) {
        max-width: 100%;
        height: 430px;
      }
      @media (max-width: 1600px) and (min-width: 768px) {
        max-width: 620px;
        height: 387px;
      }
      @media (max-width: 1280px) {
        width: 100%;
        flex: 0 0 430px;
      }
      .image {
        margin-top: 20px;
        max-width: 1141px;
        @media (max-width: 1280px) {
          margin-top: 76px;
        }
      }
    }
  }
`;
