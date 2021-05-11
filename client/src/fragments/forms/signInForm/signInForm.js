import { Container } from "./style";
import { Input, Typography, Button, Fab, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, PROFILE_SIGN_IN } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const SignInForm = () => {
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
        />
        <Input
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Button fullWidth type="submit" disabled={onLoad}>
          Sign In
        </Button>
      </form>
      <Button link fullWidth>
        Forgot Password?
      </Button>
      <div className="divider-or" />
      <Typography>Sign in with your social media account</Typography>
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
      <Button link fullWidth>
        Doesn't have an account? Sign Up
      </Button>
    </Container>
  );
};
