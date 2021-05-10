import { Styled } from "./style";
import { useSelector } from "react-redux";
import { Button, ItemImage } from "@eachbase/components";

export const MenuItem = ({ itemId, parentName }) => {
  let item = useSelector(
    ({ menuItems = [] }) =>
      menuItems.find((menuItem) => menuItem.id === itemId) || false
  );
  if (!item) return null;
  return (
    <Styled.Block>
      <ItemImage url={item.imageUrl[0]} type={item.type} />
      <Styled.BlockInfo>
        <div className="title">
          <span className="name">{item.title}</span>
          <span className="price">${item.price}</span>
        </div>
        <div className="description">{item.description}</div>
        <div className="options">
          <div className="option">{item.options || ""}</div>
          <div className="actions">
            <Button
              type={"edit"}
              onClick={() =>
                openModal.editMenuItem({ data: item, title: "Edit Menu Item" })
              }
            />
            <Button
              className={"remove"}
              type={"remove"}
              onClick={() =>
                openModal.removeMenuItem({ id: item.id, parentName })
              }
            />
          </div>
        </div>
      </Styled.BlockInfo>
    </Styled.Block>
  );
};
