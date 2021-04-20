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
    position: relative;
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
    left: ${props => props.open ? 0 : "100%"};
    width: calc(50% - 32px);
    ${animation([ "left" ],)};


    ${media.downToDesktop(`
    	width:100%;
    	height: 100vh;
    	z-index:100000;
    	padding:20px 40px;
    	overflow: hidden auto;
    	position: fixed;
			background-color: ${colors.white};
			top: 0px;
			background: white linear-gradient(180deg, #FFFFFF 0%, #F3F3F3DF 53%, #E3E3E3B3 100%) 0% 0% no-repeat padding-box;
    `)};
		${media.forMobile(`padding:16px`)};
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
	
	CategoryItem: styled.div`
    ${props => props.active && `background-color: #e7e7e7;`};
    width: 100%;
    border-radius: 8px;
    margin-top: 16px;
    box-shadow: 0 0 6px ${colors.shadow};
    padding: 16px 32px;
    ${media.downToLargeDesktop` padding:16px 24px;`};
    ${media.forMobile` padding:12px 16px;`};

    :nth-child(1) {
      margin-top: 0;
    }


    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;

    .name {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .icon {
        margin-left: 8px;
      }

      .icon-LeftArrow {
        width: 24px;
        height: 24px;

      }
    }

    button {
      z-index: 1000;
    }
	
	`,
	CategoriesList: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    height: calc(100vh - 250px);
    ${ScrollBar};
    overflow: auto;
    margin: 32px -5px 0;
    padding: 3px 5px;
    ${media.downToDesktop`
			height: calc(100vh - 260px);
 			background: white linear-gradient(180deg, #FFFFFF 0%, #F3F3F3DF 53%, #E3E3E3B3 100%) 0% 0% no-repeat padding-box;
		`};
    ${media.forMobile`
			height: calc(100vh - 270px);
 		
		`};
	`,
	CategoriesTitle: styled.div`
    .newCategory {
      margin-top: 40px;
			display: flex;
			.addCategory{
        height: 48px;
      }
			justify-content: space-between;
      ${media.downToLargeDesktop`margin-top: 32px;`};
			
      ${media.forMobile`
				margin-top: 16px;
				flex-direction: column;
				align-items:center;
				.addCategory{
					height: 42px;
					width:100%
				}
    
    `};
    }
	`,
	
	ItemsList: styled.div`
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
			height: calc(100vh - 248px);
    	.content {
				overflow: unset;
				padding:0
			}
		`};
		${media.forMobile(`height: calc(100vh - 230px);`)};
	
	`,
	ItemsTitle: styled.div`
    padding: 0 16px;
    ${media.downToDesktop(`
			padding: 24px;
			box-shadow: 0 0 6px ${colors.shadow};
			border-radius: 8px;
		`)};
    width: 100%;
    ${media.forMobile(`
				padding:16px;`
    )};


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

      p {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .preview {
        border-radius: 8px;
        width: fit-content;
        background-color: ${colors.action};
        padding: 0 56px;

        margin: 0;
      }

      ${media.forMobile(`
				 
					font: normal normal 600 16px/22px Open Sans;
					.preview{
						height: 36px;
						font: normal normal 600 14px/19px Open Sans;
					}
				 
			`)}
    }


    .newItem {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      margin-top: 40px;

      ${media.downToLargeDesktop`margin-top: 32px;`};
      ${media.forMobile`
				margin-top: 16px;
				flex-direction: column;
				align-items: flex-start;
				height: unset;
			`};

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

          .icon {
            width: 24px;
            height: 24px;
          }

        }

        ${media.forMobile(`
        	font: normal normal 600 14px/20px Open Sans;
        	.iconBlock {
						width: 24px;
						height: 24px;
						.icon{
							width: 16px;
							height: 16px;
						}
					}
				`)}
      }

      .or {
        margin: 0 24px;
        ${media.forMobile(`display:none`)};
      }
			
      .addMenuItems {
        width: calc(100% - 280px);
				height: 48px;
        ${media.forMobile`
        	width:100%;
        	height: 42px;
        	margin-top: 16px;
        `};
      }
    }
	`,
	
	BackBtn: styled.button`
    display: none;
    margin-right: 16px;

    .icon {
      transform: rotate(180deg);
    }

    ${media.downToDesktop(`
			display:block
		`)}
	`,
	
	SelectType: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;

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
	SelectBlock: styled.div`
    width: 100%;
    border: 1px solid ${colors.text}80;
    border-radius: 8px;
    padding: 0 16px;
    height: 100%;
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

    .title {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      input {
        display: ${props => !props.open ? "none" : "block"};
        border: none;
        outline: none;
        background-color: unset;
        font: normal normal normal 16px/22px Open Sans;
        ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
        width: 100%;
        z-index: 10000;


      }

      p {
        display: ${props => props.open ? "none" : "block"};
        font: normal normal normal 16px/22px Open Sans;
        ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
      }

      .icon {
        ${animation([ "transform" ])};
        cursor: pointer;
        ${props => props.open && `transform:rotate(-180deg);`};
      }
    }

    .items {
      display: flex;
      flex-direction: column;
			align-items: flex-start;
      justify-content: flex-start;
      ${props => `opacity: ${props.open ? 1 : 0};
			visibility: ${props.open ? 'visible' : 'hidden'};`};
      ${animation([ "all" ])};
      position: absolute;
      top: calc(100% + 8px);
      left: -1px;
      border-radius: 8px;
      background-color: ${colors.white};
      width: 100%;
      padding: 8px 0;
      max-height: 304px;
      ${ScrollBar};
			overflow: hidden auto;
      box-shadow: 0 0 6px ${colors.shadow};
      z-index: 10000;

      .item {
        width: 100%;
        font: normal normal normal 16px/22px Open Sans;
        height: 48px;
				${media.forMobile`height: 42px;`};
        padding: 13px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${animation([ "all" ])};
        cursor: pointer;
        &:hover,&.selected {
          background-color: #E9E9EB;
        }
				.title{
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
				}
				.checkBox{
					width: 18px;
					height: 18px;
          border: 1px solid ${colors.action};
          border-radius: 2px;
          padding: 3px 2px;
					background-color: unset;
					margin-right: 16px;
					${animation(["all"])};
					.icon{
            display: none;
					}
				}
				&.selected{
					.checkBox{
						background-color: ${colors.action};
						.icon{
              display: block;
						}
						
					}
				}
				&.whitCheckBox{
					.title{
						width: calc(100% - 34px);
					}
				}
      }
    }
	`,
	
	NotItem:styled.div`
    font: normal normal bold 28px/42px Poppins;
		color: ${colors.text}80;
 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100Vh - 250px);
 
    align-items: center;
		${media.forMobile(` font: normal normal bold 16px/25px Poppins;`)}
		
	`
}