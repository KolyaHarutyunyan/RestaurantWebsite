import styled from "styled-components";
import { colors, media } from "@eachbase/theme";

export const Styled = {
  Content: styled.div`
    padding: 0 145px 140px;
    box-sizing: border-box;
    display: block;

    ${media.downToLargeDesktop`padding: 0 0 140px`}
  `,
  BlockTitle: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 80px 0 40px;
    ${media.downToLargeDesktop`margin:64px 0 40px;`}
    ${media.forMobile`margin-bottom: 24px;`}


    .page-title {
      margin: 0;
      width: fit-content;
    }

    .downloadBtn {
      .icon-Download {
        height: 24px;
        width: 24px;
        margin-right: 8px;
      }
      display: flex;
      align-items: center;
      font: normal normal 600 16px/22px Open Sans;
      line-height: 24px;
      color: ${colors.action};
      ${media.forMobile`
				font: normal normal 600 14px/19px Open Sans;
				.icon-Download{
					height: 18px;
					width: 18px;
					margin-right: 4px ;
				}
			
			`}
    }
  `,
};
