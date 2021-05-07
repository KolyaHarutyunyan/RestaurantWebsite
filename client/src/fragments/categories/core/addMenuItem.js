import { useContext } from "react";

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
  const { openModal } = useContext(ModalContext);
  newItem.type = activeType;
  newItem.parents = [activeCategory];
  return (
    <button
      className="add"
      onClick={() =>
        openModal.editMenuItem({ data: newItem, title: "Add Menu Item" })
      }
    >
      <span className="iconBlock">ICON</span>
      Add New Menu Item
    </button>
  );
};
