import { Icons } from "@eachbase/theme";
import { Typography, Input } from "@eachbase/components";
import { Container } from "./style";
export const Head = () => {
  return (
    <Container>
      <Icons.LogoIcon />
      <Typography weight="bold" size="3rem" color="text">
        Reset Password
      </Typography>
    </Container>
  );
};
