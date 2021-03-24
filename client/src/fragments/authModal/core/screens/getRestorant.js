import { Form, Title, useAuthStyles } from "..";
import { change, check } from "@eachbase/utils"
import { useEffect, useState } from "react";
import { authActions } from "@eachbase/store";
import { useDispatch, useSelector } from "react-redux";


export const GetRestaurant = ({close, open, user}) => {
  let [restaurantData, setRestaurantData] = useState({
    name: {value: "", error: null},
    description: {value: "", error: null},
    logo: {value: "", error: null}
  })

  const dispatch = useDispatch();
  let classes = useAuthStyles()
  let handlerSubmit = event => {
    event.preventDefault()
    if ( !restaurantData.name.error && !restaurantData.description.error && !restaurantData.logo.error ) {
      user = {
        ...user,
        name: restaurantData.name.value,
        description: restaurantData.description.value,
        logo: restaurantData.logo.value
      };
      dispatch(authActions.signUp({user}))
      open.getRestaurant({notCloseBtn: true, user})
    }
  }

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
      event: handlerSubmit,
      text: "Save",
      className: classes.submit + " brd8"
    }
  }
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
  }, [auth.done])


  return (
    <>
      <Title afterText="Last Step to Sign Up"/>
      <Form data={formData}/>
    </>
  )

}