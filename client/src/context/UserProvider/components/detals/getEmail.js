import { memo } from "react";
import { Title } from "./title";
import { Description } from "./formBuilder/styles/style";
import { SVGNames } from "../../../constants/svgNames";
import { FormBuilder } from "./formBuilder";

export const GetEmail = memo(
  ({submit})=>{
    let formData =[
      {
        key:1,
        type:"email",
        icon:SVGNames.email,
        value:"",
        onChange :() => {},
        onFocus : () => {
        }, onBlur : () => {
        },placeholder:"Email",
      },
    ]

    return(
      <>
        <Title logo beforeText={"Forgot your Password?"}/>
        <Description>
          Enter your email address and we'll send you a verification code to reset your password.
        </Description>
        <FormBuilder data={formData} onSubmit={submit} submitText={"Get Code"}/>
      </>
    )
  }
)