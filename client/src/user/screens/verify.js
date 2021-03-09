import { memo } from "react"
import { Title } from "./detals/title"
import { Description, SubmitButton } from "./styles/screens.style"


export const Verify  = memo(
  ({email,verify})=>{


    return(
      <>
        <Title logo beforeText={"Verification Code"}/>
        <Description>
          Enter the verification code sent to <span>{email}</span>
        </Description>
        <SubmitButton onClick={verify}>verify</SubmitButton>
      </>
    )
  }
)