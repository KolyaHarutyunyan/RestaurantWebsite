import { EditPassword, EditUserData, Styled } from "./core";
import { useDispatch } from "react-redux";
import { Typography } from "@eachbase/components";

export const Profile = () => {
  const dispatch = useDispatch();

  const handlerRemove = () => {};

  return (
    <Styled.Content>
      <Typography>Account Settings</Typography>

      <EditUserData />
      <EditPassword />

      <Styled.RemoveBtn onClick={handlerRemove}>
        Delete my Account
      </Styled.RemoveBtn>
    </Styled.Content>
  );
};
