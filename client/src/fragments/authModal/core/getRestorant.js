import { Form, Title, useAuthStyles } from ".";
import { change, check } from "@eachbase/utils"
import { useState } from "react";


export const GetRestaurant = ({close}) => {
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
        onChange: value => change.text("name", value, setRestaurantData),
        onBlur: () => check.text("name", setRestaurantData),
        placeholder: "Add your Restaurant Name ",
        important: true,
        brd: 8,
      },
      {
        key: 0,
        type: "textarea",
        blockTitle: "Optional",
        ...restaurantData.description,
        onChange: value => change.text("description", value, setRestaurantData),
        onBlur: () => check.text("description", setRestaurantData),
        placeholder: "Add Brief Description",
        blockDescription: "Max 500 characters",
        brd: 8,
      },
      {
        key: 2,
        type: "file",
        // icon: SVGNames.Password,
        // ...userData.password,
        // onChange: value => changePass(value, setUserData),
        // onBlur: () => checkIsPass(setUserData),
        placeholder: "Password",
        brdType: "dashed",
        brd: 8,

      }

    ],
    submit: {
      event: event => {
        event.preventDefault()
        console.log("submit")
        close()
      },
      text: "Save",
      className: classes.submit + " brd8"
    }
  }

  return (
    <>
      <Title afterText="Last Step to Sign Up"/>
      <Form data={formData}/>
    </>
  )

}