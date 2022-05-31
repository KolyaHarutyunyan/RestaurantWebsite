import styled from "styled-components";

export const Style = {
  Container: styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    margin-top: 120px;
    .wrapper {
      transition: margin 0.3s ease-in-out, padding 0.3s ease-in-out;
      margin-left: ${({ sideBarIsOpen, isTablet }) =>
        sideBarIsOpen && !isTablet ? "200px" : "90px"};
      padding-right: 15px;
      height: calc(100% - 145px);
      overflow: auto;
    }
  `,
  Fade: styled.div`
    opacity: ${({ sideBarIsOpen, isTablet }) =>
      sideBarIsOpen && isTablet ? "0.6" : "0"};
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    margin-top: 60px;
    z-index: ${({ sideBarIsOpen, isTablet }) =>
      sideBarIsOpen && isTablet ? "1" : "-1"};
    background: black;
  `,
};
