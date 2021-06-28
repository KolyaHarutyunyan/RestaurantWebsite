import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 260px;
  box-shadow: 0px 0px 2px 0px #d2d2d2;
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
    align-items: baseline;
    padding: 0 10px;
    max-height: 200px;
    .square {
      justify-content: center;
    }
    & > * {
      flex: 0 0 80px;
      margin-top: 10px;
      overflow: auto;
      max-height: 185px;
      justify-content: center;
      align-items: flex-start;
      & > * {
        &:hover {
          opacity: 0.8;
        }
        padding: 15px 30px;
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
  width: 95px;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ dropdownOpen }) => (dropdownOpen ? "black" : "#2b273c80")};
  height: 38px;
  border-radius: 8px;
  padding: 2px;
  &,
  & * {
    box-sizing: border-box;
  }
  .value {
    cursor: pointer;
    flex: 1;
    font-size: 14px;
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
