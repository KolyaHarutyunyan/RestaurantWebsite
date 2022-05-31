import styled from "styled-components";

export const Container = styled.div`
  .search-bar {
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    max-width: 500px;
    padding: 0 4px;
    .noth {
      flex: 0 0 250px;
      margin-left: 10px;
    }
  }
  .grid-wrapper {
    border-right: 0.5px solid #545F7E4D;
    border-left: 0.5px solid #545F7E4D;
    border-bottom: 0.5px solid #545F7E4D;
    border-radius: 8px;
    padding: 0 0 20px 0;
    min-width: 1200px;
    .pagination-wrapper {
      display: flex;
      align-items: center;
    }
  }
  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 25px 15px 10px 0;
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
  .loader{
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
`;
