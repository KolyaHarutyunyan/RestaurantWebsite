import { Title, Styled, useAuthStyles, VerifyInput } from "..";
import { Button } from "@material-ui/core";
import { useState } from "react";

export const Verify = ({open, email}) => {
  email = email || "test@test.com"
  let classes = useAuthStyles()
  let handlerSubmit = ()=> open.resetPass({});
  let [verifyKey,setVerifyKey] = useState({value:"",error:""})
  return (
    <>

      <Title beforeText="Verification Code"/>
      <Styled.Description>Enter the verification code sent to <span>{email}</span></Styled.Description>
      <VerifyInput verifyKey={verifyKey.value} error={verifyKey.error} onChange={setVerifyKey}/>
      <Styled.Description>If you don't receive a code <Button
        onClick={() => console.log("resend")}>Resend</Button></Styled.Description>
		  <Button className={classes.submit} onClick={handlerSubmit}>Verify</Button>
    </>
  )
}