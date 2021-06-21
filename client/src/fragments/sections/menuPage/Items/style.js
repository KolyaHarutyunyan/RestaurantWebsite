import styled from "styled-components";

export const Container = styled.div`
  min-height: 265px;
  &.no-menu-items {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    min-height: 255px;
    border: 1px dashed grey;
    p {
      color: #2b273c80 !important;
    }
    background-color: #fbfbfb;
  }
  .list {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    & > * {
      flex: 0 0 120px;
    }
    gap: 10px;
    border-radius: 8px;
    padding: 16px;
    background-color: #e7e7e7;
    max-height: 300px;
    overflow: auto;
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      min-width: 160px;
    }
  }
  .add-or-choice {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    align-items: center;
    gap: 10px;
    & > * {
      flex: 1;
      text-align: center;
    }
    .action-button {
      display: flex;
      align-items: center;
      gap: 5px;
      .circle {
        padding: 2px;
        border-radius: 50%;
        background: #007aff1a 0% 0% no-repeat padding-box;
        color: #007aff;
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
