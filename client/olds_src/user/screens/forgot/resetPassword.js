import { memo } from "react"
import { Title } from "../detals/title"
import { Description, SubmitButton } from "../styles/screens.style"


export const ResetPassword = memo(
  ({changePass})=>{


    return(
      <>
        <Title logo beforeText={"Reset Password"}/>
        <Description>
          Enter your new password. Use at least 8 characters, 1 upper case and 1 digit.
        </Description>
        <SubmitButton onClick={changePass}>verify</SubmitButton>
      </>
    )
  }
)