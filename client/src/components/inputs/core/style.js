import styled from "styled-components";
import { colors, media, ScrollBar, theme } from "@eachbase/theme";

export const Styled = {
  Block: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    overflow: hidden;
    background-color: ${colors.white};

    &:hover .content {
      border: 1px solid;
    }

    &.focused .content {
      box-shadow: 0 0 0 3px solid ${colors.text};
    }

    &.disabled .content {
      border: 1px solid ${colors.text}80;
    }

    &.error .content {
      box-shadow: 0 0 0 3px solid ${colors.primary};
    }

    &.file .content {
      border: 0 !important;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23333' stroke-width='3' stroke-dasharray='10%2c 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }

    .content {
      height: 100%;
      border-radius: ${(props) => (props.brd !== undefined ? props.brd : 8)}px;
      border: 1px solid ${colors.text}80;
      width: 100%;
      display: flex;
      padding: 11px 16px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;

      .leftIcon {
        width: 24px;
        height: 24px;
        margin: -12px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.important:after {
        content: "*";
        position: absolute;
        width: 20px;
        color: ${colors.primary};
        height: 100%;
        align-items: flex-start;
        display: flex;
        z-index: 10000;
        top: 0;
        padding: 8px 0 0 0;
        left: ${(props) =>
          props.hasIcon ? 48 : props.inType === "price" ? 33 : 16}px;
      }
    }

    .error {
      width: 100%;
      background-color: ${colors.white};
      text-align: left;
      margin: 6px 0 0;
      line-height: 17px;
      color: ${colors.primary};
      padding: 0 0 0 ${(props) => (props.hasIcon ? 48 : 16)}px;
      display: block;
      font-size: 12px !important;
    }

    .priceIcon {
      margin-right: 8px;
      font: normal normal normal 16px/22px Open Sans;
      ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
    }
  `,
  Input: styled.input`
    display: block;
    height: 100%;
    outline: 0;
    width: calc(
      100% -
        ${(props) =>
          (props.hasIcon ? 32 : 0) +
          (props.inType === "password" ? 26 : 0) +
          (props.inType === "price" ? 17 : 0)}px
    );
    line-height: 100%;
    font: normal normal normal 16px/22px Open Sans;
    ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      background-color: ${colors.white} !important;
      -webkit-box-shadow: 0 0 0 50px ${colors.white} inset;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: unset !important;
    }

    position: relative;
    outline: none;
    border: 0;
  `,
  Description: styled.textarea`
    width: 100%;
    height: 124px;
    resize: none;
    outline: none;
    border: none;
    ${media.downToLargeDesktop`height: 101px;`};
    ${media.forMobile`height: 106px;`};
    font: normal normal normal 16px/22px Open Sans;
    ${media.forMobile`font: normal normal normal 14px/19px Open Sans;`};
    ${ScrollBar};
  `,
  ImagePiker: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .row {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      gap: 16px;

      .item {
        width: 100px;
        height: 100px;

        .icon {
          height: 42px;
          width: 42px;
        }
      }

      ${media.forMobile`
				.item{
					width: 80px;
					height: 80px;
					.icon{
						height: 32px;
						width: 32px;
					}
				}
			`};
    }

    .title {
      margin-top: 16px;
      font: normal normal 600 18px/24px Open Sans;

      span {
        color: ${colors.action};
      }
    }

    .description {
      margin-top: 8px;
      font: normal normal normal 12px/24px Open Sans;

      span {
        color: ${colors.primary};
      }
    }
  `,
};
