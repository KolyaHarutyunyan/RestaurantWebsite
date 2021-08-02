import styled from "styled-components";

export const Container = styled.div`


  @media (min-width: 320px) {
    margin-top: 112px;
  }
  @media (min-width: 768px) {
    margin-top: 128px;
  }
  @media (min-width: 1279px) {
    margin-top: 64px;
  }
  @media (min-width: 1920px) {
    margin-top: 130px;
  }
  
  
  margin-top: calc(130px * 2);
 
  .g-title {
    font-family: Poppins,sans-serif;
    line-height: 72px;
    font-size: 48px;
    @media (max-width: 767px) {
      line-height: 36px;
      font-size: 24px;
      margin-bottom: 32px;
    }
    text-align: center;
    margin-bottom: 72px;
  }
  .title{
    font-family: Poppins,sans-serif;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .content{
    text-align: center;
    font-family: Open Sans, sans-serif;
    line-height: 24px;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
   
  }
  @media (min-width: 320px) {
    margin-bottom: 80px;
  }
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
 @media (min-width: 1279px) {
    margin-bottom: 128px;
  } 
  @media (min-width: 1920px) {
    margin-bottom: 160px;
  }
  
  ul {
    display: flex;
    @media (max-width: 1279px) {
      flex-direction: column;
      max-width: 688px;
      text-align: center;
    }
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1500px;
    gap: 100px;
    @media (max-width: 768px) {
      gap: 46px;
    }
    @media (max-width: 1279px) {
      gap: 64px;
    }
    li {
      flex: 1;
      list-style-type: none!important;
      .image {
        width: 100%;
        height: 200px;
        @media (max-width: 1279px) {
          max-width: 356px;
          height: 172px;
        }
      }
      height: 100%;
      p:first-of-type {
        text-align: center;
        margin-top: 24px;
        margin-bottom: 16px;
      }
    }
  }
`;
