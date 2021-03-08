import { memo } from "react";
import { Title } from "./title";
import { Description, Submit } from "./formBuilder/styles/style";
import { SVGNames } from "../../../constants/svgNames";
import { FormBuilder } from "./formBuilder";

export const DoneReset = memo(
  ({done})=>{


    return(
      <>
        <Title logo beforeText={"Password Reset"}/>
        <Description>
          Your Password has been reset successfully.
        </Description>
        <Submit onClick={done}>verify</Submit>
      </>
    )
  }
)