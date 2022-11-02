import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledContactUsForm = styled.div`
  .title {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-transform: capitalize;
    text-align: center;
    color: ${colors.black};
  }
  .subtitle {
    max-width: 357px;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: ${colors.black};
    margin: 14px auto 18px;
  }
`;
