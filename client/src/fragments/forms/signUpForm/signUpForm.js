import { Input, Typography, Button, Fab, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileService, PROFILE_SIGN_IN_SUCCESS } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

export const SignUpForm = () => {
  const { open } = useModal();

  const dispatch = useDispatch();
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setOnLoad(true);
    setEmailHelper("");

    profileService
      .signUp(data)
      .then(({ data }) => {
        localStorage.setItem("token", data.auth.token);
        dispatch({ type: PROFILE_SIGN_IN_SUCCESS, payload: data.user });
        open(MODAL_NAMES.CREATE_RESTAURANT);
      })
      .catch((err) => {
        setOnLoad(false);
        if (err.status === 302) {
          setEmailHelper("Email allready exists");
        } else {
          setError(true);
        }
      });
  };

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
          error={error}
          helper={error ? "Full name should be at least 3 characters" : ""}
        />
        <Input
          type="email"
          icon={<Icons.EmailIcon />}
          error={!!emailHelper}
          helper={emailHelper}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Input
          icon={<Icons.PasswordIcon />}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          error={error}
          helper={error ? "Password should be at least 8 characters" : ""}
        />
        <Button fullWidth type="submit" disabled={onLoad}>
          Continue
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
      <Button
        link
        actionColor
        fullWidth
        onClick={() => open(MODAL_NAMES.SIGN_IN)}
      >
        Already have an account? Sign In
      </Button>
    </Container>
  );
};
