import styled from "styled-components";

export const Container = styled.div`
  min-width: 220px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 1px #dedede;
  padding: 16px 8px 0 8px;
  color: var(--text);
  .action-bar {
    display: flex;
    height: 30px;
    margin-top: 16px;
    .title {
      cursor: pointer;
      font-weight: bold;
      flex: 2;
      height: 100%;
      font-size: 1rem;
      padding: inherit;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .action {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  }
  .descr-bar {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .descr {
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .action {
      cursor: pointer;
      flex: 0 0 20px;
    }
  }
  .cover {
    background: ${({ coverImg }) => (coverImg ? `url(${coverImg})` : ``)};
    background-position: center;
    background-size: cover;
    height: 70%;
  }
`;

export const DropDownMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  li {
    cursor: pointer;
    color: #2b273c;
    &.danger {
      color: #ff453a;
    }
  }
`;
