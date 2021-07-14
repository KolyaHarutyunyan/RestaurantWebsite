import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1/3;
  @media only screen and (max-width: 920px) {
    grid-column: 1;
    .desktop {
      display: none !important;
    }
  }
  .mobile {
    display: none;
  }
  margin-top: 90px;
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      .switch-container {
        .switch-title {
          width: 85px;
          text-align: right;
        }
      }
      button {
        gap: 5px;
        display: flex !important;
        align-items: center;
        .icon {
          font-size: 1.5rem;
          background-color: #ffe3e1;
        }
      }
    }
    .switch-container {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: space-between;
    }
  }
  .card {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 920px) {
      flex-direction: column;
    }
    padding: 40px;
    box-shadow: 0px 0px 6px #0000001a;
    border-radius: 8px;
    gap: 20px;
    .mobile-head {
      display: none;
      @media only screen and (max-width: 920px) {
        justify-content: space-between;
        align-items: center;
        display: flex;
      }
    }
    .logo {
      flex: 0 0 300px;
      height: 180px;
      border-radius: 10px;
      @media only screen and (max-width: 920px) {
        &.mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            transform: scale(3);
          }
          &.no-image {
            background: #0000001a;
          }
        }
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 0;
    }
  }
`;
