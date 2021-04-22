import styled from "styled-components";

export const Container = styled.div`
  max-height: 700px;
  overflow: auto;
  .search-bar {
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    max-width: 400px;
    .noth {
      flex: 0 0 180px;
      margin-left: 10px;
    }
  }
  .grid-wrapper {
    min-width: 1200px;
  }
`;
