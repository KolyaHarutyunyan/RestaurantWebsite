import { Container } from "./style";
import { Input, Typography, Button, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileService } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const { open } = useModal();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [onLoad, setOnLoad] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    if (data.email) {
      setOnLoad(true);
      profileService
        .forgotPassword(data.email)
        .then((res) => open(MODAL_NAMES.CHECK_EMAIL_HELPER))
        .catch((err) => {
          setOnLoad(false);
          setError(true);
          setErrorMessage(
            "We dont have registered user with this email address"
          );
        });
    } else {
      setError(true);
      setErrorMessage("Write in this field you'r email address");
    }
  };

  return (
    <Container>
      <Icons.LogoIcon className="logo" />
      <Typography color="text" weight="bold" size={"1.250rem"}>
        Forgot your password?
      </Typography>
      <Typography color="text" className="helper">
        Enter your email address and we'll send you a verification code to reset
        your password.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          icon={<Icons.EmailIcon />}
          placeholder="Email"
          error={error}
          helper={errorMessage}
          {...register("email")}
        />
        <Button fullWidth type="submit" disabled={onLoad}>
          Get Code
        </Button>
      </form>
    </Container>
  );
};
