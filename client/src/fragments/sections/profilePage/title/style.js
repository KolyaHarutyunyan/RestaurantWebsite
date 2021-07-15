import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 320px) {
     margin: 48px 0 32px 0;
  }
  @media (min-width: 767px) {
    margin: 64px 0 48px 0;
  }
  @media (min-width: 1279px) {
    margin: 64px 0 48px 0;
  } 
  @media (min-width: 1919px) {
    margin: 80px 0 72px 0;
  }
  .account-settings{
    font-family: Poppins,sans-serif;
    font-size: 48px;
    @media (max-width: 767px) {
      font-size: 24px;
    }
   
  }
`;
