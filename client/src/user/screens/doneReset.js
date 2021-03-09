import { memo } from "react"
import { Title } from "./detals/title"
import { Description, SubmitButton } from "./styles/screens.style"

export const DoneReset = memo(
  ({done})=>{


    return(
      <>
        <Title logo beforeText={"Password Reset"}/>
        <Description>
          Your Password has been reset successfully.
        </Description>
        <SubmitButton onClick={done}>verify</SubmitButton>
      </>
    )
  }
)