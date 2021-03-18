import { Form, OR, Socials, Title, useAuthStyles } from ".";
import { SVGNames } from "@eachbase/constants";
import { Button } from "@material-ui/core";
import { useState } from "react";


export const SignIn = ( {open} ) => {

  let classes = useAuthStyles()

  let [userData, setUserData] = useState({
    email: {value: "", error: null},
    password: {value: "", error: null}
  })


  let changeEmail = value => {
    setUserData(current => ( {
      ...current,
      email: {
        ...current.email,
        value
      }
    } ))
  }
  let changePass = value => {
    setUserData(current => ( {
      ...current,
      password: {
        ...current.password,
        value
      }
    } ))
  }
  let emailTest = email =>/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  let checkIsEmail = ()=>{
    setUserData(current => {
      console.log("current state is: ",current)
      return ( {
        ...current,
        email: {
          ...current.email,
          error: emailTest(current.email.value) ? null : "please check your email"
        }
      } )
    })
  }
  console.log(emailTest(userData.email.value))
  console.log(userData)

  let formData = {
    inputs: [
      {
        key: 0,
        type: "email",
        icon: SVGNames.Email,
        ...userData.email,
        onChange:changeEmail,
        onBlur:checkIsEmail,
        placeholder: "Email",
      },
      {
        key: 1,
        type: "password",
        icon: SVGNames.Password,
        ...userData.password,
        onChange: changePass,
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

  return (

    <>
      <Title afterText="Welcome to Menuz" logo/>
      <Form data={formData}/>
      <OR/>
      <Socials type={"Sign in"}/>
      <Button className={classes.lineBtn} onClick={() => open.signUp()}> Doesn't have an account? Sign Up</Button>
    </>
  )
}
