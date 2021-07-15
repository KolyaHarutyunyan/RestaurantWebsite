import styled from "styled-components";
import { media } from "@eachbase/theme";
export const Container = styled.section`
  width: 100%;
  background: transparent
    linear-gradient(180deg, #80808033 0%, #e8e8e899 41%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
  @media (min-width: 320px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1279px) {
    padding: 0 21px 0 42px;
  }
  @media (min-width: 1920px) {
     padding: 0 21px 0 100px;
  }
  
  
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 320px) {
      align-items: flex-start;
    }
    @media (min-width: 768px) {
      align-items: flex-start;
    }
    
    
    //padding: 60px 0 0 0;
    
    @media only screen and (max-width: 1279px) {
        flex-direction: column;
    } 
    @media only screen and (max-width: 768px) {
           padding: 60px 16px 0 16px;
    }
    
    .content {
      max-width: 520px;
      
      @media only screen and (max-width: 768px) {
        margin-right: 0 !important;
      }

      
      @media (min-width: 320px) {
        //margin-top: 48px;
      }
      @media (min-width: 768px) {
        margin-top: 64px;
      }
      @media (min-width: 1279px) {
        margin-top: 72px;
        margin-right: 51px;
      }
      @media (min-width: 1920px) {
          margin-top: 160px;
          margin-right: 80px;
      }
      
      flex: 1;
      
      .title {
        font-family: Poppins, sans-serif;
        font-weight: bold;
        font-size: 47px;
        
        @media (max-width: 768px) {
           font-size: 24px;
        }
        
        margin-bottom: 5px;
        @media (max-width: 1600px) and (min-width: 768px) {
          //margin-top: 72px;
          align-items: center;
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
      height: 100%;
      width: 100%;
      
      @media (min-width: 320px) {
        justify-content: center;
      }
      @media (min-width: 768px) {
        justify-content: center;
      }
      @media (min-width: 1279px) {
        justify-content: flex-end;
        flex: 1;
      }
      @media (min-width: 1920px) {
        justify-content: flex-end;
      }
      
      
      
      //@media (max-width: 1280px) {
      //  max-width: 100%;
      //  height: 430px;
      //  justify-content: center;
      //}
      //@media (max-width: 1600px) and (min-width: 768px) {
      //  max-width: 100%;
      //  height: 387px;
      //  justify-content: center;
      //}
      //@media (max-width: 1280px) {
      //  width: 100%;
      //  flex: 0 0 430px;
      //}
      .image {
        height: 100%;
        width: 100%;

       
        @media (min-width: 320px) {
          height: 208px;
          max-width: 343px;
          margin-top: 51px;
        }
        @media (min-width: 768px) {
          height: 418px;
          max-width: 688px;
          margin-top: 64px;
        }
        @media (min-width: 1279px) {
          height: 376px;
          max-width: 620px;
          margin-top: 32px;
        }
        @media (min-width: 1920px) {
          height: 694px;
          max-width: 1143px;
          margin-top: 32px;
        }
        
        
        //@media (max-width: 1280px) {
        //  margin-top: 76px;
        //}
      }
    }
  }
`;
