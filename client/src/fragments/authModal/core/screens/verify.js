import { Title,Styled } from "..";
import { Button } from "@material-ui/core";

export const Verify = ({open,email}) =>{
	return(
		<>
		<button onClick={open.getEmail}></button>
			<Title beforeText="Verification Code"/>
			<Styled.Description>Enter the verification code sent to <span>{email}</span></Styled.Description>
			<Styled.Description>If you don't receive a code  <Button  onClick={()=>console.log("resend")}>Resend</Button></Styled.Description>
		<h1>{email}</h1>
</>
	)
}