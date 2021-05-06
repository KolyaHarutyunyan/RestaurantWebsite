import { Title, useAuthStyles } from "..";
import { Change, Check } from "@eachbase/components";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export const GetRestaurant = ({ close, open, user }) => {
  const [restaurantData, setRestaurantData] = useState({
    name: { value: "", error: null },
    description: { value: "", error: null },
    logo: { value: "", error: null },
  });

  const dispatch = useDispatch();
  let classes = useAuthStyles();
  let handlerSubmit = (event) => {
    event.preventDefault();
    if (
      !restaurantData.name.error &&
      !restaurantData.description.error &&
      !restaurantData.logo.error
    ) {
      user = {
        ...user,
        name: restaurantData.name.value,
        description: restaurantData.description.value,
        logo: restaurantData.logo.value,
      };
      open.getRestaurant({ notCloseBtn: true, user });
    }
  };

  let formData = {
    inputs: [
      {
        key: 0,
        type: "text",
        ...restaurantData.name,
        onChange: (value) => Change.text(value, "name", setRestaurantData),
        onBlur: () => Check.text("name", setRestaurantData),
        placeholder: "Add your Restaurant Name ",
        important: true,
        brd: 8,
      },
      {
        key: 0,
        type: "textarea",
        blockTitle: "Optional",
        ...restaurantData.description,
        onChange: (value) =>
          Change.text(value, "description", setRestaurantData),
        onBlur: () => Check.text("description", setRestaurantData),
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
      },
    ],
    submit: {
      event: handlerSubmit,
      text: "Save",
      className: classes.submit + " brd8",
    },
  };
  const auth = useSelector((state) => state.auth);

  useEffect(() => {}, [auth.done]);

  return (
    <>
      <Title afterText="Last Step to Sign Up" />
      {/*<Form data={formData}/>*/}
    </>
  );
};
