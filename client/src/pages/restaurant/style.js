import styled from "styled-components"
import { colors, media } from "@eachbase/theme"


export const Styled = {
	Content: styled.div`
    padding: 80px 145px;
    height: calc(100vh - 144px);
    ${media.downToLargeDesktop`padding: 64px 0`}
    ${media.forMobile`padding: 48px 0;height: calc(100vh - 162px);`}
	
	`,
	BlockTitle: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .page-title {
      margin: 0;
      width: fit-content;
    }

    .downloadBtn {
			.icon-Download{
				height: 24px;
				width: 24px;
				margin-right: 8px ;
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
	
	`
}