import styled from "styled-components";

export const Container = styled.div`
  .row {
    &:hover {
      background-color: var(--filling-third);
    }
    cursor: pointer;
    transition: background-color 0.3s;
    height: 50px;
    background: white;
    &::not(::last-child) {
      border-bottom: 1px solid var(--filling-third);
    }
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--filling-third);
    .col {
      display: flex;
      align-items: center;
      flex: 1;
      padding-left: 10px;
    }
  }
`;
