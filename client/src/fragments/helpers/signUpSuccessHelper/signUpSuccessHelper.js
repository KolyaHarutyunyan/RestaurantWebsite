import { Container } from "./style";
import { Typography, Button, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
export const SignUpSuccessHelper = () => {
  const { close } = useModal();

  return (
    <Container>
      <Icons.SignUpSuccessGirl />
      <Typography className='title' color="text" weight="bold" >
        Congrats you're all Set
      </Typography>
      <Typography className='sub' color="text">
        Now you can create your first menu. <br/>Good Luck!
      </Typography>
      <Button onClick={() => close()}>Done</Button>
    </Container>
  );
};
