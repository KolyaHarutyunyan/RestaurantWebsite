import styled from "styled-components";

export const Container = styled.div`
  .title {
    text-align: center;
    margin: 10px 0;
  }
  .uploaded {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
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
`;
