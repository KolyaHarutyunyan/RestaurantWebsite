import { Container } from "./style";
import { Typography, Button, useModal } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { useRouter } from "next/router";
export const ResetPasswordHelper = () => {
  const { close } = useModal();
  const router = useRouter();
  return (
    <Container>
      <Icons.GirlWithBalloons />
      <Typography color="text" weight="bold" size="1.250rem">
        Password Reset
      </Typography>
      <Typography color="text">
        Your Password has been reset successfully.
      </Typography>
      <Button
        onClick={() => {
          close();
          router.push("/");
        }}
      >
        Done
      </Button>
    </Container>
  );
};
