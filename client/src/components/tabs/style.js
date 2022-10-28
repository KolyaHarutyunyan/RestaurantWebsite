import styled from "styled-components";

export const TabsContainer = styled.div``;
export const HeaderContainer = styled.div`
  cursor: pointer;
  height: 50px;
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 4px;
  border-radius: 8px;
  background: white;
  justify-content: space-between;
  ${({ square }) =>
    square
      ? null
      : `
        & > *:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        & > *:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
    `}
`;
export const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans,serif;
  font-size: 20px;
  border-radius: 8px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 16px;
  }
  flex: 1;
  background-color: ${({ activeTab }) => (activeTab ? "#FF453A" : "white")};
  color: ${({ activeTab }) => (activeTab ? "white" : "#313131")};
  // ${({ activeTab }) => !activeTab ? "box-shadow: 4px 0px 5px 1px #d2d2d2;" : ""};
`;
export const TabContentContainer = styled.div`
  margin-top: 10px;
`;
