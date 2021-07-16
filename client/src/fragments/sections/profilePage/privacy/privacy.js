import { useState, Fragment, useEffect } from "react";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { Typography, Button, Input } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";

export const Privacy = () => {
  const { register, handleSubmit } = useForm();
  const { status, dispatch, destroy } = useSagaStore(
    profileActions.updatePassword
  );

  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    newPassword: "",
    confirmation: "",
  });

  useEffect(() => {
    return () => () => destroy.all();
  }, []);

  const onSubmit = (data) => {
    const { newPassword, confirmation } = data;
    if (newPassword !== confirmation) {
      setErrors({
        ...errors,
        confirmation: "Doesn't match which new password",
      });
      return;
    }
    setErrors({ ...errors, confirmation: "" });
    dispatch(data);
  };

  const renderNoth = () => {
    return (
      <div className="noth">
        <Typography className="change-text" color="text" weight="bold" >
          Change Password
        </Typography>
        <p className="descr">
          Use strong password to keep your account secure.
        </p>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <Fragment>
          <Typography className="change-text" color="text" weight="bold" >
              Change Password
          </Typography>
          <p className="descr">
              Use strong password to keep your account secure.
          </p>

        <div className="input-descr">
          Use at least 8 characters, 1 upper case and 1 digit
        </div>
        <div className="input-box">
          <Input
            error={!!errors.password.length}
            helper={errors.password}
            icon={<Icons.PasswordIcon />}
            disabled={!editMode}
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="input-box">
          <Input
            error={!!errors.newPassword.length}
            helper={errors.newPassword}
            icon={<Icons.PasswordIcon />}
            disabled={!editMode}
            placeholder="New Password"
            type="password"
            {...register("newPassword", { required: true })}
          />
        </div>
        <div className="input-box">
          <Input
            error={!!errors.confirmation.length}
            helper={
              status.onSuccess
                ? "Password successfuly changed"
                : errors.confirmation
            }
            icon={<Icons.PasswordIcon />}
            disabled={!editMode}
            placeholder="Repeat Password"
            type="password"
            {...register("confirmation", { required: true })}
          />
        </div>
      </Fragment>
    );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="head">
          {editMode ? (
            <Button
                height={'auto'}
              color="action"
              link
              colorVariant
              type="submit"
              onLoad={status.onLoad}
            >
              Save
            </Button>
          ) : (
            <Button
                height={'auto'}
              color="action"
              onClick={() => setEditMode(true)}
              link
              type="button"
              onLoad={status.onLoad}
            >
              Edit
            </Button>
          )}
        </div>
        {editMode ? renderForm() : renderNoth()}
      </form>
    </Container>
  );
};
