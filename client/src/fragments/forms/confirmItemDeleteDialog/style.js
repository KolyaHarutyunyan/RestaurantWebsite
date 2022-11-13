import styled from "styled-components";

export const Container = styled.div`
  .title {
    margin-bottom: 24px !important;
    text-transform: capitalize;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }
  .actions {
    justify-content: space-between;
    display: flex;

    button {
      &:last-child {
        background-color: #2b273c1a;
        color: #2b273c;
        margin-left: 16px;
      }
      border-radius: 10px !important;
      .b-fade {
        border-radius: 10px !important;
      }
    }
  }
`;
