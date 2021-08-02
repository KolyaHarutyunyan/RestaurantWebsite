import { colors } from "@eachbase/theme";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${colors.text};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  .wrapper.phone-wrapper > * {
    transform: scale(0.8);
  }
`;
