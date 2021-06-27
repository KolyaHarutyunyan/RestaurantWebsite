import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background-color: #2b273c;
  display: flex;
  align-items: center;
  .content {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    color: white;
    select {
      cursor: pointer;
      width: 100%;
      outline: 0;
      background-color: transparent;
      color: white;
      border: none;
      font-size: 1.1rem;
      height: 40px;
    }
  }
`;
