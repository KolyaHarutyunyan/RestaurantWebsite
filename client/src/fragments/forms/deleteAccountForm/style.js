import styled from "styled-components";

export const Container = styled.div`
  .title {
    margin-bottom: 24px;
    font-size: 24px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
  .desc{
    margin-bottom: 24px;
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    @media (max-width: 767) {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
  .password-desc{
    margin-bottom: 24px;
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
  .actions {
    display: flex;
    justify-content: space-between;
    gap: 17px;
    margin-top: 24px;
    @media (max-width: 768px) {
      margin-top: 16px;
    }
    
    
    
    button{
      width: 100%;
      min-width: 117px;
    }
  }
`;
