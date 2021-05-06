import { BaseModal, Styled } from "./core";
import { useSelector } from "react-redux";
import { Button } from "@eachbase/components";
import { useState } from "react";

let description = {
  menuItem:
    "Deleting a menu item will permanently remove it from the relevant category.",
  category:
    "Deleting a category will permanently remove it from the relevant menu.",
  menu: "Deleting a menu will permanently remove it from the system.",
};

export const RemoveMenuCategoryMenuItem = ({ status, close, type, id }) => {
  let item = useSelector((state) => {
    if (type === "menuItem")
      return state.menuItems.find((item) => item.id === id);
    if (type === "category")
      return state.categories.find((item) => item.id === id);
    if (type === "menu") return state.menu;
  });

  let hasActions = (item && item.parents && item.parents.length > 1) || false;
  const [activeType, setActiveType] = useState("one");
  if (!item) return null;

  return (
    <BaseModal close={close} status={status}>
      <Styled.Remove hasActions={hasActions}>
        <Styled.Title>
          Delete {item.title} {type === "menu" ? "Menu" : ""}?
        </Styled.Title>

        {hasActions ? (
          <></>
        ) : (
          <Styled.Description>{description[type]}</Styled.Description>
        )}
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
