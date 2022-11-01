import { Input, Typography, Button, Fab, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const SignUpForm = () => {
  const { open } = useModal();
  const { status, dispatch, destroy } = useSagaStore(profileActions.signUp);
  const dispatcher = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = useState({
    fullName: "",
    email: ""
  });
  useEffect(() => () => destroy.all(), []);
  useEffect(() => {
    if (status.onSuccess) {
      open(MODAL_NAMES.CREATE_RESTAURANT);
      reset();
      destroy.all();
    }
  }, [status]);

  const onSubmit = (data) => {
    if (data.fullName.length >= 7) {
      dispatch(data);
    } else {
      setErrors("fullName");
    }
  };

  const handleSignUp = (type) => {
    dispatcher(profileActions.socialSignUp(type));
  };

  return (
    <Container>
      <Typography className="welcome-text" color="text">
        Welcome to Menu Mango
      </Typography>
      {/*<Icons.LogoIcon className="logo" />*/}
      <form onChange={() => setErrors("")} onSubmit={handleSubmit(onSubmit)}>

        <Input
          helper={errors === "fullName" && "Name min length must be 7 characters"}
          border={"24px"}
          helperColo={true}
          containerClassName="input-padding"
          type="text"
          max={20}
          icon={<BsPerson size={22} />}
          placeholder="Full Name"
          {...register("fullName", { required: true, minLength: 0, maxLength: 20 })}
        />
        <Input
          border={"24px"}
          containerClassName="input-padding"
          type="email"
          icon={<Icons.EmailIcon />}
          placeholder="Email"
          {...register("email", { required: true })}
          error={status?.onError?.data?.message === "User already exists"}
          helper={status?.onError?.data?.message === "User already exists" && "User already exist"}
        />
        <Input
          border={"24px"}
          containerClassName="input-padding"
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          error={status?.onError?.data?.message[0] === "password must be longer than or equal to 8 characters"}
          helper={status?.onError?.data?.message[0] === "password must be longer than or equal to 8 characters" && "Password must be longer than or equal to 8 characters"}
        />
        <Button fullWidth type="submit" onLoad={status.onLoad}>
          Continue
        </Button>
      </form>
      <div style={{ marginTop: "40px" }} className="divider-or" />
      {/*<Typography color="text" className='social-text'>*/}
      {/*    Sign up with your social media account*/}
      {/*</Typography>*/}
      {/*<div className="social">*/}
      {/*    <Fab onClick={() => handleSignUp('google')} className="icons">*/}
      {/*        <Icons.GoogleIcon/>*/}
      {/*    </Fab>*/}
      {/*    <Fab onClick={() => handleSignUp('facebook')} className="icons">*/}
      {/*        <Icons.FaceBookIcon/>*/}
      {/*    </Fab>*/}
      {/*    <Fab onClick={() => handleSignUp('apple')} className="apple">*/}
      {/*        <Icons.AppleIcon/>*/}
      {/*    </Fab>*/}
      {/*</div>*/}
      <Button
        className="sign-up-button"
        link
        color="action"
        fullWidth
        onClick={() => open(MODAL_NAMES.SIGN_IN)}
      >
        Already have an account? <span style={{ color: "#007AFF" }}>	&nbsp; Sign In</span>
      </Button>

      <div className="term-of-use">
        <Typography color="text" className="social-text">
          By signing up, you agree to
          <a className="sign-up-link" href={"/a"}>Terms of Use</a> and
          <a className="sign-up-link" href={"/a"}>Privacy Policy</a>
        </Typography>
      </div>
    </Container>
  );
};
