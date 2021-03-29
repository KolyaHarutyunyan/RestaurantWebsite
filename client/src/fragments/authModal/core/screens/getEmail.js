import { Styled, Title, useAuthStyles } from "..";
import { SVGNames } from "@eachbase/constants";
import { change, check } from "@eachbase/utils";
import { useEffect, useState } from "react";
import { Input } from "@eachbase/components";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store";


export const GetEmail = ({open}) => {
  let classes = useAuthStyles()
  let [userData, setUserData] = useState({
    email: {value: "", error: ""}
  })
  const dispatch = useDispatch();
  let handleSubmit = event => {
    event.preventDefault()

    if ( userData.email.value ){
      check.email(setUserData)
    }
    if( !userData.email.error ) {
      dispatch(authActions.checkEmail({user: {email: userData.email.value}}))
    }

  }
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if ( auth.key === "sanded" ) {
     open.Verify({email: userData.email.value})
    }
  }, [auth.key])
  console.log(auth)
  return (
    <>
      <Title beforeText={"Forgot your Password?"}/>
      <Styled.Description>Enter your email address and we'll send you a verification code to reset your
        password.</Styled.Description>
      <Styled.FormBlock onSubmit={e => handleSubmit(e)}>
        <Input.email
          icon={SVGNames.Email}
          {...userData.email}
          onChange={value => change.email(value, setUserData)}
          onBlur={() => check.email(setUserData)}
          placeholder="Email"
        />

        {
          auth.error && <Styled.Description red>{auth.error}</Styled.Description>
        }
        <Button className={classes.submit} onClick={e => handleSubmit(e)} onSubmit={e => handleSubmit(e)}>
          Continue
        </Button>
      </Styled.FormBlock>

    </>
  )
}