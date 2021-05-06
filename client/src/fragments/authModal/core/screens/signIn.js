import { Fragment } from "react";
import { Socials, Styled, Title, useAuthStyles } from "..";
import { CONSTANTS } from "@eachbase/constants";
import { Change } from "@eachbase/components";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@eachbase/components";

export const SignIn = ({ open, close }) => {
  const classes = useAuthStyles();

  const [userData, setUserData] = useState({
    email: { value: "", error: null },
    password: { value: "", error: null },
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const auth = useSelector(({ auth = {} }) => auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      close();
    }
  }, [auth.isAuthenticated]);

  return (
    <Fragment>
      <Title afterText="Welcome to Menuz" />
      <Styled.FormBlock onSubmit={(e) => handleSubmit(e)}>
        <Input.Email
          icon={CONSTANTS.SVGNames.Email}
          {...userData.email}
          onChange={(value) => Change.email(value, setUserData)}
          placeholder="Email"
        />
        <Input.Password
          icon={CONSTANTS.SVGNames.Password}
          {...userData.password}
          onChange={(value) => Change.text(value, "password", setUserData)}
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

      <Button
        className={classes.lineBtn + " dark mt16"}
        onClick={open.GetEmail}
      >
        {" "}
        Forgot Password?{" "}
      </Button>

      <Styled.Or>
        <p>OR</p>
      </Styled.Or>
      <Socials type={"Sign in"} />
      <Button className={classes.lineBtn} onClick={open.SignUp}>
        {" "}
        Doesn't have an account? Sign Up
      </Button>
    </Fragment>
  );
};
