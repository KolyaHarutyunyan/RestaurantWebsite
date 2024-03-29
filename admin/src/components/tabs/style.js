import styled from "styled-components";

export const TabsContainer = styled.div``;
export const HeaderContainer = styled.div`
  cursor: pointer;
  height: 42px;
  display: flex;
  justify-content: space-between;
  & > *:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  & > *:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ activeTab }) =>
    activeTab ? "var(--action)" : "white"};
  color: ${({ activeTab }) => (activeTab ? "white" : "var(--action)")};
  ${({ activeTab }) =>
    !activeTab ? "box-shadow: 0px 0px 5px 1px #d2d2d2;" : ""};
`;
export const TabContentContainer = styled.div`
  margin-top: 10px;
`;
