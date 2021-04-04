import styled from "styled-components"
import { theme } from "@eachbase/theme"

export const InputBlock = styled.div`
  display: flex;
  margin-top: ${props => props.mt || 16}px;
  align-items: center;
  padding: 9px 16px;
  width: ${props => props.w !== undefined ? props.w : '100%'};
  height: ${props => props.h || '42'}px;
  border-radius: ${props => props.brd !== undefined ? props.brd : 25}px;
  border: 1px solid #2B273C80;
  ${props => props.brdType !== undefined ? `border-style : ${props.brdType}` : ""};
  overflow: hidden;
  @media (min-width: 768px) {
    height: ${props => props.h || '48'}px;
    padding: 12px 16px;

  }
  background-color: #fff;
  transition: all .5s;

  &:hover {
    border: 1px solid #2B273C;
  }

  &.focused {
    border: 2px solid #2B273C;
  }

  &.disabled {
    border: 1px solid #2B273C80;
  }

  &.error {
    border: 2px solid #FF453A;
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    &.important:after {
      content: '*';
      position: absolute;
      width: 20px;
      color: #FF453A;
      height: 20px;
      display: block;
      z-index: 10000;
      top: 0;
      left: 200px
    }
  }
`

export const InputBlockIcon = styled.div`
  width: ${props => props.size !== undefined ? props.size : '24'}px;
  height: ${props => props.size !== undefined ? props.size : '24'}px;
  border-radius: ${props => props.brd || 0}px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Input = styled.input`
  display: block;
  height: 100%;
  margin-left: 8px;
  width: calc(100% - ${props => props.w !== undefined ? props.w : '34'}px);
  line-height: 100%;
  font-size: ${props => props.fs || 14}px;
  @media (min-width: 768px) {

    font-size: ${props => props.fsb || props.fs || 16}px;

  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: #FFFFFF !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: unset !important;
  }

  position: relative;
  outline: none;
  border: 0;


  &:after {
    content: '*';
    position: absolute;
    color: ${theme.palette.primary.main};
  }
  ${props=>props.readonly && "&:read-only{}"}
`

export const InputTitle = styled.p`
  display: block;
  margin-bottom: -8px;
  font: normal normal 600 14px/21px Open Sans;
  margin-top: ${props => props.mtt || 16}px;

`
export const InputDescription = styled.p`
  display: block;
  margin: 8px 0 8px 16px;
  font: normal normal normal 12px/17px Open Sans;
`
export const TextArea = styled.textarea`
  font: normal normal normal 14px/19px Open Sans;
  resize: none;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
`
export const ErrorMessage = styled.p`
  width: fit-content;
  background-color: #fff;
  text-align: left;
  margin: 6px 0 0 48px;
  line-height: 17px;
  color: #FF453A;
  padding: 0 10px;
  display: block;
  font-size: 12px !important;

`
