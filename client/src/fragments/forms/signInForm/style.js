import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .logo {
    width: 60px;
    height: 60px;
    margin: 16px 0 32px 0;
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`;
