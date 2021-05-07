import { Styled, Title, useAuthStyles } from "..";
import { CONSTANTS } from "@eachbase/constants";
// import { change, check } from "@eachbase/components";
import { useState } from "react";

export const ResetPass = ({ open }) => {
  let classes = useAuthStyles();
  const [userData, setUserData] = useState({
    pass1: { value: "", error: "" },
    pass2: { value: "", error: "" },
  });
  const formData = {
    inputs: [
      {
        key: 0,
        type: "password",
        ...userData.pass1,
        placeholder: "new password",
      },
      {
        key: 1,
        type: "password",
        ...userData.pass2,
        placeholder: "conform password",
      },
    ],
    submit: {
      event: (event) => {
        event.preventDefault();
        open.done({ type: "password" });
      },
      text: "Get Code",
      className: classes.submit,
    },
  };

  return (
    <>
      <Title beforeText={"Reset Password"} />
      <Styled.Description>
        Enter your new password. Use at least 8 characters, 1 upper case and 1
        digit.
      </Styled.Description>
    </>
  );
};
