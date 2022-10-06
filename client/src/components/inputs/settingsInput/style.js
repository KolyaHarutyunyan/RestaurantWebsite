import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const StyledSettingsInput = styled.div.attrs((props) => ({
  className: props.inputClassName,
}))`
  max-width: 347px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightBlack};
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
  input {
    border: none;
    outline: none;
    background-color: inherit;
    max-width: 100%;
    width: 100%;
    margin-left: 10px;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #262626;
  }
`;
