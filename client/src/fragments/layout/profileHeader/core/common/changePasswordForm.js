import { useState } from "react";
import { StyledChangePasswordForm } from "./style";
import { useForm } from "react-hook-form";
import { UserInput } from "@eachbase/components";

export const ChangePasswordForm = () => {
  const [edit, setEdit] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const handleEdit = (event) => {
    event?.preventDefault();
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    reset();
  };

  const onSubmit = (data) => console.log(data);

  return (
    <StyledChangePasswordForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="change-password">
          <div className="change-password-wrapper">
            <p className="change-password-text">Change Password</p>
            <div className={"account-save-cancel-btns"}>
              {edit ? (
                <>
                  <button type="submit" className="edit-button">
                    Save
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
          <span className="use-strong-password">
            Use strong password to keep your account secure.
          </span>
          {edit && (
            <div className="password-inputs-box">
              <UserInput
                required={true}
                isForPassword={true}
                inputName={"password"}
                inputPlaceholder={"Current Password*"}
                {...register("password", { required: true })}
              />
              <UserInput
                required={true}
                isForPassword={true}
                inputName={"newPassword"}
                inputPlaceholder={"New Password*"}
                {...register("newPassword", { required: true })}
              />
              <UserInput
                required={true}
                isForPassword={true}
                inputName={"confirmation"}
                inputPlaceholder={"Retype New Password*"}
                {...register("confirmation", { required: true })}
              />
            </div>
          )}
        </div>
      </form>
    </StyledChangePasswordForm>
  );
};
