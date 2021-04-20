import styled from "styled-components"
import { colors, media } from "@eachbase/theme"

let imgW = 118
let imgWM = 89
export const Styled = {
	Block: styled.div`

    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: 0 0 6px ${colors.shadow};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 16px;

    :nth-child(1) {
      margin-top: 0;
    }

    ${media.forMobile`
			padding: 10px 16px;
			border-radius: 0;
			margin-top: 8px;
		`}
	`,
	BlockImage: styled.div`
    height: ${imgW}px;
    width: ${imgW}px;
    border-radius: 8px;
    background-color: ${colors.shadow};
    overflow: hidden;
    background-image: url('${props => props.bgi || ""}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${colors.shadow};
    }

    ${media.forMobile(`
			height: ${imgWM}px;
			width: ${imgWM}px;
		`)};
	`,
	BlockInfo: styled.div`
    width: calc(100% - ${imgW}px);
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    .title {
      width: 100%;
      font: normal normal bold 18px/20px Open Sans;
      
			${media.forMobile(`font: normal normal bold 16px/20px Open Sans;`)};
			
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      .price {
        width: 65px;
        text-align: right;

      }

      .name {
        width: calc(100% - 65px);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

    }

    .description {
      margin-top: 16px;
      width: 100%;
      font: normal normal normal 16px/24px Open Sans;
      ${media.forMobile(`
				font: normal normal normal 14px/21px Open Sans;
      	height: 41px;
      	margin-top: 4px;
      `)}

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 48px;
    }

    .options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .option {
        margin-top: 8px;
        ${media.forMobile(`
        	margin-top: 4px;
				`)};
        width: 100%;
        color: ${colors.green};
        font: normal normal normal 14px/21px Open Sans;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 160px;
				.remove{
					margin-left: 24px;
				}
        ${media.forMobile(`
				width:52px;
				.remove{
					margin-left: 16px;
				}
			`)};

      }
    }
	
	`
}