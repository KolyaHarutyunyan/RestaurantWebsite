import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  .helper {
    text-align: center;
  }
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
  .welcome-text{
    font-weight: bold;
    font-family: Poppins,sans-serif;
    letter-spacing: 0;
    @media (min-width: 320px) {
      font-size: 18px;
    }
    @media (min-width: 768px) {
      font-size: 24px;
    }
    @media (min-width: 1279px) {
      font-size: 24px;
    }
  }
  .social-text{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    margin: 24px 0 48px 0;
    text-align: center;
    letter-spacing: 0;
    line-height: 24px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 1920px) {
      margin: 16px 0 32px 0;
    }
  }
  .get-code-button{
    margin-top: 22px;
    @media (max-width: 1920px) {
      margin-top: 14px;
    }
  }
`;
