import styled from "styled-components"
import { colors, media } from "@eachbase/theme"

let blockH = 251
let blockW = 264
let imageH = 172
export const Styled = {
	Content: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, ${blockW}px);
    justify-content: space-between;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
		${media.forMobile`grid-template-columns: repeat(auto-fill, 100%)`};
	}
		
	`,
	Item: styled.div`
    width: ${blockW}px;
    height: ${blockH}px;
    border-radius: 16px;
    cursor: pointer;
    box-shadow: 0 0 6px ${colors.shadow};
    ${media.forMobile` width: 100%`};
	
	`,
	ItemImage: styled.div`
    width: 100%;
    height: ${imageH}px;
    background-color: ${colors.shadow};
    ${props => props.bgi && `background-image: url("${props.bgi}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    .icon-Menu {
      width: 80px;
      height: 80px;
      ${media.forMobile`
			 	width: 60px;
				height: 60px;
			`};
    }
	
	`,
	ItemContent: styled.div`
    width: 100%;
    height: ${blockH - imageH}px;
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .addNew {
      display: flex;
      justify-content: center;
      align-self: center;
      font: normal normal bold 16px/22px Open Sans;
      color: ${colors.action};

      .icon-AddIcon {
        height: 24px;
        width: 24px;
        margin-right: 16px;
      }
    }
	`,
	
	ContentLine: styled.div`
    display: flex;
		position: relative;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.mt || 0}px;
    width: 100%;
		.title{
      font: normal normal bold 16px/22px Open Sans;
			color: ${colors.text};
		}
    .description {
      width: calc(100% - 34px);
      height: 19px;
			color: ${colors.text};
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
		.dropBtn{
			z-index: 100000;
      position: absolute;
			right: 0;
			padding: 0;
		}
	`,
	DropMenu:styled.div`
		visibility:${props => props.status?"visible":"hidden"};
		opacity: ${props => props.status?1:0};
		position: absolute;
		top:25px;
		z-index: 10000;
		right: -16px;
    width: 119px;
    height: 132px;
		border-radius: 6px;
		box-shadow: 0 0 10px ${colors.shadow};
		background-color: ${colors.white};
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 6px 0;
		.bg{
			display: ${props => props.status?"block":"none"};
			width: 100%;
			height: 100vh;
      position: fixed;
			left: 0;
			top: 0;
			z-index: 9999;
			background-color: #0000;
		}
	`,
	DropAction:styled.button`
		height: 40px;
		z-index: 10010;
		text-align: left;
		padding: 9px 24px;
    font: normal normal normal 16px/22px Open Sans;
		&:hover{
			background-color: #E9E9EB;
		}
		color: ${props => props.remove?colors.primary:colors.text};
	`
	
	
	
}