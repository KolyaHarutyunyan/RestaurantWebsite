import { Input, Typography, Button, Fab, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { useEffect } from "react";

export const SignUpForm = () => {
  const { open } = useModal();
  const { status, dispatch, destroy } = useSagaStore(profileActions.signUp);

  const { register, handleSubmit } = useForm();

  useEffect(() => () => destroy.all(), []);
  useEffect(() => {
    if (status.onSuccess) {
      open(MODAL_NAMES.CREATE_RESTAURANT);
      destroy.all();
    }
  }, [status]);

  const onSubmit = (data) => dispatch(data);

  return (
    <Container>
      <Typography color="text" weight="bold" size="1.250rem">
        Welcome to Menuz
      </Typography>
      <Icons.LogoIcon className="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          icon={<BsPerson size={22} />}
          placeholder="Full Name"
          {...register("fullName", { required: true })}
          error={status.onError}
          helper={
            status.onError ? "Full name should be at least 3 characters" : ""
          }
        />
        <Input
          type="email"
          icon={<Icons.EmailIcon />}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Input
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          error={status.onError}
          helper={
            status.onError ? "Password should be at least 8 characters" : ""
          }
        />
        <Button fullWidth type="submit" onLoad={status.onLoad}>
          Continue
        </Button>
      </form>
      <Button
        link
        fullWidth
        color="default"
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
      <Button
        link
        color="action"
        fullWidth
        onClick={() => open(MODAL_NAMES.SIGN_IN)}
      >
        Already have an account? Sign In
      </Button>
    </Container>
  );
};
