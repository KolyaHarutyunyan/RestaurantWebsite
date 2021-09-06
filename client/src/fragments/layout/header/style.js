import styled from "styled-components";
import {colors} from "@eachbase/theme";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 999;
  .header-scrolled{
    box-shadow: 0px 2px 6px #0000001a;
    background: white!important;
    width: 100%;
    height: 80px;
    transition-duration: 1s;
    
  } 
  
  .header-scrolled-open{
    
    box-shadow: 0px 2px 6px #0000001a;
    background: white!important;
    width: 100%;
    height: 80px;
    transition-duration: 1s;
    @media (min-width: 1279px) {
      box-shadow:none;
      background: transparent!important;
    }
  }
  .header-not-scrolled{
    background: transparent!important;
    width: 100%;
    height: 80px;
    transition-duration: 1s;

  }
  
 
  .container-header {
    @media only screen and (min-width: 1279px) {
      transform: translateX(-10px);
    }
    display: flex;
    justify-content: space-between;
    height: 100%;

    @media (min-width: 320px) {
      padding: 0 16px;
    }
    @media (min-width: 768px) {
      padding: 0 40px;
    }
    @media (min-width: 1279px) {
      padding: 0 42px;
    } 
    @media (min-width: 1920px) {
       padding: 0 100px;
    }
    
    
    .logo-container {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex: 0 0 200px;
      svg {
        //width: 60px;
        //height: 60px;
      }
      p {
        margin-left: 16px;
      }
    }
    .sign-in-buttons {
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .profile-container {
      flex: 0 0 400px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .profile {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        p {
          margin: 0 8px;
          max-width: 120px;
          padding-left: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .person-icon {
          font-size: 25px;
          color: ${colors.primary};
        }
        .menu-toggle {
          transform: rotate(180deg);

          &.open {
            transform: rotate(0deg);
          }

          transition: transform 0.2s ease-in-out;
          align-self: center;
        }
      }
    }

    .mobile-sidebar {
      .controller {
        height: 100%;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 45px;
        color: ${colors.primary};

      }

      .menu {
        position: fixed;
        top: 80px;
        right: -340px;
        opacity: 0;
        transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out;
        box-shadow: 0px 2px 6px #0000001a;

        &.open {
          opacity: 1;
          right: 0px;
        }

        height: calc(100vh - 80px);
        background-image: linear-gradient(to bottom, #ffffff, #fdfdfd, #fafafb, #f8f8f8, #f6f5f6, #f5f3f5, #f4f2f3, #f3f0f2, #f2eff1, #f1eef0, #f0edef, #efecee);  //background: transparent linear-gradient(180deg, #ffffff 0%, #f3f3f3df 53%, #e3e3e3b3 100%) 0% 0% no-repeat padding-box;
        overflow: auto;
        width: 340px;
        z-index: 9999;
        padding: 32px 0;
      }
    }
  }
`;

export const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  padding: 9px 0 10px 0;
  width: 100%;
  height: 156px;
  
  .account-icon {
    display: none;
    
  }
  .create-button{
    display: none;
    width: 160px;
    margin-bottom:40px ;
    margin-left: 47px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    .account-icon {
      display: flex;
      background-color: #FF453A1A;
      p {
        margin-top: -5px;
        font-family: Open Sans, sans-serif;
        font-size: 16px;
        color: #2B273C;
        font-weight: normal;
      }
    } .account-icon:hover {
            p {
              @media (max-width: 767px) {
                font-size: 18px;
                font-weight: bold;
                color: #2B273C;
              }
            }
    }
    .create-button{
      display: block;
    }
  }
  
  
  li {
    @media (max-width: 767px) {
        height: 41px;
        margin-bottom: 15px;
  }
    height: 41px;
    margin-bottom: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    .icon-container {
      @media (max-width: 767px) {
        margin: 0 6px 0 40px;
      }
      
      margin: 0 8px 0 16px;
      svg {
        fill: ${colors.text};
        transform: scale(0.7);
        font-size: 40px;
      }
    }  
    .icon-container-user {
      @media (max-width: 767px) {
        margin: 0 6px 0 40px;
      }
      
      margin: 0 8px 0 16px;
      svg {
        fill: ${colors.text};
        transform: scale(0.7);
        font-size: 40px;
      }
    }
    p {
      margin-top: -5px;
      font-family: Open Sans, sans-serif;
      font-size: 16px;
      color: ${colors.text};
    }
    &:hover {
      height: 41px;
      background-color: #FF453A;
      display: flex;
      align-items: center;
      
      @media (max-width: 767px) {
          height: 41px;
          background-color: #FF453A1A;
        }
      }
    .icon-container {
      flex: 0 0 40px;
    }
  }
  li:hover {
    p {
      margin-top: -5px;
      font-family: Open Sans, sans-serif;
      font-size: 16px;
      color: white;

      @media (max-width: 767px) {
        font-size: 18px;
        font-weight: bold;
        color: #2B273C;
      }
    }
    svg {
      fill: white;
      transform: scale(0.7);
      font-size: 40px;
      @media (max-width: 767px) {
        fill: #FF453A;
      }
    }
  }
`;
