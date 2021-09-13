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
    border-radius: 8px;
    min-height: 490px;
    //border: 1px dashed grey;
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
    height: 680px;
    overflow: auto;
    @media (min-width: 768px) {
      background-color: #e7e7e7;
      padding: 16px;
    }
  }
  .preview{
    background: #007AFF;
    font-size: 14px;
    color: white;
    border-radius: 8px;
    height: 36px;
    width: 102px;
    font-weight: 600;
    @media (min-width: 768px) {
      height: 42px;
      width: 172px;
    }
    @media (min-width: 1280px) {
      height: 48px;
      width: 174px;
    }
  }
  .choose{
    background: #FFFFFF;
    box-shadow: 0px 2px 6px #0000001a;
    padding: 16px 16px 1px 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    @media (min-width: 768px) {
      padding: 24px 24px 1px 24px;
    }
    @media (min-width: 1239px) {
      background: transparent;
      box-shadow:none;
      padding: 0;
      margin-bottom: 0;
    }
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
    flex-direction: column;
    width: 100%;
    margin: 32px 0 24px 0;
    align-items: flex-start;
    gap: 10px;
    @media (min-width: 1239px) {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    & > * {
      flex: 1;

      text-align: center;
    }
    .or{
     display: none;
      @media (min-width: 1239px) {
        display: flex;
        font-family: Open Sans, sans-serif;
        font-size: 18px;
      }
      
    }
    .action-button {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 16px;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      @media (max-width: 1239px) {
        font-size: 14px;
        margin-bottom: 10px;
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
