import { Styled } from ".";
import { Button, Icon } from "@eachbase/components";
import { useEffect, useRef, useState } from "react";
import { SVGNames } from "@eachbase/constants";
import { useSelector } from "react-redux";

let items = [];

export const SelectMenuItem = ({ activeType, activeCategoryId }) => {
  const [open, setOpen] = useState(false);
  let input = useRef();
  let toggleItems = () => {
    if (open) {
      //add selected items on category
      // console.log(items.filter(item=>item.selected))
      setOpen(false);
      items = items.map((item) => {
        item.selected = false;
        return item;
      });
    } else {
      input.current.focus();
      setOpen(true);
    }
  };
  const [newItemName, setNewItemName] = useState("");
  let changeNewItemName = (value) => {
    setNewItemName(value);
    filterItems(value);
  };
  let allItems = useSelector((state) => state.menuItems);
  // console.log(items)
  const [filteredItems, setFilteredItems] = useState([]);

  const filterItems = (filter) =>
    setFilteredItems(
      items.filter((item) => item.title.indexOf(filter) !== -1 || !filter)
    );
  useEffect(() => {
    items = allItems
      .filter(
        (item) =>
          item.type === activeType &&
          item.parents.indexOf(activeCategoryId) === -1
      )
      .map((item) => {
        item.selected = false;
        return item;
      });

    filterItems();
  }, []);

  let select = (itemId) => {
    items = items.map((item) => {
      if (item.id === itemId) item.selected = !item.selected;
      return item;
    });
    filterItems(newItemName);

    // console.log(itemId);
    // newSelectedItems.indexOf(itemId) === -1
    // 	? newSelectedItems.push(itemId)
    // 	: newSelectedItems.splice(newSelectedItems.indexOf(itemId), 1)

    // setSelectedItems(newSelectedItems		)
  };

  return (
    <Styled.SelectType className={"addMenuItems"}>
      <Styled.SelectBlock open={open}>
        <div className="title">
          <input
            ref={input}
            type={"text"}
            value={newItemName}
            placeholder={"search"}
            onChange={(e) => changeNewItemName(e.target.value)}
          />
          <p>Choose from the List</p>

          <Icon name={SVGNames.DropdownArrow} onClick={toggleItems} />
        </div>
        <div className="bg" onClick={toggleItems} />
        <div className="items">
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <div
                onClick={() => select(item.id)}
                key={item.id}
                className={`item whitCheckBox ${
                  item.selected ? "selected" : ""
                }`}
              >
                <div className="checkBox">
                  <Icon name={SVGNames.Checkmark} />
                </div>
                <div className="title">{item.title}</div>
              </div>
            ))
          ) : (
            <div className="item">No Options</div>
          )}
        </div>
      </Styled.SelectBlock>
    </Styled.SelectType>
  );
};
