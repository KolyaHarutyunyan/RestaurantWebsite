import { useEffect, useState } from "react";
import { StyledNameEmailForm } from "./style";
import { UserInput } from "@eachbase/components";
import { useForm } from "react-hook-form";
import { Images } from "@eachbase/theme/images";
import { profileActions, useSagaStore } from "@eachbase/store";
import { errorTexts } from "./constants";
import { CircularProgress } from "@material-ui/core";

export const NameEmailForm = ({ account }) => {
  const [edit, setEdit] = useState(false);
  const [errorText, setErrorText] = useState("");

  const profileSaga = useSagaStore(profileActions.updateUserInfo);

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (profileSaga.status.onSuccess) {
      setEdit(false);
      setErrorText("");
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
    reset(account);
  };

  const onSubmit = (data) => {
    data = {
      fullName: account?.fullName === data.fullName ? null : data.fullName,
      email: account?.email === data.email ? null : data.email,
    };
    profileSaga.dispatch(data);
    setErrorText("");
  };

  return (
    <StyledNameEmailForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-email-actions-wrapper">
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
        <UserInput
          required={true}
          inputType={"text"}
          inputName={"fullName"}
          inputIcon={<Images.FullNameIcon />}
          defaultValue={account?.fullName}
          {...register("fullName", { required: true })}
          disabled={edit === false}
          inputError={
            errorText === errorTexts.fullName ? errorTexts.fullName : ""
          }
        />
        <UserInput
          required={true}
          inputType={"email"}
          inputName={"email"}
          inputIcon={<Images.EmailIcon />}
          defaultValue={account?.email}
          {...register("email", { required: true })}
          disabled={edit === false}
          inputError={errorText === errorTexts.email ? errorTexts.email : ""}
        />
      </form>
    </StyledNameEmailForm>
  );
};
