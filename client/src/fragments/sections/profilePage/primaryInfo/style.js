import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  max-width: 600px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000001a;
  border-radius: 8px;
  opacity: 1;
  
  @media (min-width: 320px) {
    padding: 16px;
    margin: 0 auto 24px auto;
  }
  @media (min-width: 767px) {
    padding: 32px;
    margin: 0 auto 32px auto;
  }
  @media (min-width: 1279px) {
    padding: 32px;
    margin: 0 auto 32px auto;
  }
  @media (min-width: 1919px) {
    padding: 48px;
    margin: 0 auto 40px auto;
  }
  
  .head {
    display: flex;
    justify-content: flex-end;
  }
  .input-box {
    margin-bottom: 16px;
    p {
      margin-bottom: 8px;
    }
  }
  .button{
    height: auto;
  }
  .input-title{
    font-family: Open Sans, sans-serif;
    font-size: 16px;
    font-weight: bold;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;
