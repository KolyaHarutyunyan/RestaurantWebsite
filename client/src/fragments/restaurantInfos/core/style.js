import styled from "styled-components"
import { colors, media } from "@eachbase/theme"

export const Styled = {
	Content: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(50% - 10px));
    justify-content: space-between;
    grid-row-gap: 16px;
    grid-column-gap: 20px;
    ${media.downToDesktop`grid-template-columns: repeat(auto-fill, 100%);`}
	`,
	Block: styled.div`
    box-shadow: 0 0 10px ${colors.shadow};
    border-radius: 8px;
    width: 100%;
    padding: 32px 24px;
    ${media.forMobile`padding: 24px 16px;`};
	`,
	BlockTitle: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    float: left;
    margin-left: ${props => props.hasLogo ? 24 : 0}px;
    width: calc(100% - ${props => props.hasLogo ? 104 : 0}px);
    font: normal normal bold 32px/48px Poppins;

    .editBtn {
      margin: 0;
      width: fit-content;
      padding: 10px 40px;
      height: 42px;
      ${media.forMobile`
				padding: 9px 32px;
				height: 36px;
		`};
    }

		${props=>props.hasLogo && media.forMobile`
			margin-left: 16px;
    	width: calc(100% - 76px);
		`};
    ${media.forMobile`
			height: 60px;
			
			font: normal normal bold 16px/25px Poppins;
		`};
	`,
	Logo: styled.div`
    width: 80px;
    height: 80px;
    float: left;
    ${props => !props.bgi && `background-color: ${colors.shadow};`};
    ${props => props.bgi && `background-image: url("${props.bgi}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    ${media.forMobile`
			 	width: 60px;
				height: 60px;
			`};

    .icon-Build {
      width: 50px;
      height: 50px;
      ${media.forMobile`
			 	width: 37.5px;
				height: 37.5px;
			`};
    }
	`,
	Description: styled.div`
    width: 100%;
    margin-top: 104px;
    font: normal normal normal 16px/24px Open Sans;


    color: ${colors.text};
    ${media.forMobile`
			margin-top: 76px;
			font: normal normal normal 14px/21px Open Sans;
		`};
	`,
	Line: styled.div`
    width: 100%;
    height: 24px;
    position: relative;
    margin-top: ${props => props.notMt ? 104 : 16}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .icon {
      margin-right: 16px;
    }

    .info {
      font: normal normal normal 16px/22px Open Sans;
      color: ${colors.text}${props => props.unSet ? "80" : ""};
    }

    .hours {
      display: flex;
      align-items: center;
      font: normal normal normal 16px/22px Open Sans;
      padding: 0;

      .icon {
        margin-left: 8px;
      }
    }
	`,
	DropMenu: styled.div`
    visibility: ${props => props.status ? "visible" : "hidden"};
    opacity: ${props => props.status ? 1 : 0};
    position: absolute;
    top: 32px;
    z-index: 10000;
    left: 40px;
    //width: 265px;
    border-radius: 8px;
    box-shadow: 0 0 6px ${colors.shadow};
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px 24px 24px;
    ${media.forMobile`
      padding: 8px 16px 16px;
	  `};

    .bg {
      display: ${props => props.status ? "block" : "none"};
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9999;
      background-color: #0000;
    }

    .line {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 8px;

      .title {
        font: normal normal bold 16px/20px Open Sans;
        color: ${colors.text};
        width: 40px;
        margin-right: 24px;
        margin-top: 8px;
        ${media.forMobile`
						font: normal normal bold 14px/20px Open Sans;
						margin-right: 20px;
					`};
      }

      .description {
        width: calc(100% - 64px);
        font: normal normal normal 16px/20px Open Sans;
        ${media.forMobile`
        	font: normal normal normal 14px/20px Open Sans;
        	width: calc(100% - 60px);
        `};
        color: ${colors.text};

        .row {
          margin-top: 8px;
          width: 100%;
        }

        .row.red {
          color: ${colors.primary};
        }
      }
    }
	`
}