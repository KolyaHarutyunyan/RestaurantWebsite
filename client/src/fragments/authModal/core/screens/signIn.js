import { Form, OR, Socials, Title, useAuthStyles } from ".."
import { SVGNames } from "@eachbase/constants"
import {check ,change } from "@eachbase/utils"
import { Button } from "@material-ui/core"
import { useState } from "react"


export const SignIn = ( {open} ) => {

  let classes = useAuthStyles()

  let [userData, setUserData] = useState({
    email: {value: "", error: null},
    password: {value: "", error: null}
  })

  let formData = {
    inputs: [
      {
        key: 0,
        type: "email",
        icon: SVGNames.Email,
        ...userData.email,
        onChange:value=>change.email(value,setUserData),
        onBlur:()=>check.email(setUserData),
        placeholder: "Email",
      },
      {
        key: 1,
        type: "password",
        icon: SVGNames.Password,
        ...userData.password,
        onChange: value=>change.pass(value,setUserData),
        onBlur:()=>check.pass(setUserData),
        placeholder: "Password",
      }

    ],
    submit: {
      event: event => {
        event.preventDefault()
        console.log("submit")

      },
      text: "Continue",
      className: classes.submit
    }
  }

  let getEmail = ()=>open.getEmail({notCloseBtn:true,hasBackBtn:true,backTo:"signIn"})

  return (

    <>
      <Title afterText="Welcome to Menuz" />
      <Form data={formData}/>
      <Button className={classes.lineBtn+" dark"} onClick={getEmail}> Forgot Password? </Button>
      <OR/>
      <Socials type={"Sign in"}/>
      <Button className={classes.lineBtn} onClick={open.signUp}> Doesn't have an account? Sign Up</Button>
    </>
  )
}
