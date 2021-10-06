import { useState } from "react";
import { Container } from "./style";
import { Typography, Button, Input } from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { profileActions, useSagaStore } from "@eachbase/store";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
export const PrimaryInfo = () => {
  const { register, handleSubmit } = useForm();
  const [editMode, setEditMode] = useState(false);
  const { dispatch, status } = useSagaStore(profileActions.updateUserInfo);
  const profile = useSelector(({ profile }) => profile);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const onSubmit = (info) => {
    // if(editMode === true ) {
      if (profile.email === info.email) {
        const data = {
          fullName: info.fullName,
        }
        dispatch(data);
      } else {
        const data = {
          fullName: info.fullName,
          email: info.email
        }
        dispatch(data);
      }
    setEditMode(false)
    // }
  }

  if (profile) {
    return (
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="head">
            {editMode ? (
              <Button
                  className='classes-edit-button'
                  height={'auto'}
                onLoad={status.onLoad}
                color="action"
                link
                colorVariant
                type="submit"
              >
                Save
              </Button>
            ) : (
              <button
                  className='classes-edit-button'
                color="action"
                onClick={() => setEditMode(true)}
                type="button"
                onLoad={status.onLoad}
              >
                Edit
              </button>
            )}
          </div>
          <div className="input-box">
            <Typography className='input-title' color="text">Full Name</Typography>
            <Input
              error={!!errors.fullName.length}
              helper={errors.helper}
              icon={<BsPerson size={22} />}
              disabled={!editMode}
              defaultValue={profile.fullName}
              {...register("fullName", { required: true, minLength:7, maxLength:20 })}
            />
          </div>
          <div className="input-box">
            <Typography  className='input-title' color="text">Email</Typography>
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
