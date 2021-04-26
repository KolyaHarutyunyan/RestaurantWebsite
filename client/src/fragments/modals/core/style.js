import styled from "styled-components"
import { animation, colors, media, ScrollBar } from "@eachbase/theme"

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
	
	Edit: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 500px;
    max-height: calc(100vh - 168px);
    ${media.forLargeDesktop`
			margin-right: -27px;
			padding-right: 21px;
		`};

    ${media.downToLargeDesktop`
			width: 450px;
			max-height: calc(100vh - 136px);
			margin-right: -11px;
			padding-right: 5px;
		`};
    ${media.forMobile`
			max-width: 311px;
			width: 100%;
			max-height: calc(100vh - 104px);
		`};


    overflow: hidden auto;
    ${ScrollBar};

    .save {
      border-radius: 8px;
      margin-top: 40px;
      ${media.downToLargeDesktop`margin-top: 32px;`}
      ${media.forMobile`margin-top: 24px;`}
    }
	`,
	
	Row: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.mt || 24}px;
    column-gap: 24px;
    ${props => props.Tmt
            ? media.downToLargeDesktop(`margin-top: ${props.Tmt}px;`)
            : media.downToLargeDesktop(`margin-top: 16px;`)
    };
		${props => props.Mmt
            ? media.downToLargeDesktop(`margin-top: ${props.Mmt}px;`)
            : media.downToLargeDesktop(`margin-top: 16px;`)
    };
    ${media.downToLargeDesktop(`column-gap: 16px;`)};
		.description textarea{
			height: 76px!important;
		}
	`,
	
	InputBox: styled.div`
    height: 48px;
    width: ${props => props.w || "100%"};
    border: 1px solid ${colors.text}80;
    border-radius: 8px;
    ${media.forMobile(`height: 42px;`)};
    display: flex;
    align-items: center;
    justify-content: space-between;
	
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
      ${props => props.brd && `border-radius: ${props.brd}px;`}
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