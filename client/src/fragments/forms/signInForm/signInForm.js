import { Container } from "./style";
import { Input, Typography, Button, Fab } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
export const SignInForm = () => {
  return (
    <Container>
      <Typography color="text" weight="bold" size={"1.250rem"}>
        Welcome to Menuz
      </Typography>
      <Icons.LogoIcon className="logo" />
      <Input icon={<Icons.EmailIcon />} placeholder="Email" />
      <Input
        icon={<Icons.PasswordIcon />}
        type="password"
        placeholder="Password"
      />
      <Button fullWidth>Sign In</Button>
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
