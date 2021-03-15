import { memo } from "react";
import { Box } from "@material-ui/core";
import { ForgotButton,  TitleDivider } from "../styles/screens.style";
import { socialData } from "../../utils/socialData";
import { SVGNames } from "../../../context/constants/svgNames";
import { Title } from "../detals/title";
import { Socials } from "../detals/socials";
import { Form } from "../detals/forms";
import { LineButton } from "../detals/lineButton";

let socials = socialData("Sign in with your social media account")

export const SignIn = memo(
  ( {className, changePosition} ) => {

    let formData = {
      inputs: [

        {
          key: 0,
          type: "email",
          icon: SVGNames.email,
          value: "",
          onChange: () => {
          },
          onFocus: () => {
          },
          onBlur: () => {
          },
          placeholder: "Email",
        },
        {
          key: 1,
          type: "password",
          icon: SVGNames.email,
          value: "",
          onChange: () => {
          },
          onFocus: () => {
          },
          onBlur: () => {
          },
          placeholder: "Email",
        }

      ],
      submit:{
        event: event => {
          event.preventDefault()
          console.log("submit")
        },
        text:"Continue",
        className:""
      }
    }



    const gotoSignUp = () => {
      console.log("go to sign up")
      changePosition(2)
    }
    const gotoForgot = () => {
      changePosition(1)
    }
    return (
      <Box className={className}>

        <Title afterText="Welcome to Menuz" logo/>

        <Form data={formData} />

        <ForgotButton onClick={gotoForgot}>Forgot Password?</ForgotButton>
        <TitleDivider>
          <p>OR</p>
        </TitleDivider>
        <Socials data={socials}/>

        <LineButton afterText={"Doesn't have an account?"} activeText={"SIGN UP"} action={gotoSignUp}/>

      </Box>
    )
  }
)
















