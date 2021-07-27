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

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => () => destroy.all(), []);
  useEffect(() => {
    if (status.onSuccess) {
      open(MODAL_NAMES.CREATE_RESTAURANT);
      reset();
      destroy.all();
    }
  }, [status]);

  const onSubmit = (data) => dispatch(data);

  return (
    <Container>
        <Typography className='welcome-text' color="text">
          Welcome to Menu Mango
      </Typography>
      {/*<Icons.LogoIcon className="logo" />*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            border={'24px'}
            containerClassName='input-padding'
          type="text"
          icon={<BsPerson size={22} />}
          placeholder="Full Name"
          {...register("fullName", { required: true })}
          error={status.onError}
        />
        <Input
            border={'24px'}
            containerClassName='input-padding'
          type="email"
          icon={<Icons.EmailIcon />}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Input
            border={'24px'}
            containerClassName='input-padding'
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          error={status.onError}
          helper={status.onError ? status.onError.data.message : ""}
        />
        <Button fullWidth type="submit" onLoad={status.onLoad}>
          Continue
        </Button>
      </form>
      <Button
          className='forgot-style'
        link
        fullWidth
        color="default"
        onClick={() => open(MODAL_NAMES.FORGOT_PASSWORD)}
      >
        Forgot Password?
      </Button>
      <div className="divider-or" />
        <Typography color="text" className='social-text'>
            Sign up with your social media account
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
        className='sign-up-button'
        link
        color="action"
        fullWidth
        onClick={() => open(MODAL_NAMES.SIGN_IN)}
      >
          Already have an account? Sign In
      </Button>

        <div className='term-of-use' >
            <Typography color="text" className='social-text'>
                By signing up, you agree to
                <a className='sign-up-link' href={'/a'}>Terms of Use</a> and
                <a className='sign-up-link'  href={'/a'}>Privacy Policy</a>
            </Typography>
        </div>
    </Container>
  );
};
