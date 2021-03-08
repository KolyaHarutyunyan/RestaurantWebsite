import { memo } from "react";
import { Title } from "./title";
import { Description, Submit } from "./formBuilder/styles/style";
import { SVGNames } from "../../../constants/svgNames";
import { FormBuilder } from "./formBuilder";

export const VerifyCode = memo(
  ({email,verify})=>{


    return(
      <>
        <Title logo beforeText={"Verification Code"}/>
        <Description>
          Enter the verification code sent to <span>{email}</span>
        </Description>
         <Submit onClick={verify}>verify</Submit>
      </>
    )
  }
)