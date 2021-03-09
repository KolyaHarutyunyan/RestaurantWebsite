import { memo } from "react";
import { Title } from "./title";



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