import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  height: 49px;
  background-color: var(--filling-sec);
  border-bottom: 1px solid var(--filling-third);
  justify-content: space-between;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
  li {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 10px;
    color: var(--text);
    &:nth-child(2) {
      flex: 0 0 180px;
    }
  }
`;
