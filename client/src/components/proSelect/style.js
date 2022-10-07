import styled from "styled-components";

export const DropDownContainer = styled.div`
  box-shadow: 0px 0px 3px 0px #d2d2d2;
  position: absolute;
  max-height: 200px;
  padding: 0;
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
  border-radius: 5px;
  @media (min-width: 320px) {
    bottom: -302px;
    margin-left: 16px;
    width: 310px;
  }
  @media (min-width: 768px) {
    bottom: -332px;
    margin-left: 40px;
    width: 310px;
  }
  @media (min-width: 1279px) {
    bottom: -190px;
    margin-left: 40px;
    width: 369px;
  }
  @media (min-width: 1919px) {
    bottom: -150px;
    margin-left: 160px;
    width: 369px;
  }

  .wrapper {
    flex-direction: column;
    font-size: 16px;
    color: #2b273c;
    font-family: Open Sans, sans-serif;
    & > * {
      text-align: left;
      width: 100%;
    }
    & > div {
      padding: 0 18px;
      &:hover {
        background: #e9e9eb;
      }
    }
  }

  div {
    cursor: pointer;
    flex: 0 0 48px;
    display: flex;
    align-items: center;
    transition: 0.3s background ease-in-out;
  }
`;

export const Container = styled.label`
  position: relative;
  display: block;
  border: 1px solid
    ${({ dropdownOpen }) => (dropdownOpen ? "black" : "#2B273C80")};
  height: 48px;
  border-radius: 8px;
  padding: 10px;
  background: white;
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
      font-size: 20px;
      margin: 0px;
      padding: 5px;
      width: 100%;
      height: 100%;
      background-color: transparent;
      outline: 0;
      border-color: transparent;
    }
    input::placeholder {
      font-size: 16px;
      color: #2b273c;
      font-family: Open Sans, sans-serif;
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
