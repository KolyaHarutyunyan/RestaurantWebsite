import { Container } from "./style";
import { Typography, Button, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
export const SignUpSuccessHelper = () => {
  const { close } = useModal();

  return (
    <Container>
      <Icons.SignUpSuccessGirl />
      <Typography color="text" weight="bold" size="1.250rem">
        Congrats you're all Set
      </Typography>
      <Typography color="text">
        Now you can create your first menu. Good Luck!
      </Typography>
      <Button onClick={() => close()}>Done</Button>
    </Container>
  );
};
