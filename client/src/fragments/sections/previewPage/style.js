import {colors} from "@eachbase/theme";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${colors.text};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;

  .wrapper.phone-wrapper > * {
    transform: scale(0.8);
  }
  .back-button{
    width: 100px;
    height: 38px;
    border-radius: 24px;
    color: white;
    background: #FF453A;
    left: 0;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    position: fixed;
  }
`;
