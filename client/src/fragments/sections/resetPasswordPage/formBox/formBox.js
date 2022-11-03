import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Button, Input, useModal } from "@eachbase/components";
import { useSagaStore, profileActions } from "@eachbase/store";
import { MODAL_NAMES } from "@eachbase/constants";
import { Container } from "./style";

export const FormBox = () => {
  const router = useRouter();
  const resetToken = router.query.resetToken;
  const { open } = useModal();
  const { register, handleSubmit, reset } = useForm();
  const { dispatch, destroy, status } = useSagaStore(
    profileActions.resetPassword
  );
  const [onError, setOnError] = useState(false);

  const onSubmit = (data) => {
    if (data.newPassword !== data.confirmation) {
      setOnError("Passwords not match");
    } else if (data.newPassword.length < 8) {
      setOnError("Password minimum length should be 8 symbols");
    } else {
      setOnError(false);
      dispatch(data, resetToken);
    }
  };

  useEffect(() => {
    if (status.onSuccess) {
      open(MODAL_NAMES.RESET_PASSWORD_SUCCESS_HELPER);
      reset();
      destroy.all();
    }
  }, [status]);

  return (
    <Container>
      <p className='enter-your-password' color="text">
        Enter your new password.
        <br /> Use at least 8 characters, 1 upper case and 1 digit.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          placeholder="New Password"
          error={onError}
          {...register("newPassword", { required: true })}
        />
        <Input
          type="password"
          placeholder="Confirm New Password"
          error={onError}
          helper={onError}
          {...register("confirmation", { required: true })}
        />
        <Button onLoad={status.onLoad} type="submit">
          Sign In
        </Button>
      </form>
    </Container>
  );
};
