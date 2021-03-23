import styled from "styled-components";


export const FormBlock = styled.form`
  width: 100%;
`

export const InputBlock = styled.div`
  display: flex;
  margin-top: ${props => props.mt || 16}px;

  align-items: center;
  padding: 0 24px;
  width: ${props => props.w !== undefined ? props.w : '100%'};
  height: ${props => props.h !== undefined ? props.h : '42'}px;
  border-radius: 25px;
  border: 1px solid #2B273C80;

  @media (min-width: 768px) {
    height: ${props => props.h !== undefined ? props.h : '48'}px;
    padding: 0 24px;

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
    border: 1px solid #FF453A;
  }

  .content {
    height: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`

export const InputBlockIcon = styled.div`
  width: ${props => props.size !== undefined ? props.size : '24'}px;
  height: ${props => props.size !== undefined ? props.size : '24'}px;
  border-radius: ${props => props.brd || 0}px;
`

export const SubmitButton = styled.button`
  width: ${props => props.w !== undefined ? props.w : '100%'};
  height: ${props => props.h !== undefined ? props.h : '42'}px;
  border-radius: 25px;
  border: 0 !important;
  cursor: pointer;
  margin-top: 16px;
  background-color: #FF453A;
  color: #FFF;
  font-size: ${props => props.fs || 14}px;
  @media (min-width: 768px) {
    height: ${props => props.hb !== undefined ? props.hb : '48'}px;
    padding: 0 24px;
    font-size: ${props => props.fsb || props.fs || 16}px;
  }
`


export const Input = styled.input`
  display: block;
  height: 100%;
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

  outline: none;
  border: 0;

`

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;

  p {
    &.after, &.before {
      margin: 0;
      font-size: 22px;
      @media (min-width: 768px) {
        font-size: 18px;
      }
      font-family: 'Poppins', sans-serif;
    }
    &.before{
      margin-top: 24px;
    }
  }

  .icon-logo {
    margin: 24px 0 0;
    width: 60px;
    height: 60px;
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`
export const TitleDivider = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 1px solid #2B273C;
  margin-top: ${props => props.mt || "24px"};

  p {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 0 32px;
    background-color: #fff;
  }
`

export const SocialBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 24px;

  p {
    margin: 0;
  }

  .icons {
    margin-top: 24px;

    display: flex;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: #fff;
      box-shadow: 0 0 12px #0000001A;
      margin: 0 12px;

    }

    svg {
      margin: 0 10px;
    }
  }
`

export const LineButtonBlock = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 32px;

  button {
    color: #007AFF;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px !important;
    @media (min-width: 768px) {
      font-size: 16px !important;
    }
  }
`

export const ForgotButton = styled.button`
  width: fit-content;
  display: block;
  text-align: center;
  margin-top: 16px;
  font-size: 14px !important;
  @media (min-width: 768px) {
    font-size: 16px !important;
  }
`
export const PolicyBlock = styled.p`
  display: block;
  text-align: center;
  margin: 32px 0 0;

  span {
    color: #007AFF;
    cursor: pointer;

    &.agree {
      font-family: "Open Sans Semibold";
    }
  }

  font-size: 14px !important;
  @media (min-width: 768px) {
    font-size: 16px !important;
  }
`
export const ErrorMessage = styled.p`
  text-align: left;
  margin: 3px 0 0;
  padding: 0 0 0 24px;
  color: #FF453A;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px !important;
  }
`

export const Description = styled.p`
  margin: 16px 0 0;
  text-align: center;
  span{
    color: #007AFF;
  }
`