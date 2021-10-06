import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  .title{
    font-size: 24px;
    font-family: Poppins,sans-serif;
  }
  .sub{
    font-size: 16px;
    font-family: Open Sans, sans-serif;
  }
  button{
    width:100%
  }
`;
