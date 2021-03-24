import { Title, Form, OR, Socials, useAuthStyles, Styled } from "..";
import { Button } from "@material-ui/core";
import { SVGNames } from "@eachbase/constants";
import { useState } from "react";
import { change ,check } from "@eachbase/utils"
import { useDispatch } from "react-redux";
import { authActions } from "@eachbase/store";


export const SignUp = ( {open} ) => {
  let classes = useAuthStyles()
  let [userData, setUserData] = useState({
    email: {value: "", error: null},
    password: {value: "", error: null},
    fullName: {value: "", error: null}
  })

  const dispatch = useDispatch();
  const handleSubmit =  event => {

    event.preventDefault()
    console.log("submit")
    if(!userData.fullName.error &&!userData.email.error && !userData.password.error){
      const user = {
        email: userData.email.value,
        password: userData.password.value,
        fullName: userData.fullName.value
      };
      // dispatch(authActions.signUp({user}))
      open.getRestaurant({notCloseBtn:true,user})
    }
  }
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
      event:        handleSubmit,
      text: "Continue",
      className: classes.submit
    }
  }

  return (
    <>
      <Title afterText="Welcome to Menuz" />
      <Form data={formData}/>
      <Styled.Or><p>OR</p></Styled.Or>
      <Socials type={"Sign up"}/>
      <Button className={classes.lineBtn+" mt24"} onClick={() => open.signIn()}> Already have an account? Sign In</Button>
      <Styled.Description mt={24}>By signing up, you agree to <Button className={classes.lineBtn}>Terms of Use</Button> and  <Button className={classes.lineBtn}>Privacy Policy</Button></Styled.Description>
    </>
  )
}
