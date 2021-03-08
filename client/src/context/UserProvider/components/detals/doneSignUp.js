import { memo } from "react";
import { Title } from "./title";
import { Description, Submit } from "./formBuilder/styles/style";
import { SVGNames } from "../../../constants/svgNames";
import { FormBuilder } from "./formBuilder";

export const DoneSignUp = memo(
  ({done})=>{


    return(
      <>
        <Title logo beforeText={"Congrats you're all Set"}/>
        <Description>
          Now you can create your first menu.<br/>Good Luck!
        </Description>
        <Submit onClick={done}>verify</Submit>
      </>
    )
  }
)