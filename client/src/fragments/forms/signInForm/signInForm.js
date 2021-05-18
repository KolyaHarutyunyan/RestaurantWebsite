import { Container } from "./style";
import { Input, Typography, Button, Fab, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const SignInForm = () => {
  const { open, close } = useModal();

  const profile = useSelector((state) => state.profile);
  const { status, destroy, dispatch } = useSagaStore(profileActions.signIn);

  useEffect(() => {
    return () => destroy.all();
  }, [profile]);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.all();
      close();
    }
  }, [status]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(data);

  return (
    <Container>
      <Typography color="text" weight="bold" size={"1.250rem"}>
        Welcome to Menuz
      </Typography>
      <Icons.LogoIcon className="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          icon={<Icons.EmailIcon />}
          placeholder="Email"
          {...register("email")}
          error={status.onError}
        />
        <Input
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password")}
          error={status.onError}
          helper={status.onError ? "incorrect username or password" : ""}
        />
        <Button fullWidth type="submit" disabled={status.onLoad}>
          Sign In
        </Button>
      </form>
      <Button
        link
        fullWidth
        inactive
        onClick={() => open(MODAL_NAMES.FORGOT_PASSWORD)}
      >
        Forgot Password?
      </Button>
      <div className="divider-or" />
      <Typography color="text">
        Sign in with your social media account
      </Typography>
      <div className="social">
        <Fab>
          <Icons.GoogleIcon />
        </Fab>
        <Fab>
          <Icons.FaceBookIcon />
        </Fab>
        <Fab>
          <Icons.TwitterIcon />
        </Fab>
      </div>
      <Button link fullWidth onClick={() => open(MODAL_NAMES.SIGN_UP)}>
        Doesn't have an account? Sign Up
      </Button>
    </Container>
  );
};
