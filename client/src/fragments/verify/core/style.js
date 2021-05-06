import styled from "styled-components";
import { animation, colors, media } from "@eachbase/theme";

export const Styled = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto 16px;
    max-width: 628px;
    padding: 0 16px;
    ${media.downToLargeDesktop`max-width: 546px;`}
  `,

  Block: styled.div`
    box-shadow: 0 0 6px #0000001a;
    border-radius: 8px;
    background-color: ${colors.bg.primary};
    margin-top: 40px;
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 32px 48px 64px;
    ${media.downToLargeDesktop`padding: 16px 32px 48px;`};
    ${media.forMobile`padding: 16px 16px 32px;`}
  `,
  BlockForm: styled.form`
    width: 100%;
    height: ${({ open }) => (open ? "auto" : 0)};
    ${animation(["height"])};
    overflow: hidden;
  `,
  RemoveBtn: styled.button`
    font: normal normal 600 16px/22px Open Sans;
    color: ${colors.button.primary};
    margin-top: 40px;
    ${media.downToLargeDesktop`margin-top: 32px;`};
    ${media.forMobile`margin-top: 24px;`}
  `,
  SaveBtn: styled.button`
    align-self: flex-end;
    font: normal normal 600 18px/24px Open Sans;
    color: ${colors.button.action};
  `,
  BlockTitle: styled.p`
    align-self: flex-start;
    font: normal normal 600 18px/24px Open Sans;
    color: ${colors.text.primary};
    margin-top: 8px;
  `,
  BlockDescription: styled.p`
    align-self: flex-start;
    margin-top: 16px;
    font: normal normal 600 18px/24px Open Sans;
    color: ${colors.text.secondary};
  `,
};
