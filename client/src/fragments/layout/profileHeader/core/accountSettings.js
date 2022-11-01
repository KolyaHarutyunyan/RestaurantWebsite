import { StyledAccountSettings } from "./style";
import { Images } from "@eachbase/theme/images";
import { Button } from "@eachbase/components";
import { ChangePasswordForm, NameEmailForm } from "./common";
import { MdClose } from "react-icons/md";
import { profileActions, useSagaStore } from "@eachbase/store";

export const AccountSettings = ({ handleClose }) => {
  const profileSaga = useSagaStore(profileActions.signOut);

  const userInfo =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("menuUser"));

  return (
    <StyledAccountSettings>
      <button
        type="button"
        className="close-account-settings-button"
        onClick={handleClose}
      >
        <MdClose style={{ fontSize: 24 }} />
      </button>
      <div className="name-and-avatar">
        <h6 className="name">{userInfo?.fullName}</h6>
        <div className="avatar">
          <div className="avatar-wrapper">
            <div className="profile-photo">
              {userInfo?.avatar || <Images.UserProfile />}
            </div>
            <label className="add-photo">
              <input type="file" />
              <Images.AddPhoto />
            </label>
          </div>
        </div>
      </div>
      <div className="account-box">
        <NameEmailForm account={userInfo} />
        <ChangePasswordForm account={userInfo} />
      </div>
      <Button
        fullWidth
        square
        className="sign-out-button"
        onLoad={profileSaga.status.onLoad}
        onClick={() => profileSaga.dispatch()}
      >
        <Images.SignOut /> Sign Out
      </Button>
    </StyledAccountSettings>
  );
};
