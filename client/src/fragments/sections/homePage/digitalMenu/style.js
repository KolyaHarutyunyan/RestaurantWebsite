import styled from "styled-components";

export const Container = styled.section`
  //position: relative;
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  //gap: 80px;
  //margin-bottom: 160px;
  
  .desktop{
      display: none;
  }

  @media (min-width: 1279px) {
    .desktop{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 80px;
      margin-bottom: 160px;
    }
  }
  
  .mobile{
    display: none;
  }
  @media (max-width: 1279px) {
    .mobile{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      margin-bottom: 128px;
      @media (max-width: 767px) {
        margin-bottom: 80px;
      }
    }
    
    
  }
  
  .image.main {
    flex: 0 0 540px;
    position: relative;
    z-index: 2;
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
    @media (min-width: 1279px) {
      right: 100px;
    }
    @media (min-width: 1919px) {
      position: absolute;
      right: 200px;
    }
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
    .content-text{
      text-align: center;
      font-family: Open Sans, sans-serif;
      line-height: 24px ;
      font-size: 16px;
      margin-bottom: 0;
      @media (min-width: 320px) {
        font-size: 14px;
        line-height:21px ;
        margin-bottom: 17px;
      }
      @media (min-width: 767px) {
        line-height: 24px ;
        font-size: 16px;
        margin-top: 64px;
        margin-bottom: 50px;
        }
      }
      
  }
    
    
    
  .qr {
    position: absolute;
    @media (max-width: 1279px) {
      width: 200px;
      height: 200px;
      margin-top: 160px;
      margin-left: -140px;
      @media (min-width: 767px) {
        width: 200px;
        height: 200px;
        margin-top: 50px;
        margin-left: 550px;
      }
    }
    @media (min-width: 1279px) {
      left: 30%;
      width: 300px;
      height: 300px;
    }
    @media (min-width: 1920px) {
      left: 30%;
      width: 400px;
      height: 400px;
    }
    top: 20%;
    //opacity: 0.05;
  }
`;
