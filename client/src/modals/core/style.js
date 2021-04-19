import styled from "styled-components"
import { animation, colors, media } from "@eachbase/theme"

export const Styled = {
	Dialog: styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 20px 16px;
    z-index: 100000;
    left: 0;
    top: 0;
    visibility: ${props => props.open ? "visible" : "hidden"};
    opacity: ${props => props.open ? 1 : 0};
    ${animation([ "visibility", "opacity" ])};
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      width: fit-content;
      height: fit-content;
      max-height: 100%;
      border-radius: 8px;
      padding: 64px 48px;
      ${media.downToLargeDesktop`padding:  48px 32px;`}
      ${media.forMobile`padding:  32px 16px;`}
      z-index: 100100;
      position: relative;
      background-color: ${colors.white};
    }

    .bg {
      width: 100%;
      height: 100%;
      z-index: 100010;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #0008;
    }

    .close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 30px;
      height: 30px;
      background-color: #2B273C1A;
    }
	
	`,
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
		.action{
			border-radius: 8px;
		}
	`,

	Options:styled.div`
    display: flex;
	`
	
}