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
  .logo {
    //width: 60px;
    //height: 60px;
    margin: 16px 0 32px 0;
  }
  .social-text{
    font-size: 14px;
    margin: 24px 0;
    
    
    
    
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
  .input-padding{
    margin-bottom: 9px;
  }
  .welcome-text{
    font-weight: bold;
    @media (min-width: 320px) {
      font-size: 18px;
    }
    @media (min-width: 768px) {
      font-size: 24px;
    }
    @media (min-width: 1280px) {
      font-size: 24px;
    }
  }
  .forgot-style{
    @media (min-width: 320px) {
      font-size: 14px;
      font-weight: normal;
    }
    @media (min-width: 768px) {
      font-size: 24px;
    }
    @media (min-width: 1280px) {
      font-size: 24px;
    }
  }
  .sign-up-button{
    margin-top: 13px;
    font-size: 14px;
    background: none;
    color: #007AFF;
    font-weight: normal;
  }
`;
