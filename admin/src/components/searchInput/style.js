import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  height: 40px;
  min-width: 250px;
  border: 1px solid var(--filling);
  display: flex;
  overflow: hidden;
  width: 100%;
  input {
    flex: 1;
    outline: 0;
    padding: 0px 5px;
    border: none;
  }
  .icon {
    flex: 0 0 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    padding: 0;
    height: 100%;
    color: white;
    background-color: var(--filling);
  }
`;
