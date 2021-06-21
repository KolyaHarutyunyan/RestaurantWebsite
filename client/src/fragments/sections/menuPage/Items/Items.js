import { Typography, Button, Select, useModal } from "@eachbase/components";
import { useSagaStore, itemActions } from "@eachbase/store";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Container } from "./style";
import { MODAL_NAMES } from "@eachbase/constants";
export const Items = ({ category }) => {
  const { open } = useModal();
  const currentCategory = useSelector(({ menuCategories }) => {
    if (!menuCategories.food.length && !menuCategories.drink.length) {
      return "NO_CATEGORIES";
    } else if (!category.categoryId) {
      return "NO_SElECTION";
    } else {
      return menuCategories[category.categoryType].find(
        (cCategory) => cCategory.category.id === category.categoryId
      );
    }
  });
  const getCurrentCategoryItemsSaga = useSagaStore(itemActions.get);

  useEffect(() => {
    if (currentCategory && typeof currentCategory === "object") {
      getCurrentCategoryItemsSaga.dispatch(category.categoryId);
    }
  }, [currentCategory]);

  if (currentCategory === "NO_CATEGORIES") {
    return null;
  }

  if (currentCategory === "NO_SElECTION") {
    return (
      <Container className="no-menu-items">
        <Typography weight="bold" size="1.5rem">
          SELECT CATEGORY
        </Typography>
      </Container>
    );
  }

  if (!currentCategory) {
    return null;
  }

  return (
    <Container>
      <div className="head">
        <Typography color="text" weight="bold" size="1.250rem">
          {currentCategory.category.name}
        </Typography>
        <Button color="action">Preview</Button>
      </div>
      <div className="add-or-choice">
        <Button
          onClick={() => open(MODAL_NAMES.MENU_ITEM_FORM)}
          link
          color="action"
          className="action-button"
        >
          <div className="circle">
            <AiOutlinePlus />
          </div>
          Add New Menu Item
        </Button>
        <Typography color="text">OR</Typography>
        <Select>
          <option>Choose from the list</option>
        </Select>
      </div>
    </Container>
  );
};
