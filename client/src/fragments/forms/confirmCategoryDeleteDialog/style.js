import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  .title {
    @media (max-width: 767px) {
      font-size: 18px;
    }
    font-family: Poppins,sans-serif;
    font-size: 24px;
    margin-bottom: 24px !important;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
    @media (max-width: 767px) {
      gap: 16px;
    }
    .category-name{
      @media (max-width: 767px) {
        font-size: 14px;
      }
      font-family: Open Sans, sans-serif;
      font-size: 20px;
      color: #007AFF;
    }
    label{
      @media (max-width: 767px) {
        font-size: 14px;
      }
      font-family: Open Sans, sans-serif;
      font-size: 20px;
      margin-left: 6px;
    }
  }
  .actions {
    justify-content: space-between;
    display: flex;

    @media (max-width: 767px) {
      gap: 16px;
    }
    gap: 24px;
 

    button {
      &:last-child {
        background-color: #2b273c1a;
        color: #2b273c;
      }
      border-radius: 10px !important;
      .b-fade {
        border-radius: 10px !important;
      }
    }
  }
`;
