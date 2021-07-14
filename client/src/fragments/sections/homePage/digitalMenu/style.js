import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  //height: 720px;
  margin-bottom: 160px;
  @media only screen and (max-width: 1279px) {
    flex-direction: column-reverse;
    //margin-top: 400px;
  }
  .image.main {
    flex: 0 0 540px;
    @media (min-width: 320px) {
      width: 311px;
      max-height: 412px;
    }
    @media (min-width: 768px) {
      width: 484px;
      height: auto;
      max-height: 642px;
    }
    @media (min-width: 1279px) {
      max-width: 484px;
      height: 642px;
      max-height: 642px;
    }
    @media (min-width: 1920px) {
      max-width: 540px;
      height: 716px;
      max-height: 716px;
    }
  }
  .content {
    max-width: 610px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .g-title {
      text-align: center;
      font-family: Poppins,sans-serif;
      line-height: 72px;
      font-size: 48px;
      @media (max-width: 768px) {
        line-height: 36px;
        font-size: 28px;
        margin-bottom: 30px;
      }
      
    .image {
      margin-top: 64px;
      width: 140px;
      height: 120px;
    }
  }
    .content{
      text-align: center;
      font-family: Open Sans, sans-serif;
      line-height: 24px ;
      font-size: 16px;
      @media (min-width: 320px) {
        font-size: 14px;
        line-height:21px ;
        margin-top: 17px;
      }
      @media (min-width: 768px) {
        line-height: 24px ;
        font-size: 16px;
        margin-top: 64px;
      }
      }
      
  }
    
    
    
  .qr {
    position: absolute;
    width: 400px;
    height: 400px;
    @media only screen and (max-width: 768px) {
      width: 368px;
      left: 10px;
      top: 20%;
    }
    left: 30%;
    top: 20%;
    opacity: 0.02;
  }
`;
