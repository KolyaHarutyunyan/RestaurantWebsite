import styled from "styled-components";

export const Container = styled.div`
  .title {
      @media (max-width: 768px) {
        font-size: 18px;
      }
      text-align: center;
      font-size: 24px;
      font-family: Poppins,sans-serif;
      margin-bottom: 20px;

  }
  .price-input{
    font-family: Open Sans, sans-serif;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #2b273c80;
    height: 48px;
    border-radius: 8px;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px white inset !important;
    }
  }
  .uploaded {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    .box {
      display: flex;
      & > *:first-child {
        flex: 1;
        margin-right: 12px;
      }
      & > *:last-child {
        flex: 0 0 100px;
      }
    }
  }
  .input-padding{
    margin-bottom: 20px;
  }
  .save-button{
    margin-top: 20px;
  }
`;
