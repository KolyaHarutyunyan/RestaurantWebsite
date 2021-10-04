import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .apple{
    svg{
      width: 22px;
    }
  }
  .logo {
    //width: 60px;
    //height: 60px;
    margin: 16px 0 32px 0;
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
  .welcome-text{
    font-weight: bold;
    font-family: Poppins,sans-serif;
    @media (min-width: 320px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
    @media (min-width: 1279px) {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
  .input-padding{
    margin-bottom: 9px;
  }
  .forgot-style{
    font-weight: normal;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    letter-spacing: 0;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .social-text{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    margin: 24px 0;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
  .sign-up-button{
    cursor: pointer;
    font-family: Open Sans, sans-serif;
    margin-top: 13px;
    font-size: 16px;
    background: none;
    color: #007AFF;
    font-weight: normal;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .term-of-use{
     text-align: center;  
  }
  .sign-up-link{
    margin: 0 4px;
    cursor: pointer;
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    background: none;
    color: #007AFF;
    font-weight: normal;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
