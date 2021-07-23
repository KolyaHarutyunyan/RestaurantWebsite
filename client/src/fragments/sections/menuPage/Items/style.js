import styled from "styled-components";

export const Container = styled.div`
  grid-template-columns: 1fr;
  min-height: 265px;
  .categ-name{
    font-family: Open Sans, sans-serif;
    font-size: 28px;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
  &.no-menu-items {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    min-height: 490px;
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
    margin: 32px 0 24px 0;
    align-items: center;
    gap: 10px;
    & > * {
      flex: 1;

      text-align: center;
    }
    .or{
      font-family: Open Sans, sans-serif;
      font-size: 18px;
    }
    .action-button {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 16px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      @media (max-width: 768px) {
        font-size: 14px;
      }
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
  .no-menu-screen{
    background: #E7E7E7;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    border-radius: 8px;
    p{
      color: #2B273C80;
      font-size: 28px;
      font-family: Poppins, sans-serif;
    }
  }
`;
