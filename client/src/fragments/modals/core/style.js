import styled from "styled-components";
import { animation, colors, media, ScrollBar } from "@eachbase/theme";

export const Styled = {
  Title: styled.div`
    width: 100%;
    color: ${colors.text};
    font: normal normal bold 24px/35px Poppins;
    ${media.forMobile`font: normal normal bold 18px/27px Poppins;`}
  `,

  Remove: styled.div`
    text-align: ${(props) => (props.hasActions ? "left" : "center")};
    width: 384px;
    ${media.downToLargeDesktop`width: 376px;`};
    ${media.forMobile`
			width: 100%;
			max-width: 311px;
		`};
  `,

  Edit: styled.div`
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: flex-start;
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
    align-items: flex-start;
    margin-top: ${(props) => props.mt || 24}px;
    column-gap: 24px;
    ${(props) =>
      props.Tmt
        ? media.downToLargeDesktop(`margin-top: ${props.Tmt}px;`)
        : media.downToLargeDesktop(`margin-top: 16px;`)};
    ${(props) =>
      props.Mmt
        ? media.forMobile(`margin-top: ${props.Mmt}px;`)
        : media.forMobile(`margin-top: 16px;`)};
    ${media.downToLargeDesktop(`column-gap: 16px;`)};

    .description textarea {
      height: 76px !important;
    }

    .priceInput {
      width: 100px;
    }

    .nameInput {
      width: calc(100% - 100px);
    }
  `,

  InputBox: styled.div`
    height: 48px;
    width: ${(props) => props.w || "100%"};
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
      ${(props) => props.brd && `border-radius: ${props.brd}px;`}
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
  `,

  Hours: styled.div`
    width: 100%;

    .ctrl {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font: normal normal 600 18px/27px Poppins;

      .icon {
        cursor: pointer;
        transform: rotate(${(props) => (props.status ? -90 : 90)}deg);
        ${animation(["transform"])}
      }

      p {
        cursor: pointer;
      }
    }

    .hours {
      width: 100%;
      height: ${(props) => (props.status ? props.h : 0)}px;

      opacity: ${(props) => (props.status ? 1 : 0)};
      visibility: ${(props) => (props.status ? "visible" : "hidden")};
      transform: rotateX(${(props) => (props.status ? 0 : 90)}deg);
      ${animation(["all"])};

      .day {
        width: 100%;
        background-color: ${colors.action}1A;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
        ${media.downToLargeDesktop(`padding: 12px 16px;`)};
        ${media.forMobile(`
        	margin-top: 8px;
        	padding: 10px 16px;
        `)};
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        :nth-child(1) {
          margin-top: 24px;
          ${media.forMobile(`margin-top: 16px;`)};
        }

        .name {
          font: normal normal bold 16px/20px Open Sans;
          width: 40px;
        }

        .hour {
          width: 225px;
          margin-left: 24px;
          margin-right: 8px;
          display: flex;
          font: normal normal normal 16px/20px Open Sans;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;

          .line {
            :nth-child(1) {
              margin-top: 0;
            }

            width: 100%;
            display: flex;
            margin-top: 8px;
            align-items: center;
            justify-content: flex-start;
          }

          ${media.forMobile(`
          	margin-left: 8px;
          	margin-right: 0;
          	font: normal normal normal 14px/20px Open Sans;
          `)};

          .actionBtn {
            margin-left: 16px;
            width: 18px;
            height: 18px;
            background-color: ${colors.white};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            cursor: pointer;
          }
        }

        .status {
        }
      }
    }
  `,
};
