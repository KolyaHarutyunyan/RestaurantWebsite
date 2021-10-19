import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  .loader-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 320px) {
      margin: 129px 0 24px 0;
    }
    @media (min-width: 768px) {
      margin: 144px 0 40px 0;
    }
    @media (min-width: 1279px) {
      margin: 144px 0 40px 0;
    }
    @media (min-width: 1919px) {
      margin: 160px 0 40px 0;
    }
    .restaurantTitle{
      font-size: 48px;
      font-family: Poppins,sans-serif;
      @media (max-width: 767px) {
        font-size: 24px;
      }
    }
    .qr-button {
      display: flex;
      align-items: center;
      color: ${colors.typography.active} !important;
      font-size: 16px;
      @media (max-width: 767px) {
        font-size: 14px;
      }
      svg {
        transform: scale(1.4);
        margin-right: 8px;
        margin-bottom: 4px;
        @media (max-width: 767px) {
          margin-right: 12px;
        }
      }
    }
  
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    @media (max-width: 767px) {
      margin-bottom: 16px;
      }
    }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 320px) {
      gap: 16px;
    }
    @media (min-width: 768px) {
      gap: 24px;
    }
    @media (min-width: 1279px) {
      gap: 24px;
    }
    @media (min-width: 1919px) {
      gap: 32px;
    }
   
    .business-card,
    .extra-details-card {
      background: white;
      box-shadow: 1px 1px 14px #d6d6d6;
      border-radius: 5px;
      padding: 32px 24px 32px 24px;
      @media (max-width: 767px) {
        padding: 24px 16px 24px 16px;
      }
      .restaurant-name{
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        @media (min-width: 320px) {
          font-size: 16px;
          width:150px;
          margin-left: 8px;
        }
        @media (min-width: 767px) {
          font-size: 32px;
          width:200px;
          margin-left: 8px;
        }
        @media (min-width: 1279px) {
          font-size: 32px;
          width:250px;
          margin-left: 16px;
        }
        @media (min-width: 1920px) {
          font-size: 32px;
          margin-left: 24px;
          width:400px;
        }
      }
      .restaurant-name-mini{
        @media (min-width: 320px) {
          font-size: 16px;
          display: block;
        }
        @media (min-width: 767px) {
          font-size: 32px;
          display: block;
        }
        @media (min-width: 1279px) {
          font-size: 32px;
          display: block;
        }
        @media (min-width: 1920px) {
          font-size: 32px;
          display: none;
        }
      }
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-family: Poppins,sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          .logo {
            display: inline-block;
            background-position: center;
            background-size: cover;
            width: 80px;
            height: 80px;
            border-radius: 15px;
            margin-right: 24px;
            @media (max-width: 767px) {
              margin-right: 20px;
            }
          }
        }
      }     
    
    .contact-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 18px;
        margin-bottom: 32px;
        .title {
          font-family: Poppins,sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          @media (max-width: 767px) {
            gap: 20px;
            margin-bottom: 42px ;
          }
        }
      }
      .classes-no-image{
        width: 80px;
        height: 80px;
        border-radius: 15px;
        background: #0000001A;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
          width: 50px;
          height: 50px;
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        li {
          display: flex;
          align-items: center;
          .icon {
            flex: 0 0 24px;
            display: flex;
            align-items: center;
            margin-right: 8px;
            @media (min-width: 767px) {
              margin-right: 16px;
            }
          }
          &.hourse-menu-toggle {
            cursor: pointer;
          }
        }
      }
    }
    .menu-list {
      grid-column: 1/3;
      @media only screen and (max-width: 768px) {
        grid-column: auto;
      }
      .menus-title{
        display: flex;
        font-family: Poppins,sans-serif;
        @media (min-width: 320px) {
          margin: 43px 0 24px 0;
          font-size: 24px;
          justify-content: center;
        }
        @media (min-width: 768px) {
          margin: 56px 0 40px 0;
          font-size: 24px;
          justify-content: center;
        }
        @media (min-width: 1279px) {
          margin: 56px 0 40px 0;
          font-size: 48px;
          justify-content: flex-start;
        }
        @media (min-width: 1919px) {
          margin: 50px 0 40px 0;
          font-size: 48px;
          justify-content: flex-start;
        }
      }
      .list {
        padding: 0px 2px 15px 0px;
        margin-top: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        
        margin-bottom: 160px;
        
        @media only screen and (max-width: 1600px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        @media only screen and (max-width: 1279px) {
          grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 768px) {
          grid-template-columns: 1fr;
        }
        gap: 25px;
        @media (min-width: 320px) {
          gap: 16px;
        }
        @media (min-width: 768px) {
          gap: 40px;
        }
         @media (min-width: 1279px) {
          gap: 47px;
        }
        @media (min-width: 1920px) {
          gap: 28px;
        }
        
        & > * {
          height: 260px;
          @media (min-width: 320px) {
            width: 343px;
            margin: 0 auto;
          }
          @media (min-width: 768px) {
            width: 264px;
            margin: 0 auto;
          }
        }
        .add-card {
          box-shadow: 0px 0px 6px #0000002a;
          border-radius: 16px;
          .image {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 190px;
            background-color: #0000002a;
            border-radius: 16px 16px 0 0;
            svg {
              width: 100%;
              transform: scale(0.3);
              @media only screen and (max-width: 768px) {
                transform: scale(0.2);
              }
            }
          }
          .footer {
            height: 70px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 0 16px 16px;
            button {
              font-family: Open Sans, sans-serif;
              font-size:16px;
              display: flex;
              align-items: center;
              color: #007aff;
            }
            svg{
              margin-right: 16px;
              font-size: 24px;
            }
          }
        }
      }
    }
    .extra-details{
      font-family: Poppins,sans-serif;
      font-size: 32px;
      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  }
`;

export const HourseMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 5px;
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
  div {
    & > p {
      flex: 0 0 40px;
    }
  }
  & > div {
    display: flex;
    gap: 5px;
    p {
      font-weight: bold;
    }
  }
  ul {
    li {
      &.danger {
        color: ${colors.primary};
      }
      display: flex;
      gap: 5px;
      .title {
        color: ${colors.text};
        font-weight: bold;
      }
      .value-not-set {
        display: flex;
        flex-direction: column;
        color: ${colors.notSet}!important;
        font-size: 16px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      .value {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        @media (max-width: 767px) {
          font-size: 14px;
        }  
       
        
        &.closed {
          color: ${colors.primary};
        }
      }
    }
  }
`;
