import { EditPassword, EditUserData, Styled } from "./core";
import { useDispatch } from "react-redux";
import { PageTitle } from "@eachbase/components";

export const Profile = () => {
  const dispatch = useDispatch();

  const handlerRemove = () => {};

  return (
    <Styled.Content>
      <PageTitle>Account Settings</PageTitle>

      <EditUserData />
      <EditPassword />

      <Styled.RemoveBtn onClick={handlerRemove}>
        Delete my Account
      </Styled.RemoveBtn>
    </Styled.Content>
  );
};
