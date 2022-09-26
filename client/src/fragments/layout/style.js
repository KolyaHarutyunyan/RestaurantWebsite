import styled from "styled-components";

export const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .page-content {
    flex-grow: 1;
  }
  .main {
    flex-grow: 1;
    background-color: #E3E3E3;
    display: flex;
    .main-content {
      width: 100%;
      margin: 24px 42px;
    }
  }
`;
