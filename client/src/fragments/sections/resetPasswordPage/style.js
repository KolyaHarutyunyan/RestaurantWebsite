import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  
  @media only screen and (max-width: 768px) {
    max-width: 343px;
  }
  margin: 0 auto;
  padding: 160px 0 60px;

  .reset-text {
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #2B273C;
    text-align: center;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;
