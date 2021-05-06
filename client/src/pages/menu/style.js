import styled from "styled-components";
import { media } from "@eachbase/theme";

export const Styled = {
  Content: styled.div`
    padding: 0.1px 145px 30px;
    ${media.downToLargeDesktop`padding: .1px 0 30px ;`};
  `,
};
