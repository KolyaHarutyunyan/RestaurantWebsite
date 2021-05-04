import styled from "styled-components";

export const Container = styled.div`
  .search-bar {
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    max-width: 500px;
    .noth {
      flex: 0 0 250px;
      margin-left: 10px;
    }
  }
  .grid-wrapper {
    min-width: 1200px;
    .pagination-wrapper {
      display: flex;
      align-items: center;
    }
  }
  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    .noth {
      margin-right: 5px;
    }
    .pagination {
      display: flex;
      li {
        cursor: pointer;
        text-align: center;
        margin-left: 5px;
        padding: 5px;
        min-width: 30px;
        border: 1px solid grey;
        border-radius: 5px;
        &.selected {
          background-color: var(--text);
          color: white;
        }
      }
    }
  }
`;
