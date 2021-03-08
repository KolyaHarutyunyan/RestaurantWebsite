import { memo, useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import { Title } from "./detals/title";
import { FormBuilder } from "./detals/formBuilder";
import { LineButton } from "./detals/lineButton";
import { TitleDivider } from "./detals/formBuilder/styles/style";
import { Socials } from "./detals/socials";
import { SVGNames } from "../../constants/svgNames";
import { Policy } from "./detals/policy";
import { DoneSignUp } from "./detals/doneSignUp";

export const SignUp = memo(
  ({pos,changePosition,close}) => {
    let {authBox} = useStyles()
    let [status,setStatus] = useState(0)

    let formData = [

      {
        key:0,
        type:"text",
        icon:SVGNames.email,
        value:"",
        onChange :() => {},
        onFocus : () => {
        }, onBlur : () => {
        },placeholder:"Full Name",
      },
      {
        key:1,
        type:"email",
        icon:SVGNames.email,
        value:"",
        onChange :() => {},
        onFocus : () => {
        }, onBlur : () => {
        },placeholder:"Email",
      },
      {
        key:2,
        type:"password",
        icon:SVGNames.email,
        value:"",
        onChange :() => {},
        onFocus : () => {
        }, onBlur : () => {
        },placeholder:"Email",
      }

    ]
    let socialData={
      title:"Sign up with your social media account",
      icons:[
        {
          "link": "/auth/google",
          "icon": "googleColor"
        },
        {
          "link": "/auth/facebook",
          "icon": "facebook"
        },
        {
          "link": "/auth/twitter",
          "icon": "twitter"
        },
      ]
    }


    const submit = event =>{
      setStatus(1)
      event.preventDefault()
      console.log("submit")
    }
    const done = event =>{

      setStatus(1)
      event.preventDefault()
      console.log("done")
      close()
    }

    const gotoSignIn = ()=>{
      console.log("go to sign up")
      changePosition(0)
    }
    const gotoForgot = ()=>{
      changePosition(1)

    }
    return (
      <Box className={authBox+(pos!==0?" disabled":" active")}>
        {
          status === 0
            ?<>

              <Title afterText ="Welcome to Menuz" logo/>

              <FormBuilder data={formData} onSubmit={submit} submitText={"Continue"}/>

              <TitleDivider>
                <p>OR</p>
              </TitleDivider>
              <Socials data={socialData}/>
              <Policy/>
          </>
            :null
        }
        {
          status === 1
          ?<DoneSignUp done={done}/>
            :null
        }



      </Box>
    )
  }
)