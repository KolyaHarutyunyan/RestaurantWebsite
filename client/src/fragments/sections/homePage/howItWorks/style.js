import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  .g-title {
    font-family: Poppins,sans-serif;
    line-height: 72px;
    font-size: 48px;
    @media (max-width: 767px) {
      line-height: 36px;
      font-size: 28px;
      margin-bottom: 30px;
    }
    text-align: center;
    margin-bottom: 72px;
  }
  .ul{
    @media (max-width: 1279px) {
      margin: 0 0 0 64px;
    }
    @media (min-width: 1279px) {
      margin: 37px 0 0 64px;
    }
    @media (min-width: 1919px) {
      margin: 0 0 0 100px ;
    }
  }
  .title{
    font-family: Poppins,sans-serif;
    font-size: 16px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  } 
  .description{
    font-family: Open Sans, sans-serif;
    line-height: 24px ;
    font-size: 16px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height:21px ;
    }
  }
  .title-image{
    @media (max-width: 1279px) {
      width: 100%;
      height: auto;
      min-height: auto;
    }
    @media (min-width: 1279px) {
      max-width: 648px;
      min-height: 368px;
    } 
    @media (min-width: 1919px) {
      max-width: 800px;
      min-height: 446px;
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    
    @media (max-width: 1279px) {
      flex-direction: column;
    }
    align-items: center;
    &:nth-of-type(1) {
      
      @media (min-width: 320px) {
        gap: 19px;
        margin-bottom: 80px;
      }
      @media (min-width: 768px) {
       
        margin-bottom: 128px;
      }
      @media (min-width: 1279px) {
        margin-bottom: 128px;
      }
       @media (min-width: 1920px) {
         margin-bottom: 160px;
      }
      ul {
        li {
          @media (max-width: 1279px) {
            margin: 32px 35px;
          }
          position: relative;
          .num {
            &::before {
              position: absolute;
              content: "";
              height: 20px;
              right: 0px;
              bottom: 0;
              background-color: ${colors.primary};
              border-bottom-right-radius: 9px;
              width: 18px;
            }
            &.line::after {
              content: "";
              position: absolute;
              top: 50px;
              width: 2px;
              background-color: ${colors.text};
              @media (min-width: 320px) {
                height: 60px;
                top: 53px;
              }
              @media (min-width: 500px) {
                height: 47px;
                top: 50px;
              }
              @media (min-width: 1000px) {
                height: 38px;
                top: 50px;
              }
              @media (min-width: 1279px) {
                height: 60px;
                top: 52px;
              } 
              @media (min-width: 1520px) {
                height: 42px;
                top: 52px;
              }  
              @media (min-width: 1920px) {
                height: 50px;
                top: 52px;
              }
              height: 48px;
            }
            width: 45px;
            height: 45px;
            display: inline-flex;
            text-align: center;
            justify-content: center;
            padding: 10px;
            position: absolute;
            left: -40px;
            top: -10px;
            background-color: ${colors.primary};
            color: ${colors.white};
            border-radius: 50%;
            font-size: 18px;
            font-weight: bold;
            font-family: Poppins,sans-serif;
            box-shadow: 2px 2px 6px 4px #0000002a;
          }
          padding-left: 20px;
          p:first-of-type {
            margin-bottom: 8px;
          }
          @media (max-width: 1919px) {
            margin-bottom: 24px;
          }
          margin-bottom: 32px;
        }
      }
    }
    &:nth-of-type(2) {
      @media (max-width: 1279px) {
        flex-direction: column-reverse;
      }
      
      @media (min-width: 320px) {
        gap: 42px;
        margin-bottom: 80px;
      }
      @media (min-width: 768px) {
        margin-bottom: 128px;
      }
      @media (min-width: 1279px) {
        margin-bottom: 128px;
      }
      @media (min-width: 1920px) {
        margin-bottom: 160px;
      }
      ul {
        
        max-width: 100%;
        @media (max-width: 1279px) {
          max-width: 100%;
        }
      
        li {
          display: flex;
          
          margin-bottom: 24px; 
          .checkmark {
            margin-top: -5px;
            margin-right: 40px;
            @media (max-width: 768px) {
              height: 36px;
              flex: 0 0 36px;
              margin-right: 24px;
            }
            
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            flex: 0 0 45px;
            height: 45px;
            //background-color: #54c762;
            color: white;
            border-radius: 50%;
          }
          .content {
            p:first-child {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
`;
