import { Container } from "./style";
import { Typography } from "@eachbase/components";
export const Title = () => {
  return (
    <Container>
      <Typography className='account-settings' color="text" size="3rem" weight="bold">
        Account Settings
      </Typography>
    </Container>
  );
};
