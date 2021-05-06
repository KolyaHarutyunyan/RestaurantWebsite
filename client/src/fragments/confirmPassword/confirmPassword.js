import { useState } from "react";
import { Icon, Input, Button, PageTitle } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";
import { Change, Check, InputTypes, CheckForm } from "@eachbase/components";
import { Styled } from "./core";

let dataType = {
  newPass: "newPass",
  confirmPass: "confirmPass",
};
export const ConfirmPassword = ({ type, authToken }) => {
  const [userData, setUserData] = useState((type) =>
    type === "verify"
      ? {
          [dataType.newPass]: {
            ...InputTypes.password,
            dataType: dataType.newPass,
            placeholder: "Password",
          },
        }
      : {
          [dataType.newPass]: {
            ...InputTypes.password,
            dataType: dataType.newPass,
            placeholder: "New Password",
          },
          [dataType.confirmPass]: {
            ...InputTypes.password,
            dataType: dataType.confirmPass,
            placeholder: "Confirm New Password",
          },
        }
  );

  let handlerSubmit = () => {
    if (!CheckForm(setUserData)) {
      console.log("rewrite your data");
      return 0;
    }
    if (
      userData[dataType.newPass].value !== userData[dataType.confirmPass].value
    ) {
      setUserData({
        ...userData,
        [dataType.confirmPass]: {
          ...userData[dataType.confirmPass],
          error: "passwords is not matched",
        },
        [dataType.newPass]: {
          ...userData[dataType.newPass],
          error: "      ",
        },
      });
    }
    let user =
      type === "reset"
        ? {
            authToken,
            newPassword: userData[dataType.newPass].value,
            confirmPassword: userData[dataType.confirmPass].value,
          }
        : {
            authToken,
            password: userData[dataType.newPass].value,
          };

    console.log({
      ...userData,
      authToken,
    });
  };
  let title = type === "reset" ? "Reset Password" : "Verify Your Account";
  let Description =
    type === "reset" ? (
      <>
        Enter your new password.
        <br /> Use at least 8 characters, 1 upper case and 1 digit.
      </>
    ) : (
      "Enter your password."
    );
  console.log(userData);
  return (
    <Styled.Content>
      <Icon name={SVGNames.Logo} />
      <PageTitle>{title}</PageTitle>
      <Styled.Block>
        <Styled.BlockDescription>{Description}</Styled.BlockDescription>

        <Input
          icon={SVGNames.Password}
          {...userData[dataType.newPass]}
          setState={setUserData}
        />

        {type === "reset" && (
          <Input
            icon={SVGNames.Password}
            {...userData[dataType.confirmPass]}
            setState={setUserData}
          />
        )}
        <Button.Accept onClick={handlerSubmit}>Sign In</Button.Accept>
      </Styled.Block>
    </Styled.Content>
  );
};
