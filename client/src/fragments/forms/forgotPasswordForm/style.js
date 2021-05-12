import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .helper {
    text-align: center;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .logo {
    width: 60px;
    height: 60px;
    margin: 16px 0 32px 0;
  }
`;
