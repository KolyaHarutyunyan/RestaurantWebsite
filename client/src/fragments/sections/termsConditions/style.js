import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: transparent
  linear-gradient(180deg, #80808033 0%, #e8e8e899 41%, #ffffff 100%) 0% 0%
  no-repeat padding-box;

  @media (min-width: 320px) {
    padding: 128px 16px 24px 16px;
  }
  @media (min-width: 768px) {
    padding: 128px 40px 40px 40px;
  }
  @media (min-width: 1279px) {
    padding: 144px 42px 40px 42px;
  }
  @media (min-width: 1919px) {
    padding: 160px 100px 40px 100px;
  }
  p{
    font-size: 16px;
    font-family: Open Sans, sans-serif;
  }
  .title{
    font-size: 20px;
    font-family: Poppins, sans-serif!important;
  }
`;
