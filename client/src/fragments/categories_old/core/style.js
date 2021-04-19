import styled from "styled-components"
import { animation, colors, media, ScrollBar } from "../../../theme"

export const Styled = {
	Content: styled.div`
    margin-top: 160px;
		${media.downToLargeDesktop`margin-top:128px`};
		${media.forMobile`margin-top:80px`};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
		 
	`,
	LeftBlock: styled.div`
    width: calc(50% - 32px);

    .categories-preview {
      border-radius: 8px;
      background-color: ${colors.action};
      display: none;
    }

    ${media.downToDesktop`
    	width:100%;
    	.categories-preview{
				display: block;
			}
    `};
	`,
	RightBlock: styled.div`
    width: calc(50% - 32px);
    ${media.downToDesktop`display:none;`};
	`,
	
	
	CategoryItem: styled.div`
    ${props => props.active && media.upToTablet`background-color: #e7e7e7;`};
    width: 100%;
    border-radius: 8px;
    margin-top: 16px;
    box-shadow: 0 0 6px ${colors.shadow};
    padding: 16px 32px;
    ${media.forTablet` padding:24px;`};
    ${media.forMobile` padding:16px;`};
    :nth-child(1) {
      margin-top: 0;
    }
    >.title {
      width: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: space-between;

      .name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .icon-LeftArrow {
        width: 24px;
        height: 24px;
        ${props => media.downToDesktop(`transform:rotate(${props.active ? 90 : -90}deg)`)};
        ${animation([ "transform" ])}
      }
    }
		>.forMobile{
			
			width: 100%;
			${media.upToTablet`display:none`};
			.items{
				padding: 0!important;
				background-color: unset;
				.content{
					padding: 0;
				}
			}
    }
		}
	`,
	CategoryTitle: styled.div`
    padding: 0 16px;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    .name {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      font: normal normal bold 28px/42px Poppins;
      ${media.downToDesktop`display:none`};

      .preview {
        border-radius: 8px;
        width: fit-content;
        background-color: ${colors.action};
        padding: 0 56px;
        margin: 0;
      }
    }

    .newItem {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      margin-top: 40px;

      .add {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font: normal normal 600 16px/20px Open Sans;

        color: ${colors.action};

        .iconBlock {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: ${colors.action}1A;
          width: 32px;
          height: 32px;
          margin-right: 16px;
        }
      }
    }
	`,
	CategoriesList: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 32px -10px 0;
    padding: 4px 10px;
    height: calc(100vh - 250px);
    ${ScrollBar};
    overflow: hidden auto;
    ${media.downToDesktop`
			height: calc(100vh - 260px);
 			overflow:auto;
 			margin: 32px -18px 0 0;
    	padding: 4px 10px;
		`};
	`,
	CategoryList: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 32px;
    padding: 16px 8px 16px 16px;
    border-radius: 8px;
    height: calc(100vh - 250px);
    background-color: #e7e7e7;
    width: 100%;
		 
    .content {
      height: 100%;
      ${ScrollBar};
      overflow: hidden auto;
      padding-right: 8px;

      :nth-child(1) {
        margin-top: 0;
      }
    }
		${media.downToDesktop`
			height:auto;
			background-color: unset;
			padding:0;
			overflow: unset;
    	.content {
				overflow: unset;
				padding:0
			}
		`};
	
	`,
	DoubleBtnBlock: styled.div`
    width: 100%;
    box-shadow: 0 0 6px ${colors.shadow};
    border-radius: 8px;
    overflow: hidden;
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.forMobile`
		  height: 36px;
		  font: normal normal 600 16px/22px Open Sans;
		`};
	
	
	`,
	DoubleBlockButton: styled.button`
    font: normal normal 600 20px/27px Open Sans;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.active ? colors.primary : colors.white};
    color: ${props => props.active ? colors.white : colors.text};

    ${media.forMobile`
		  font: normal normal 600 16px/22px Open Sans;
		`};
  }`,
	SelectType: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
		
    ${media.downToLargeDesktop`margin-top: 32px;`};
    ${media.forMobile`
    	margin-top: 16px;
    	flex-direction: column;
    	
    `};
    .select {
      width: 100%;
    }

    .add {
      margin-top: 0;
      border-radius: 8px;
      width: fit-content;
      padding: 13px 56px;
      margin-left: 32px;
      ${media.downToLargeDesktop`margin-left: 24px;`};
      ${media.forMobile`
      	width:100%;
      	margin-left: 0;
      	margin-top: 16px;
      `};

    }
	`,
	ActionBtn: styled.button`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 16px;
    font: normal normal normal 14px/21px Open Sans;
    color: ${props => props.remove ? colors.primary : colors.action};

    .icon {
      width: 24px;

      height: 24px;
    }

    .title {
      margin-left: 8px;
    }
	
	`,
	SelectBlock:styled.div`
		width: 100%;
		border: 1px solid ${colors.text}80;
		border-radius: 8px;
		padding: 0 16px;
		height: 48px;
    position: relative;
    .bg {
      display: ${props => props.open ? "block" : "none"};
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9999;
      background-color: #0000;
    }
		.title{
			width: 100%;
      height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
      position: relative;
			input {
        display: ${props=>!props.open?"none":"block"};
        border: none;
				outline: none;
				background-color: unset;
        font: normal normal normal 16px/22px Open Sans;
				${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
				width: 100%;
			 	z-index:10000;
			 
    
			}
			p{
				display: ${props=>props.open?"none":"block"};
        font: normal normal normal 16px/22px Open Sans;
        ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
			}
			.icon{
				${animation(["transform"])};
        cursor: pointer;
				${props=>props.open && `transform:rotate(-180deg);`};
			}
		}
		.items{
			display:flex;
			flex-direction: column;
			${props=>`opacity: ${props.open?1:0};
			visibility: ${props.open?'visible':'hidden'};`};
			${animation(["all"])};
      position: absolute;
			top:calc(100% + 8px);
			left: -1px ;
			border-radius: 8px;
			background-color: ${colors.white};
			width: 100%;
			padding: 8px 0;
			max-height: 304px;
			${ScrollBar};
      box-shadow: 0 0 6px ${colors.shadow};
			z-index: 10000;
   
			.item{
				width: 100%;
				height: 48px;
        padding: 0 16px;
        display: flex;
        align-items: center;
				justify-content: flex-start;
				${animation(["all"])};
        cursor: pointer;
				&:hover{
					background-color: #E9E9EB;
				}
			}
    }
	`,
}
























