import styled from "styled-components";

export const Container = styled.div`
  
  grid-column: 1/3;
  @media only screen and (max-width: 920px) {
    grid-column: 1;
    .desktop {
      display: none !important;
    }
  }
  .mobile {
    display: none;
  }
  .title-head{
    font-family: Poppins,sans-serif;
    font-size: 48px;
    @media (max-width: 767px) {
      font-size: 24px;
    }
  }
  .descr{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    margin-top: 16px;
    
  } .descr-mobile{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    margin-top: 16px;
    display: none;
        @media (max-width: 920px) {
          display: block;
        }
  }
  .title{
    font-family: Poppins,sans-serif;
    font-size: 28px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .delete-text{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    display: block;
    font-weight: normal;
    @media (max-width: 767px) {
     display: none;
    }
    
  } 
  .head {
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
      margin-bottom: 24px;
    }
    margin-bottom: 40px;
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .switch-container {
        .switch-title {
          width: 85px;
          text-align: right;
          @media (max-width: 767px) {
            display: none;
          }
        }
      }
      button {
        display: flex !important;
        align-items: center;
        margin-right: 30px;
  
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          width: 32px;
          height: 32px;
          margin-right: 16px;
          border-radius: 4px;
        }
      }
    }
    .switch-container {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: space-between;
    }
  }
  .card {
    display: flex;
    justify-content: space-between;
    background: white;
    @media only screen and (max-width: 920px) {
      flex-direction: column;
    }
    padding: 40px;

    @media (min-width: 320px) {
      padding: 24px 16px;
    }
    @media (min-width: 767px) {
      padding: 32px;
    }
    @media (min-width: 1279px) {
      padding: 32px;
    }
    @media (min-width: 1919px) {
      padding: 40px;
    }
    
    
    box-shadow: 0px 0px 6px #0000001a;
    border-radius: 8px;
 
    .mobile-head {
      @media (max-width: 920px) {
        margin-bottom: 20px;
      }
     
      
      
      display: none;
      @media only screen and (max-width: 920px) {
        justify-content: space-between;
        align-items: center;
        display: flex;
      }
    }
    .logo {
      flex: 0 0 300px;
      height: 180px;
      border-radius: 16px;
      object-fit: cover;
      
      @media (min-width: 1919px) {
        margin-right: 40px;
      }
      @media (min-width: 920px) {
      margin-right: 32px;
      }
      
      @media only screen and (max-width: 920px) {
        &.mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            transform: scale(3);
          }
          &.no-image {
            background: #0000001a;
          }
        }
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 0;
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
`;
