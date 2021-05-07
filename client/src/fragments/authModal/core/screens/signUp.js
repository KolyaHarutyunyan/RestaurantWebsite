import { Title, Socials, useAuthStyles, Styled } from "..";
import { Button } from "@material-ui/core";
import { CONSTANTS } from "@eachbase/constants";
import { Input } from "@eachbase/components";
import { useEffect, useState } from "react";
import { Change, Check } from "@eachbase/components";
import { useDispatch, useSelector } from "react-redux";

let clicked = false;

export const SignUp = ({ open }) => {
  let classes = useAuthStyles();
  const [userData, setUserData] = useState({
    email: { value: "", error: null },
    password: { value: "", error: null },
    fullName: { value: "", error: null },
  });

  const dispatch = useDispatch();
  const auth = useSelector(({ auth = {} }) => auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    if (
      !userData.email.value ||
      !userData.password.value ||
      !userData.fullName.value
    ) {
      Check.email(setUserData);
      Check.text("fullName", setUserData);
      Check.pass(setUserData);
      console.log("check error");
    }
    if (
      !userData.fullName.error &&
      !userData.email.error &&
      !userData.password.error
    ) {
      const user = {
        email: userData.email.value,
        password: userData.password.value,
        fullName: userData.fullName.value,
      };
    }
  };

  useEffect(() => {
    console.log("check auth");
    if (auth.isAuthenticated) {
      open.GetRestaurant();
    }
  }, [auth.isAuthenticated]);

  // console.log("auth in sign up",auth)
  return (
    <>
      <Title afterText="Welcome to Menuz" />
      <Styled.FormBlock onSubmit={(e) => handleSubmit(e)}>
        <Input.text
          {...userData.fullName}
          onChange={(value) => Change.text(value, "fullName", setUserData)}
          onBlur={() => Check.text("fullName", setUserData)}
          placeholder="Full Name"
        />
        <Input.email
          {...userData.email}
          onChange={(value) => Change.text(value, "email", setUserData)}
          onBlur={() => Check.email(setUserData)}
          placeholder="Email"
        />
        <Input.pass
          {...userData.password}
          onChange={(value) => Change.text(value, "password", setUserData)}
          onBlur={() => Check.pass(setUserData)}
          placeholder="Password"
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

      <Styled.Or>
        <p>OR</p>
      </Styled.Or>
      <Socials type={"Sign up"} />
      <Button className={classes.lineBtn + " mt24"} onClick={open.SignIn}>
        {" "}
        Already have an account? Sign In
      </Button>
      <Styled.Description mt={24}>
        By signing up, you agree to{" "}
        <Button className={classes.lineBtn}>Terms of Use</Button> and{" "}
        <Button className={classes.lineBtn}>Privacy Policy</Button>
      </Styled.Description>
    </>
  );
};
