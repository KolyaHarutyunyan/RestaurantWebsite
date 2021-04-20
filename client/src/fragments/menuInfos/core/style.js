import styled from "styled-components"
import { colors, media } from "@eachbase/theme";

export const Styled = {
 
	Navigator: styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 24px;
    ${media.forMobile`
			margin-top:24px;
			font: normal normal 600 14px/19px Open Sans;
		`};
    font: normal normal 600 18px/24px Open Sans;

    .icon {
      margin: 0 8px;
    }

    a {
      color: ${colors.text}80;
      font: normal normal 600 18px/24px Open Sans;
      ${media.forMobile`
				font: normal normal 600 14px/19px Open Sans;
			`};
			&:hover{
				text-decoration: underline!important;
			}
    }

    box-sizing: border-box;
	`,
	Title: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
    ${media.forMobile`margin-top:24px`};

    .page-title {
      width: fit-content;
      margin: 0;
    }

    .ctrl {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .action {
      display: flex;
      align-items: center;
      font: normal normal normal 16px/24px Open Sans;
      cursor: pointer;

      &.remove {
        color: ${colors.primary}
      }

      &.status {
        color: ${colors.action}
      }

      .icon  {
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }

      .switch {
        margin: 0 16px 0 40px;
        height: 22px;
        width: 42px;

        .track {
          height: 18px;
          width: 18px;
        }
      }

      ${media.forMobile`
				.text{
				  display: none;
				}
				.switch{
					margin: 0 0 0 18px;
					height: 18px;
					width: 36px;
					.track{
						height: 14px;
						width: 14px;
					}
				}
				.icon  {
					width: 24px;
					height: 24px;
					margin: 0;
				 
				}
			`};
    }
	`,
	
	Block: styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0 0 6px ${colors.shadow};
    border-radius: 8px;
    padding: 40px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    position: relative;
    ${media.downToLargeDesktop`
    	padding: 32px;
    `};
    ${media.downToDesktop`
     			flex-direction: column;
    `};
    ${media.forMobile`
    	margin-top: 30px;
    	padding: 24px 16px;
    `};

    .edit {
      position: absolute;
      top: 40px;
      right: 40px;
      margin: 0;
      width: fit-content;
      padding: 10px 40px;
      //font: normal normal 600 16px/22px Open Sans;
      
      ${media.downToLargeDesktop`
				top: 32px;
				right: 32px;
			`};
      ${media.forMobile`
				top: 24px;
      	right: 16px;
      	height: 36px;
      	 padding: 9px 32px;
 
			`};
    }

    .title {
			display: none;
			width: 100%;
			text-align: left;
			height: 42px;
			align-items: center;
			
      font: normal normal bold 28px/42px Poppins;
			${media.downToDesktop`
				display:flex;
				margin-bottom: 32px;
			`};
      ${media.forMobile`
      	margin-bottom: 24px;
      	font: normal normal bold 16px/25px Poppins;
      	height: 36px;
      `};
	`,
	
	BlockAvatar: styled.div`
    width: 450px;
    height: 250px;
    border-radius: 16px;
    ${media.downToDesktop`width: 100%;`};
    ${media.forMobile`
			border-radius: 8px;
			height: 125px;
		`};
    background-color: ${colors.shadow};
    ${props => props.bgi && `background-image: url("${props.bgi}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
	
	`,
	BlockDescription: styled.div`
    width: calc(100% - 490px);
    font: normal normal normal 16px/24px Open Sans;

    .title {
      margin-bottom: 16px;
      display:flex
    }

    margin-left: 40px;
    ${media.downToDesktop`
			width: 100%;
			margin-top: 32px;
			margin-left: unset;
			.title{
				display: none;
			}
		`};
    ${media.forMobile`
			margin-top: 24px;
		`};
	
	`,
	BlockTitle:styled.div`
	
	`
	
	
}