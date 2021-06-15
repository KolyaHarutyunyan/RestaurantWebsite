import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  max-height: 300px;
  padding: 10px;
  z-index: ${({ dropdownOpen }) => (dropdownOpen ? "10000" : "-10000")};
  visibility: ${({ dropdownOpen }) => (dropdownOpen ? "visible" : "hidden")};
  opacity: ${({ dropdownOpen }) => (dropdownOpen ? "1" : "0")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  background: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;
  .wrapper {
    flex-direction: column;
    & > * {
      text-align: left;
      width: 100%;
    }
  }
  div {
    padding-left: 5px;
    cursor: pointer;
    flex: 0 0 48px;
    display: flex;
    align-items: center;
    transition: 0.3s background ease-in-out;
    &:hover {
      background: #e9e9eb;
    }
  }
`;

export const Container = styled.label`
  position: relative;
  display: block;
  border: 1px solid
    ${({ dropdownOpen }) => (dropdownOpen ? "black" : "#2b273c80")};
  height: 48px;
  border-radius: 8px;
  padding: 10px;
  &,
  & * {
    box-sizing: border-box;
  }
  .dropdown-actions {
    display: flex;
    height: 100%;
    gap: 10px;
    align-items: center;
    input {
      flex: 1;
      font-size: 1.3rem;
      margin: 0px;
      padding: 5px;
      width: 100%;
      height: 100%;
      background-color: transparent;
      outline: 0;
      border-color: transparent;
    }
    .dropdown-toggle {
      cursor: pointer;
      flex: 0 0 40px;
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
