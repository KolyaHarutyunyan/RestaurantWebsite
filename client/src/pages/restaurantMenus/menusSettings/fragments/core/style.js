import styled from "styled-components";

export const StyledOverviewTabItem = styled.div`
  width: 100%;
  .overview-form {
    padding: 16px;
    max-width: 624px;
    width: 100%;
    .overview-form-buttons {
      @media (max-width: 767px) {
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 72px);
        column-gap: 15px;
      }
    }
  }
`;

export const StyledAvailabilityTabItem = styled.div``;
