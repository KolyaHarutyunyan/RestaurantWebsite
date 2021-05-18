import { useState } from "react";
import { Container } from "./style";
import { Typography, Button, Input } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
export const PrimaryInfo = () => {
  const { register, handleSubmit } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });
  const profile = useSelector(({ profile }) => profile);

  const onSubmit = (data) => {};

  if (profile) {
    return (
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="head">
            {editMode ? (
              <Button link colorVariant type="submit">
                Save
              </Button>
            ) : (
              <Button onClick={() => setEditMode(true)} link type="button">
                Edit
              </Button>
            )}
          </div>
          <div className="input-box">
            <Typography color="text">Full Name</Typography>
            <Input
              error={!!errors.fullName.length}
              helper={errors.helper}
              icon={<BsPerson size={22} />}
              disabled={!editMode}
              defaultValue={profile.fullName}
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="input-box">
            <Typography color="text">Email</Typography>
            <Input
              error={!!errors.email.length}
              helper={errors.helper}
              icon={<Icons.EmailIcon />}
              disabled={!editMode}
              defaultValue={profile.email}
              type="email"
              {...register("email", { required: true })}
            />
          </div>
        </form>
      </Container>
    );
  }

  return null;
};
