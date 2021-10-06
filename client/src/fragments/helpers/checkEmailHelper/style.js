import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .title{
    font-size: 24px;  
    font-weight: bold;
    font-family: Poppins,sans-serif;
    margin: 30px 0 10px 0;
  }
  .subTitle{
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    margin-bottom: 30px;
  }
`;
