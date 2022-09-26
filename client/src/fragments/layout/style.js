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
    background-color: #e3e3e3;
    display: flex;
  }
`;
