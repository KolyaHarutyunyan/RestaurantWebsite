import { memo } from "react";
import { Title } from "./title";
import { Description, Submit } from "./formBuilder/styles/style";
import { SVGNames } from "../../../constants/svgNames";
import { FormBuilder } from "./formBuilder";

export const ResetPassword = memo(
  ({changePass})=>{


    return(
      <>
        <Title logo beforeText={"Reset Password"}/>
        <Description>
          Enter your new password. Use at least 8 characters, 1 upper case and 1 digit.
        </Description>
        <Submit onClick={changePass}>verify</Submit>
      </>
    )
  }
)