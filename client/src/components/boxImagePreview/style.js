import styled from "styled-components";
import { colors } from "@eachbase/theme";
export const Container = styled.div`
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
  width: 100px;
  height: 100px;
  // width: ${({ bigOne }) => (bigOne ? "120px" : "80px")};
  // height: ${({ bigOne }) => (bigOne ? "120px" : "80px")};
  // ${({ main }) => (main ? `box-shadow: 0px 0px 0px 3px ${colors.action}` : "")};
  vertical-align: top;
  display: inline-flex;
  cursor: pointer;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};
  border-radius: 15px;
  //border: 3px solid white;
  margin: 10px;
  .remove {
    position: absolute;
    left: ${({ bigOne }) => (bigOne ? "77%" : "72%")};
    top: 8%;
    color: #ffffff;
    background-color: black;
    border-radius: 50%;
    height: 16px;
    svg {
      transform: scale(2);
    }
  }
`;
