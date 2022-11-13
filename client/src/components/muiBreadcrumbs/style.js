import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const StyledMuiBreadcrumbs = styled.div.attrs((props) => ({
  className: props.className,
}))`
  li {
    list-style: none;
  }
  .page {
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.secondary};
    &.last {
      color: ${colors.gray};
    }
  }
`;
