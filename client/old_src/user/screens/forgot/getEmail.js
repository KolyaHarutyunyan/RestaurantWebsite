import { memo } from "react";

import { Form } from "../detals/forms";
import { Title } from "../detals/title";
import { Description } from "../styles/screens.style";
import { SVGNames } from "../../../context/constants/svgNames";

export const GetEmail = memo(
  ({submit})=>{
    let formData = {
      inputs: [
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
        }

      ],
      submit:{
        event:submit,
        text:"Get Code",
        className:""
      }
    }


    return(
      <>
        <Title logo beforeText={"GetEmail your Password?"}/>
        <Description>
          Enter your email address and we'll send you a verification code to reset your password.
        </Description>
        <Form data={formData}  />
      </>
    )
  }
)