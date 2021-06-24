import styled from "styled-components";

export const WrapperContainer = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  box-shadow: 0px -2px 0px 0px #969696 inset;
`;

export const TabContainer = styled.div`
  cursor: pointer;
  padding: 5px 25px;
  border-bottom: 2px solid transparent;
  border-color: ${({ isActive }) => (isActive ? "#2B273C" : "transparent")};
  color: #2b273c;
  opacity: ${({ isActive }) => (isActive ? "1.0" : "0.8")};
`;

export const SectionContainer = styled.div``;
export const ContentContainer = styled.div`
  height: ${({ height }) => height}px;
  overflow: auto;
`;
