import { Styled, Title, useAuthStyles } from "..";
import { CONSTANTS } from "@eachbase/constants";
import { Change, Check } from "@eachbase/components";
import { useEffect, useState } from "react";
import { Input } from "@eachbase/components";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

export const GetEmail = ({ open }) => {
  let classes = useAuthStyles();
  const [userData, setUserData] = useState({
    email: { value: "", error: "" },
  });
  const dispatch = useDispatch();
  let handleSubmit = (event) => {
    event.preventDefault();

    if (userData.email.value) {
      Check.email(setUserData);
    }
    if (!userData.email.error) {
    }
  };
  const auth = useSelector(({ auth = {} }) => state.auth);
  useEffect(() => {
    if (auth.key === "sanded") {
      open.Verify({ email: userData.email.value });
    }
  }, [auth.key]);

  return (
    <>
      <Title beforeText={"Forgot your Password?"} />
      <Styled.Description>
        Enter your email address and we'll send you a verification code to reset
        your password.
      </Styled.Description>
      <Styled.FormBlock onSubmit={(e) => handleSubmit(e)}>
        <Input.email
          icon={CONSTANTS.SVGNames.Email}
          {...userData.email}
          onChange={(value) => Change.text(value, "email", setUserData)}
          onBlur={() => Check.email(setUserData)}
          placeholder="Email"
        />

        {auth.error && (
          <Styled.Description red>{auth.error}</Styled.Description>
        )}
        <Button
          className={classes.submit}
          onClick={(e) => handleSubmit(e)}
          onSubmit={(e) => handleSubmit(e)}
        >
          Continue
        </Button>
      </Styled.FormBlock>
    </>
  );
};
