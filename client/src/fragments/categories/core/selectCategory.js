import { Styled } from ".";
import { Button } from "@eachbase/components";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const SelectCategory = ({ activeType }) => {
  const [open, setOpen] = useState(false);

  let input = useRef();

  let toggleCategories = () => {
    if (open) setOpen(false);
    else {
      input.current.focus();
      setOpen(true);
    }
  };

  const [newCategoryName, setNewCategoryName] = useState("");

  let changeNewCategoryName = (value) => {
    setNewCategoryName(value);
    filterItems(value);
  };

  const menuId = useSelector(({ menu = {} }) => menu.id || null);

  let categories = useSelector(
    (state) =>
      state.categories.filter(
        (category) =>
          category.type === activeType &&
          category.parents.indexOf(menuId) === -1
      ) || []
  );

  const [filteredItems, setFilteredItems] = useState([]);

  const filterItems = (filter) =>
    setFilteredItems(
      categories.filter(
        (category) => category.title.indexOf(filter) !== -1 || !filter
      )
    );

  useEffect(() => filterItems(), []);

  const selectCategory = (value) => {
    setNewCategoryName(value);
    toggleCategories();
  };

  return (
    <Styled.SelectType className="newCategory">
      <Styled.SelectBlock open={open} className="addCategory">
        <div className="title">
          <input
            ref={input}
            type={"text"}
            value={newCategoryName}
            placeholder={"Search/Create Category"}
            onChange={(e) => changeNewCategoryName(e.target.value)}
          />
          <p>{newCategoryName || "Select / Create Category"}</p>
          ICON
        </div>
        <div className="bg" onClick={toggleCategories} />
        <div className="items">
          {filteredItems.length ? (
            filteredItems.map((category) => (
              <div
                onClick={() => selectCategory(category.title)}
                key={category.id}
                className="item"
              >
                {category.title}
              </div>
            ))
          ) : (
            <div className="item">No Options</div>
          )}
        </div>
      </Styled.SelectBlock>
      <Button className={"add"}>Add</Button>
    </Styled.SelectType>
  );
};
