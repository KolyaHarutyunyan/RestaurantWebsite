import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      text-align: center;
    }
  }
  .uploaded {
    text-align: center;
  }
  .input-padding{
    margin-bottom: 8px;
  }
  .title {
    @media (max-width: 768px) {
      font-size: 18px;
    }
    text-align: center;
    font-size: 24px;
    font-family: Poppins,sans-serif;
    margin-bottom: 17px;
  }
  .max-characters {
    font-family: Open Sans, sans-serif;
    font-size: 12px;
    margin-left: 13px;
    margin-bottom: 16px;
  }
  .save-button{
    margin-top: 20px;
  }
`;
