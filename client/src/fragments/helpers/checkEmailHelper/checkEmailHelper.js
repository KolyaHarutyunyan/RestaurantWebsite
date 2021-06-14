import { Typography, Button, useModal } from "@eachbase/components";
import { Container } from "./style";
export const CheckEmailHelper = () => {
  const { close } = useModal();
  return (
    <Container>
      <Typography color="text" weight="bold">
        Forgot Password
      </Typography>
      <Typography color="text">
        We sent you confirmation email. please check you'r email{" "}
      </Typography>
      <Button onClick={() => close()}>OK!</Button>
    </Container>
  );
};
