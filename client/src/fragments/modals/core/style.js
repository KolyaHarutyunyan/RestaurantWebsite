import styled from "styled-components"
import { animation, colors, media } from "@eachbase/theme"

export const Styled = {
	Title: styled.div`
    width: 100%;
    color: ${colors.text};
    font: normal normal bold 24px/35px Poppins;
    ${media.forMobile`font: normal normal bold 18px/27px Poppins;`}
	`,
	
	Remove: styled.div`
    text-align: ${props => props.hasActions ? "left" : "center"};
    width: 384px;
    ${media.downToLargeDesktop`width: 376px;`};
    ${media.forMobile`
			width: 100%;
			max-width: 311px;
		`};
	`,
	Description: styled.p`
    margin-top: 24px;
    font: normal normal normal 20px/27px Open Sans;
    ${media.downToLargeDesktop`margin-top: 16px;`};
    ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
	`,
	
	Actions: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    margin-top: 40px;
    ${media.downToLargeDesktop`margin-top: 32px;`};
    ${media.forMobile`margin-top: 24px;`};

    .action {
			${props=>props.brd && `border-radius: ${props.brd}px;`}
    }
	`,
	
	Options: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 27px;
    margin-top: 24px;

    .option {
      display: flex;
      column-gap: 16px;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      cursor: pointer;
      font: normal normal normal 20px/27px Open Sans;
      color: ${colors.text};

      span {
        color: ${colors.action};
      }

      .round {
        display: block;
        width: 24px;
        height: 24px;
        border: 2px solid ${colors.action};
        border-radius: 50%;
        padding: 4px;

        .center {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-color: ${colors.action};
        }
      }
    }

    ${media.downToLargeDesktop`row-gap: 19px;`};
    ${media.forMobile`
			row-gap: 16px;
			.option{
				font: normal normal normal 14px/19px Open Sans;
				column-gap: 8px;
				.round {
					padding: 3px;
					width: 18px;
					height: 18px;
				}
			}
		`};
	
	`
	
}