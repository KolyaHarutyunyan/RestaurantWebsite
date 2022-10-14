import { StyledAccountSettings } from "./style";
import { Images } from "@eachbase/theme/images";
import { useForm } from "react-hook-form";
import { Button, SettingsInput } from "@eachbase/components";

export const AccountSettings = ({ account }) => {
  const { name, surname, email, avatar } = account || {};

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledAccountSettings>
      <div className="name-and-avatar">
        <h6 className="name">{`${name} ${surname}`}</h6>
        <div className="avatar">
          <div className="avatar-wrapper">
            <div className="profile-photo">
              {avatar || <Images.UserProfile />}
            </div>
            <label className="add-photo">
              <input type="file" />
              <Images.AddPhoto />
            </label>
          </div>
        </div>
      </div>
      <div className="account-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="edit-wrapper">
            <button
              type="button"
              className="edit-and-save-button"
              onClick={() => {}}
            >
              Edit
            </button>
          </div>
          <SettingsInput
            inputType={"text"}
            inputIcon={<Images.FullNameIcon />}
            inputValue={`${name} ${surname}`}
            onChangeInput={() => {}}
            inputDisabled={true}
            // inputRequired={true}
            // {...register("name")}
          />
          <SettingsInput
            inputType={"email"}
            inputIcon={<Images.EmailIcon />}
            inputValue={email}
            onChangeInput={() => {}}
            inputDisabled={true}
            // inputRequired={true}
            // {...register("email")}
          />
          <div className="change-password">
            <div className="change-password-wrapper">
              <p className="change-password-text">Change Password</p>
              <button
                type="button"
                className="edit-and-save-button"
                onClick={() => {}}
              >
                Edit
              </button>
            </div>
            <span className="use-strong-password">
              Use strong password to keep your account secure.
            </span>
          </div>
        </form>
      </div>
      <Button
        fullWidth
        square
        className="sign-out-button"
        // onLoad={status.onLoad}
      >
        <Images.SignOut /> Sign Out
      </Button>
    </StyledAccountSettings>
  );
};
