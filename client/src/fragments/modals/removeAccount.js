import { Styled } from "./core";
import { useSelector } from "react-redux";
import { Button, BaseModal } from "@eachbase/components";
import { useState } from "react";

let description = {
  menuItem:
    "Deleting a menu item will permanently remove it from the relevant category.",
  category:
    "Deleting a category will permanently remove it from the relevant menu.",
  menu: "Deleting a menu will permanently remove it from the system.",
};

export const RemoveAccount = ({ status, close, submit }) => {
  return (
    <BaseModal close={close} status={status} type={"remove"}>
      <Styled.Remove hasActions={true}>
        <Styled.Title>Delete Account</Styled.Title>

        <Styled.Description>
          Are you sure you want to delete your account? If you delete your
          account, you'll permanently lose your profile.
        </Styled.Description>
        <Styled.Description>
          To delete your account, please enter your password
        </Styled.Description>

        <Styled.Actions>
          <Button.Accept
            className="delete action"
            onClick={() => console.log("Delete")}
          >
            Delete
          </Button.Accept>
          <Button.Cancel className="cancel action" onClick={close}>
            Cancel
          </Button.Cancel>
        </Styled.Actions>
      </Styled.Remove>
    </BaseModal>
  );
};
