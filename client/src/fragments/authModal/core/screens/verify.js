import { Title, Styled, useAuthStyles, VerifyKeyLength } from "..";
import { Button } from "@material-ui/core";
import { Input } from "@eachbase/components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Verify = ({ open, email }) => {
  email = email || "test@test.com";
  let classes = useAuthStyles();

  const [verifyKey, setVerifyKey] = useState({ value: "", error: "" });
  const dispatch = useDispatch();
  let handleSubmit = (event) => {
    event.preventDefault();

    if (!verifyKey.error) {
    }
  };
  const auth = useSelector(({ auth = {} }) => auth);
  useEffect(() => {
    // if ( auth.key === "checked" ) {
    open.ResetPass();
    // }
  }, [auth.key]);
  return (
    <>
      <Title beforeText="Verification Code" />
      <Styled.Description>
        Enter the verification code sent to <span>{email}</span>
      </Styled.Description>
      <Input.verify
        verifyKeyLength={VerifyKeyLength}
        verifyKey={verifyKey.value}
        error={verifyKey.error}
        onChange={setVerifyKey}
      />
      <Styled.Description>
        If you don't receive a code{" "}
        <Button onClick={() => console.log("resend")}>Resend</Button>
      </Styled.Description>
      <Button className={classes.submit} onClick={handleSubmit}>
        Verify
      </Button>
    </>
  );
};
