import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { Container } from "./style";
import { Input, Typography, Button, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { userInfo } from "@eachbase/utils";

export const SignInForm = () => {
  const { open, close } = useModal();
  const profile = useSelector((state) => state.profile);
  const { status, destroy, dispatch } = useSagaStore(profileActions.signIn);
  const { register, handleSubmit, reset, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    return () => destroy.all();
  }, [profile]);

  useEffect(() => {
    if (status.onSuccess) {
      destroy.all();
      reset();
      close();
      axios.get(`/businesses/mybusiness`, { auth: true }).then((res) => {
        if(userInfo?.subscription){
          router.push("/menus");
        }else{
          router.push("/plansAndPricing");
        }
       }
      ).catch((err) => {
        if(err?.data?.message === 'business with this information was not found'){
          open(MODAL_NAMES.CREATE_RESTAURANT)
        }
      })
    }
  }, [status]);

  const onSubmit = (data) => dispatch(data);
  const dispatcher = useDispatch();
  // const handleSignUp = (type) => {
  //   dispatcher(profileActions.socialSignUp(type));
  // };
  const handleSignUp = (type) => {
    dispatcher(profileActions.socialSignUp(type));
  };

  return (
    <Container>
      <Typography className="welcome-text" color="text">
        Welcome to Menu Mango
      </Typography>
      {/*<Icons.LogoIcon className="logo" />*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          border={"24px"}
          containerClassName="input-padding"
          type="email"
          icon={<Icons.EmailIcon />}
          placeholder="Email"
          {...register("email")}
          error={status.onError}
        />
        <Input
          border={"24px"}
          containerClassName="input-padding"
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password")}
          error={status.onError}
          helper={status.onError ? "incorrect username or password" : ""}
        />
        <Button fullWidth type="submit" onLoad={status.onLoad}>
          Sign In
        </Button>
      </form>
      <Button
        className="forgot-style"
        link
        color="default"
        fullWidth
        onClick={() => open(MODAL_NAMES.FORGOT_PASSWORD)}
      >
        Forgot Password?
      </Button>

      <div className="divider-or" />
      {/*<Typography color="text" className="social-text">*/}
      {/*  Sign in with your social media account*/}
      {/*</Typography>*/}
      {/*<div className="social">*/}
      {/*    <Fab  onClick={() => handleSignUp('google')} className="icons">*/}
      {/*      <Icons.GoogleIcon />*/}
      {/*    </Fab>*/}
      {/*    <Fab onClick={() => handleSignUp('facebook')}  className="icons">*/}
      {/*      <Icons.FaceBookIcon />*/}
      {/*    </Fab>*/}
      {/*    <Fab onClick={() => handleSignUp('apple')} className="apple">*/}
      {/*      <Icons.AppleIcon />*/}
      {/*    </Fab>*/}
      {/*</div>*/}
      <Button
        className="sign-up-button"
        color="action"
        fullWidth
        link
        onClick={() => open(MODAL_NAMES.SIGN_UP)}
      >
        Don't have an account? <span style={{ color: "#007AFF" }}>	&nbsp;Sign Up</span>
      </Button>
    </Container>
  );
};
