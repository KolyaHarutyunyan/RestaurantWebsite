import { Container } from "./style";
import { Input, Typography, Icons } from "@eachbase/components";

export const SignInForm = () => {
  return (
    <Container>
      <Typography>Welcome to Menuz</Typography>
      <Icons.LogoIcon />
      <Input icon={Icons.PersonIcon} placeholder="Full name" />
      <Input icon={Icons.EmailIcon} placeholder="Email" />
      <Input icon={Icons.PasswordIcon} type="password" placeholder="Password" />
    </Container>
  );
};
