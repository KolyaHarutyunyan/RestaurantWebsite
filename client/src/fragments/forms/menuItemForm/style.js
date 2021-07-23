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
  .uploaded {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .box {
      display: flex;
      gap: 12px;
      & > *:first-child {
        flex: 1;
      }
      & > *:last-child {
        flex: 0 0 100px;
      }
    }
  }
  .input-padding{
    margin-bottom: 8px;
  }
  .save-button{
    margin-top: 20px;
  }
`;
