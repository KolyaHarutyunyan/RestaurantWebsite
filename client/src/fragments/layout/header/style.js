import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 80px;
  box-shadow: 0px 2px 6px #0000001a;
  padding: 0 50px;
  .logo-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex: 0 0 200px;
    svg {
      width: 60px;
      height: 60px;
    }
    p {
      margin-left: 16px;
    }
  }
  .sign-in-buttons {
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .profile-container {
    flex: 0 0 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profile {
      cursor: pointer;
      flex: 0 0 170px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      p {
        max-width: 120px;
        padding-left: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .person-icon {
        font-size: 25px;
        color: ${colors.primary};
      }
      .menu-toggle {
        transform: rotate(180deg);
        &.open {
          transform: rotate(0deg);
        }
        transition: transform 0.2s ease-in-out;
        align-self: center;
      }
    }
  }
  .mobile-sidebar {
    .controller {
      height: 100%;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 45px;
      color: ${colors.primary};
    }
    .menu {
      position: fixed;
      top: 80px;
      right: -340px;
      opacity: 0;
      transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out;
      &.open {
        opacity: 1;
        right: 0px;
      }
      height: calc(100vh - 80px);
      background: transparent
        linear-gradient(180deg, #ffffff 0%, #f3f3f3df 53%, #e3e3e3b3 100%) 0% 0%
        no-repeat padding-box;
      overflow: auto;

      width: 340px;
      z-index: 9999;
      padding-top: 60px;
    }
  }
`;

export const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  width: 100%;
  li {
    @media only screen and (max-width: 768px) {
      padding-left: 40px;
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    &:first-child {
      svg {
        fill: ${colors.primary} !important;
      }
    }
    .icon-container {
      svg {
        fill: ${colors.text};
        transform: scale(0.7);
        font-size: 40px;
      }
    }
    &:hover {
      background-color: #ffb3ae;
    }
    .icon-container {
      flex: 0 0 40px;
    }
  }
`;
