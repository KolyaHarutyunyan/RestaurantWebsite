import styled from "styled-components";

export const ListContainer = styled.ul``;

export const ItemContainer = styled.li`
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  background-color: #0000002a;
  &:hover {
    background-color: #2b273c4d;
  }
  color: var(--text);
  font-size: 1rem;
  .icon svg {
    font-size: 22px;
  }
`;
