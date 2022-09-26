import styled from "styled-components";

export const StyledMuiBreadcrumbs = styled.div`
  li {
    list-style: none;
  }
  .page {
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #2a374e;
    &.last {
      color: #9d9d9d;
    }
  }
`;
