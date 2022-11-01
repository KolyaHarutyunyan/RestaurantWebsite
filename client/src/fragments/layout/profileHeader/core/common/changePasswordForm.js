import { useEffect, useState } from "react";
import { StyledChangePasswordForm } from "./style";
import { useForm } from "react-hook-form";
import { UserInput } from "@eachbase/components";
import { profileActions, useSagaStore } from "@eachbase/store";
import { errorTexts } from "./constants";
import { CircularProgress } from "@material-ui/core";

export const ChangePasswordForm = ({ account }) => {
  const [edit, setEdit] = useState(false);
  const [errorText, setErrorText] = useState("");

  const profileSaga = useSagaStore(profileActions.updatePassword);

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (profileSaga.status.onSuccess) {
      setEdit(false);
      setErrorText("");
      reset();
      profileSaga.destroy.success();
    }
  }, [profileSaga.status.onSuccess]);

  useEffect(() => {
    if (profileSaga.status.onError) {
      if (Array.isArray(profileSaga.status.onError?.data?.message)) {
        setErrorText(profileSaga.status.onError?.data?.message[0]);
      } else {
        setErrorText(profileSaga.status.onError?.data?.message);
      }
      profileSaga.destroy.error();
    }
  }, [profileSaga.status.onError]);

  const handleEdit = (event) => {
    event?.preventDefault();
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    setErrorText("");
    reset();
  };

  const onSubmit = (data) => {
    data = {
      ...data,
      id: account.id,
    };
    profileSaga.dispatch(data);
    setErrorText("");
  };

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
                    {profileSaga.status.onLoad ? (
                      <CircularProgress
                        style={{ width: "20px", height: "20px" }}
                      />
                    ) : (
                      "Save"
                    )}
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
                inputError={
                  errorText === errorTexts.currentPassword
                    ? errorTexts.currentPassword
                    : ""
                }
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
                inputError={
                  errorText === errorTexts.passwordConfirm
                    ? errorTexts.passwordConfirm
                    : ""
                }
              />
            </div>
          )}
        </div>
      </form>
    </StyledChangePasswordForm>
  );
};
