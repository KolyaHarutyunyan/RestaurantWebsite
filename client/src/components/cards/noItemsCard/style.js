import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledNoItemsCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  .no-items-text {
    font-family: Open Sans, sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${colors.notSet};
    text-transform: uppercase;
  }
`;
