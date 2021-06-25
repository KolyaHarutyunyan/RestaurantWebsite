import styled from "styled-components";

export const DropDownContainer = styled.div`
  box-shadow: 0px 0px 3px 0px #d2d2d2;
  position: absolute;
  max-height: 200px;
  padding: 0;
  z-index: ${({ dropdownOpen }) => (dropdownOpen ? "1000000" : "-1000000")};
  visibility: ${({ dropdownOpen }) => (dropdownOpen ? "visible" : "hidden")};
  opacity: ${({ dropdownOpen }) => (dropdownOpen ? "1" : "0")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  background: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;
  border-radius: 5px;
  div {
    cursor: pointer;
    flex: 0 0 48px;
    display: flex;
    align-items: center;
    transition: 0.3s background ease-in-out;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    & > * {
      align-items: flex-start;
      & > * {
        padding: 15px;
        background-color: #007aff;
        color: white;
        margin-bottom: 10px;
        border-radius: 5px;
      }
      overflow: auto;
      display: block !important;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ dropdownOpen }) => (dropdownOpen ? "black" : "#2b273c80")};
  height: 48px;
  border-radius: 8px;
  padding: 12px;
  &,
  & * {
    box-sizing: border-box;
  }
  .value {
    flex: 1;
  }
  .dropdown-actions {
    display: flex;
    height: 100%;
    gap: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .dropdown-toggle {
      cursor: pointer;
      flex: 0 0 20px;
      border-radius: 50%;
      padding-top: 4px;
      padding-left: 1px;
      text-align: center;
      svg {
        width: 20px;
        height: 20px;
        transform: rotate(
          ${({ dropdownOpen }) => (dropdownOpen ? "180deg" : "0deg")}
        );
        transition: all 0.3s ease-in-out;
      }
    }
  }

  select {
    display: none;
  }
`;
