import styled from "styled-components";

export const Container = styled.div`
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
