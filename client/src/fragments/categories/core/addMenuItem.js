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
  newItem.type = activeType;
  newItem.parents = [activeCategory];
  return (
    <button className="add" onClick={() => {}}>
      <span className="iconBlock">ICON</span>
      Add New Menu Item
    </button>
  );
};
