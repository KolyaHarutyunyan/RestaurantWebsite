import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 76px;
  width: 100%;
  
  
  @media (min-width: 320px) {
    margin: 67px 0;
  }
  @media (min-width: 768px) {
    margin: 128px 0;
  }
  @media (min-width: 1279px) {
    margin: 128px 0;
  }
  @media (min-width: 1920px) {
    margin: 160px 0;
  }
  
  .line:first-child {
    width: 15%;
    background-color: ${colors.primary};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .image {
    @media (min-width: 320px) {
      margin: 0 24px;
    }
    @media (min-width: 768px) {
      margin: 0 48px;
    }
    @media (min-width: 1279px) {
      margin: 0 48px;
    }
    @media (min-width: 1920px) {
      margin: 0 56px;
    }
   
  }
  .line:last-child {
    display: flex;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 75%;
    background-color: ${colors.primary};

    @media (min-width: 320px) {
      padding-left: 17px;
    }
    @media (min-width: 768px) {
      padding-left: 48px;
    }
    @media (min-width: 1279px) {
      padding-left: 64px;
    }
    @media (min-width: 1920px) {
      padding-left: 80px;
    }
  }
  
  .qr-text{
    font-family: Poppins, sans-serif;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .qr-image{
   img {
     width: 100px;
     height: 100px;
     margin-top: -11px;
     @media (max-width: 767px) {
       width: 70px;
       height: 70px;
       margin-top: 4px;
     }
   }
  }
`;
