import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const ButtonContainer = styled.button`
  min-width: 200px;
  height: 48px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 24px;
  font: normal normal 600 16px/22px Open Sans;
`;
