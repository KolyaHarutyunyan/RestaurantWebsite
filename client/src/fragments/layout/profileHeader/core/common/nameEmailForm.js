import { useEffect, useState } from "react";
import { StyledNameEmailForm } from "./style";
import { UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { Images } from "@eachbase/theme/images";
import { profileActions, useSagaStore } from "@eachbase/store";

export const NameEmailForm = ({ account }) => {
  const [edit, setEdit] = useState(false);

  const profileSaga = useSagaStore(profileActions.updateUserInfo);

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (profileSaga.status.onSuccess) {
      setEdit(false);
      profileSaga.destroy.success();
    }
  }, [profileSaga.status]);

  const handleEdit = (event) => {
    event?.preventDefault();
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    reset(account);
  };

  const onSubmit = (data) => {
    profileSaga.dispatch(data);
  };

  return (
    <StyledNameEmailForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-email-actions-wrapper">
          <div className={"account-save-cancel-btns"}>
            {edit ? (
              <>
                <button type="submit" className="edit-button">
                  {profileSaga.status.onLoad ? "..." : "Save"}
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                className="edit-button"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        <UserInput
          required={true}
          inputType={"text"}
          inputName={"fullName"}
          inputIcon={<Images.FullNameIcon />}
          defaultValue={account?.fullName}
          {...register("fullName", { required: true })}
          disabled={!edit}
        />
        <UserInput
          required={true}
          inputType={"email"}
          inputName={"email"}
          inputIcon={<Images.EmailIcon />}
          defaultValue={account?.email}
          {...register("email", { required: true })}
          disabled={!edit}
        />
      </form>
    </StyledNameEmailForm>
  );
};
