import { StyledAccountSettings } from "./style";
import { Images } from "@eachbase/theme/images";
import { Button } from "@eachbase/components";
import { ChangePasswordForm, NameEmailForm } from "./common";

export const AccountSettings = ({ account }) => {
  return (
    <StyledAccountSettings>
      <div className="name-and-avatar">
        <h6 className="name">{`${account?.name} ${account?.surname}`}</h6>
        <div className="avatar">
          <div className="avatar-wrapper">
            <div className="profile-photo">
              {account?.avatar || <Images.UserProfile />}
            </div>
            <label className="add-photo">
              <input type="file" />
              <Images.AddPhoto />
            </label>
          </div>
        </div>
      </div>
      <div className="account-box">
        <NameEmailForm account={account} />
        <ChangePasswordForm />
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
