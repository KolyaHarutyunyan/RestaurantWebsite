import { useState, Fragment } from "react";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import { Typography, Button, Input } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
export const Privacy = () => {
  const { register, handleSubmit } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    newPassword: "",
    repeatPassword: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderNoth = () => {
    return (
      <div className="noth">
        <Typography color="text" weight="bold" size="1.250rem">
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
        <div className="input-box">
          <Input
            error={!!errors.password.length}
            helper={errors.helper}
            icon={<Icons.PasswordIcon />}
            disabled={!editMode}
            placeholder="Password"
            {...register("fullName", { required: true })}
          />
        </div>
        <div className="input-box">
          <Input
            error={!!errors.newPassword.length}
            helper={errors.helper}
            icon={<Icons.PasswordIcon />}
            disabled={!editMode}
            placeholder="New Password"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="input-box">
          <Input
            error={!!errors.repeatPassword.length}
            helper={errors.helper}
            icon={<Icons.PasswordIcon />}
            disabled={!editMode}
            placeholder="Repeat Password"
            type="email"
            {...register("email", { required: true })}
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
            <Button link actionColor type="submit">
              Save
            </Button>
          ) : (
            <Button
              onClick={() => setEditMode(true)}
              link
              actionColor
              type="button"
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
