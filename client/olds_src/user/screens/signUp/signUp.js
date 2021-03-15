import { memo, useState } from "react"
import { Box } from "@material-ui/core"
import { socialData } from "../../utils/socialData"
import { Title } from "../detals/title"
import { Form } from "../detals/forms"
import { TitleDivider } from "../styles/screens.style"
import { Socials } from "../detals/socials"
import { SVGNames } from "../../../context/constants/svgNames";
import { DoneSignUp } from "./doneSignUp";
import { GetRestaurant } from "./getRestaurant";

let socials = socialData("Sign Up with your social media account")


export const SignUp = memo(
  ( {className, changePosition, close} ) => {

    let [status, setStatus] = useState(0)

    let formData = {
      inputs: [
        {
          key: 0,
          type: "text",
          icon: SVGNames.email,
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
          icon: SVGNames.email,
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
          icon: SVGNames.email,
          value: "",
          onChange: () => {
          },
          onFocus: () => {
          }, onBlur: () => {
          }, placeholder: "Email",
        }
      ],
      submit: {
        event:event => {
          setStatus(1)
          event.preventDefault()
          console.log("submit")
        },
        text:"Continue",
        className:""
      }
    }


    const creatRestaurant = ()=>{
      setStatus(2)
      console.log("get restaurant")

    }
    const done = event => {

      event.preventDefault()
      console.log("done")
      close()
    }

    // const gotoSignIn = () => {
    //   console.log("go to sign up")
    //   changePosition(0)
    // }
    // const gotoForgot = () => {
    //   changePosition(1)
    //
    // }
    return (
      <Box className={className}>
        {
          status === 0
            ? <>

              <Title afterText="Welcome to Menuz" logo/>

              <Form data={formData}/>

              <TitleDivider>
                <p>OR</p>
              </TitleDivider>
              <Socials data={socials}/>
              {/*<Policy/>*/}
            </>
            : null
        }
        {
          status === 1
            ? <GetRestaurant creatRestaurant={creatRestaurant}/>
            : null
        } {
          status === 2
            ? <DoneSignUp done={done}/>
            : null
        }


      </Box>
    )
  }
)