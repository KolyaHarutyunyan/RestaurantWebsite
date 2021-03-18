import { Title, Form, OR,Socials,useAuthStyles } from ".";
import { Button } from "@material-ui/core";
import { SVGNames } from "@eachbase/constants";

export const SignUp = ( {open} ) => {
  let classes = useAuthStyles()
  let formData = {
    inputs: [
      {
        key: 0,
        type: "text",
        icon: SVGNames.Profile,
        value: "",
        onChange: () => {
        },
        onFocus: () => {
        }, onBlur: () => {
        }, placeholder: "Full Name",
      },
      {
        key: 1,
        type: "email",
        icon: SVGNames.Email,
        value: "",
        onChange: () => {
        },
        onFocus: () => {
        }, onBlur: () => {
        }, placeholder: "Email",
      },
      {
        key: 2,
        type: "password",
        icon: SVGNames.Password,
        value: "",
        onChange: () => {
        },
        onFocus: () => {
        }, onBlur: () => {
        }, placeholder: "Password",
      }
    ],
    submit: {
      event:event => {
        open.getRestaurant()
        event.preventDefault()
        console.log("submit")
      },
      text:"Continue",
      className:classes.submit
    }
  }

  return (
    <>
      <Title afterText="Welcome to Menuz" logo/>
      <Form data={formData}/>
      <OR/>
      <Socials type={"Sign up"}/>
      <Button className={classes.lineBtn} onClick={() => open.signIn()}> Already have an account? Sign In</Button>
    </>
  )
}
