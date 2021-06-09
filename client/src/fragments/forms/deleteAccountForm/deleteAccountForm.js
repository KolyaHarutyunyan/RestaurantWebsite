import { Container } from "./style";
import { Typography, useModal, Button } from "@eachbase/components";
import { useSagaStore, profileActions } from "@eachbase/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
export const DeleteAccountForm = () => {
  const router = useRouter();
  const { close } = useModal();
  const { dispatch, status, destroy } = useSagaStore(
    profileActions.deleteProfile
  );

  useEffect(() => {
    if (status.onSuccess) {
      destroy.all();
      close();
      setTimeout(() => router.push("/", undefined, { shallow: true }), 1000);
    }
  }, [status]);

  const deleteAccount = () => {
    if (confirm("Are you sure? you cannot revert this action")) {
      dispatch();
    }
  };

  return (
    <Container>
      <Typography size="2rem" className="title" color="text" weight="bold">
        Delete Account
      </Typography>
      <Typography size="1rem" color="text">
        Are you sure you want to delete your account? If you delete your
        account, you'll permanently lose your profile.
      </Typography>
      <div className="actions">
        <Button onLoad={status.onLoad} onClick={() => deleteAccount()}>
          Delete
        </Button>
        <Button color="default" onClick={() => close()}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};
