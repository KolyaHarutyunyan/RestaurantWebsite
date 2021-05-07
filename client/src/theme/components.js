import styled from "styled-components";
import { media } from "./media";

export const MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  ${media.forMobile`
    height: calc(100% - 60px)
  `};
  overflow: auto;
`;
