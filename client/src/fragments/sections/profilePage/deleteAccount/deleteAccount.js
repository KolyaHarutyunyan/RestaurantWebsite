import { Container } from "./style";
import { Button, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
export const DeleteAccount = () => {
  const { open } = useModal();

  return (
    <Container>
      <Button link onClick={() => open(MODAL_NAMES.DELETE_ACCOUNT)}>
        Delete my Account
      </Button>
    </Container>
  );
};
