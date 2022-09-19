import React from "react";
import { Images } from "@eachbase/theme/images";

export const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="notification" onClick={() => alert("Notifications")}>
        <Images.Notification />
      </div>
      <div className="avatar" onClick={() => alert("Avatar")}>
        <Images.Avatar />
      </div>
    </div>
  );
};
