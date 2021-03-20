import { Form, Title, useAuthStyles } from ".";
import {change,check} from "@eachbase/utils"
import { useState } from "react";


export const GetRestaurant = () => {
  let [restaurantData, setRestaurantData] = useState({
    name: {value: "", error: null},
    description: {value: "", error: null},
    logo: {value: "", error: null}
  })

  let classes = useAuthStyles()
  let formData = {
    inputs: [
      {
        key: 0,
        type: "text",
        ...restaurantData.name,
        onChange: value => change.text("name",value, setRestaurantData),
        onBlur: () => check.text("name",setRestaurantData),
        placeholder: "Add your Restaurant Name ",
        important:true,
        brd:8,
      },
      // {
      //   key: 1,
      //   type: "password",
      //   icon: SVGNames.Password,
      //   ...userData.password,
      //   onChange: value => changePass(value, setUserData),
      //   onBlur: () => checkIsPass(setUserData),
      //   placeholder: "Password",
      // }

    ],
    submit: {
      event: event => {
        event.preventDefault()
        console.log("submit")
      },
      text: "Save",
      className: classes.submit+" brd8"
    }
  }

  return (
    <>
      <Title afterText="Last Step to Sign Up"/>
      <Form data={formData}/>
    </>
  )

}