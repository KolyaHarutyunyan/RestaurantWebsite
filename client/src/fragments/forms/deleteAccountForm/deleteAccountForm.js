import { Container } from "./style";
import {Typography, useModal, Button, Input} from "@eachbase/components";
import { useSagaStore, profileActions } from "@eachbase/store";
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { Icons } from "@eachbase/theme";
import {useForm} from "react-hook-form";
export const DeleteAccountForm = () => {
  const [password, setPassword] = useState("");
  const { register, handleSubmit } = useForm();
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
    // if (confirm("Are you sure? you cannot revert this action")) {
      dispatch();
    // }
  };

  return (
    <Container>
      <Typography  className="title" color="text" weight="bold">
        Delete Account
      </Typography>
      <Typography className="desc" size="1rem" color="text">
        Are you sure you want to delete your account? If you delete your
        account, you'll permanently lose your profile.
      </Typography>

        <Typography className="password-desc" size="1rem" color="text">
            To delete your account, please enter your password
      </Typography>

        <div className="input-box">
            <Input
                border={24}
                // error={!!errors.password.length}
                // helper={errors.password}
                icon={<Icons.PasswordIcon />}
                // disabled={!editMode}
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
            />
        </div>

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
