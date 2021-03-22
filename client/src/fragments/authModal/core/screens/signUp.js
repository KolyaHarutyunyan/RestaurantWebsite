import { Title, Form, OR, Socials, useAuthStyles } from "..";
import { Button } from "@material-ui/core";
import { SVGNames } from "@eachbase/constants";
import { useState } from "react";
import { change ,check } from "@eachbase/utils"


export const SignUp = ( {open} ) => {
  let classes = useAuthStyles()
  let [userData, setUserData] = useState({
    email: {value: "", error: null},
    password: {value: "", error: null},
    fullName: {value: "", error: null}
  })


  let formData = {
    inputs: [
      {
        key: 0,
        type: "text",
        icon: SVGNames.Profile,
        ...userData.fullName,
        onChange: value =>change.text("fullName",value,setUserData),
        onBlur: () => check.text("fullName",setUserData),

        placeholder: "Full Name",
      },
      {
        key: 1,
        type: "email",
        icon: SVGNames.Email,
        ...userData.email,
        onChange: value => change.email(value, setUserData),
        onBlur: () => check.email(setUserData),
        placeholder: "Email",
      },
      {
        key: 2,
        type: "password",
        icon: SVGNames.Password,
        ...userData.password,
        onChange: value => change.pass(value, setUserData),
        onBlur:()=>check.pass(setUserData),
        placeholder: "Password",
      }
    ],
    submit: {
      event: event => {
        open.getRestaurant({notCloseBtn:true})
        event.preventDefault()
        console.log("submit")

      },
      text: "Continue",
      className: classes.submit
    }
  }

  return (
    <>
      <Title afterText="Welcome to Menuz" />
      <Form data={formData}/>
      <OR/>
      <Socials type={"Sign up"}/>
      <Button className={classes.lineBtn} onClick={() => open.signIn()}> Already have an account? Sign In</Button>
    </>
  )
}
