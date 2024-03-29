import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Paragraph = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ color }) => colors[color]};
  font-weight: ${({ weight }) => weight};
`;
