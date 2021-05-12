import { Container } from "./style";
import { Input, Typography, Button, Fab, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, PROFILE_SIGN_IN } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const { activeModal, close } = useModal();

  const { profile, error, onLoad } = useSelector(
    ({ profile, http_requests_on_load, http_errors }) => ({
      profile,
      onLoad: !!http_requests_on_load.find((type) => type === PROFILE_SIGN_IN),
      error: http_errors.find((err) => err.type === PROFILE_SIGN_IN) || null,
    })
  );

  useEffect(() => {
    if (profile && activeModal === MODAL_NAMES.SIGN_IN) {
      close();
    }
  }, [profile]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(profileActions.signIn(data));
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
          {...register("email")}
          error={error}
        />
        <Button fullWidth type="submit" disabled={onLoad}>
          Get Code
        </Button>
      </form>
    </Container>
  );
};
