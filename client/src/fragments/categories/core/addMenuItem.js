import { useContext } from "react";
import { Icon } from "@eachbase/components";
import { CONSTANTS } from "@eachbase/constants";
import { ModalContext } from "@eachbase/context";

let newItem = {
  title: "",
  description: "",
  options: "",
  imageUrl: ["", "", "", "", "", ""],
  type: "",
  parents: [],
  price: "",
};

export const AddNewMenuItem = ({ activeCategory, activeType }) => {
  let { openModal } = useContext(ModalContext);
  newItem.type = activeType;
  newItem.parents = [activeCategory];
  return (
    <button
      className="add"
      onClick={() =>
        openModal.editMenuItem({ data: newItem, title: "Add Menu Item" })
      }
    >
      <span className="iconBlock">
        <Icon name={CONSTANTS.SVGNames.AddIcon} />
      </span>
      Add New Menu Item
    </button>
  );
};
