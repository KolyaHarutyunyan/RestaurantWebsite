import { useSelector } from "react-redux";
import { Styled } from ".";
import { Button } from "@eachbase/components";
import { useContext } from "react";

export const CategoriesItem = ({ categoryId, activeCategory, changeTo }) => {
  let category = useSelector(
    (state) =>
      state.categories.find((category) => category.id === categoryId) || false
  );

  if (!category) return null;
  return (
    <Styled.CategoryItem
      active={categoryId === activeCategory}
      onClick={() => changeTo(categoryId)}
    >
      <div className="name">
        {category.title}
        <Button
          onClick={() =>
            openModal.removeCategory({ id: categoryId, parentName: "menuName" })
          }
          type={"remove"}
        />
      </div>
      ICON
    </Styled.CategoryItem>
  );
};
