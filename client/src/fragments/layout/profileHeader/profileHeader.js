import React from "react";
import { Images } from "@eachbase/theme/images";
import { StyledProfileHeader } from "./style";

export const ProfileHeader = () => {
  return (
    <StyledProfileHeader>
      <div className="notification" onClick={() => alert("Notifications")}>
        <Images.Notification />
      </div>
      <div className="avatar" onClick={() => alert("Avatar")}>
        <Images.Avatar />
      </div>
    </StyledProfileHeader>
  );
};
