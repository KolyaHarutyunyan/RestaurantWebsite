import styled from "styled-components";

export const StyledRestaurantSettings = styled.section`
  .settings-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .qr-code-link {
      display: inline-flex;
      align-items: center;
      font-family: Open Sans, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #ff453a;
      svg {
        margin-right: 7px;
      }
    }
  }
  .tabs-box {
    width: 100%;
    border-radius: 8px;
    margin-top: 24px;
    overflow: hidden;
    .tabs-wrapper {
      width: 100%;
      padding: 0px 24px;
      background-color: #e9e9e9;
      .tab {
        padding: 16px 24px;
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #555555;
        &:not(:last-of-type) {
          margin-right: 10px;
        }
        &.Mui-selected {
          color: #ff453a;
        }
      }
      span.MuiTabs-indicator {
        background-color: #ff453a;
        height: 4px;
      }
    }
  }
`;
