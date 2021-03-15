import { memo } from "react";
import { Title } from "../detals/title";
import { Description, SubmitButton } from "../styles/screens.style";


export const DoneSignUp = memo(
  ({done})=>
      <>
        <Title logo beforeText={"Congrats you're all Set"}/>
        <Description>
          Now you can create your first menu.<br/>Good Luck!
        </Description>
        <SubmitButton onClick={done}>Done</SubmitButton>
      </>

)