import { Container } from "./style";
import { Input, Typography, Icons, Button } from "@eachbase/components";

export const SignInForm = () => {
  return (
    <Container>
      <Typography>Welcome to Menuz</Typography>
      <Icons.LogoIcon />
      <Input icon={Icons.EmailIcon} placeholder="Email" />
      <Input icon={Icons.PasswordIcon} type="password" placeholder="Password" />
      <Button>Sign In</Button>
      <Typography></Typography>
    </Container>
  );
};
