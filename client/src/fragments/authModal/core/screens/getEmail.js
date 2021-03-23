import { Form, Styled, Title, useAuthStyles } from "..";
import { SVGNames } from "@eachbase/constants";
import { change, check } from "@eachbase/utils";
import { useState } from "react";


export const GetEmail = ({open}) => {
  let classes = useAuthStyles()
  let [userData, setUserData] = useState({
    email: {value: "", error: ""}
  })
  let formData = {
    inputs: [
      {
        key: 0,
        type: "email",
        icon: SVGNames.Email,
        ...userData.email,
        onChange: value => change.email(value, setUserData),
        onBlur: () => check.email(setUserData),
        placeholder: "Email",
      },


    ],
    submit: {
      event: event => {
        event.preventDefault()
        console.log("submit")
        open.verify({email:userData.email.value})
      },
      text: "Get Code",
      className: classes.submit
    }
  }
  return (
    <>
      <Title beforeText={"Forgot your Password?"}/>
      <Styled.Description>Enter your email address and we'll send you a verification code to reset your
        password.</Styled.Description>
      <Form data={formData}/>
    </>
  )
}