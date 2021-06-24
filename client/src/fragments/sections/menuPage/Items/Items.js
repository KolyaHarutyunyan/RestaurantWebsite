import {
  Typography,
  Button,
  useModal,
  ItemCard,
  MultiSelect,
} from "@eachbase/components";
import { useSagaStore, categoryItemActions } from "@eachbase/store";
import { useEffect, useState } from "react";
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
  const items = useSelector(({ items }) => items);
  const categoryItems = useSelector(({ categoryItems }) => categoryItems);

  const itemOptions = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const categoryItemOptions = categoryItems.map((item) => ({
    label: item.item.name,
    value: item.item.id,
  }));
  const selectedOptions = categoryItemOptions.filter(
    (i) => !!itemOptions.find((cItem) => cItem.value === i.value)
  );

  const [itemsSelectSearchValue, setItemsSelectSearchValue] = useState("");
  const getCurrentCategoryItemsSaga = useSagaStore(categoryItemActions.get);
  const addItemInCategorySaga = useSagaStore(categoryItemActions.add);
  const removeItemFromCategorySaga = useSagaStore(categoryItemActions.delete);

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
    return <Container />;
  }

  const onCategoryItemsChange = (_options, newItem, removedItem) => {
    if (newItem) {
      addItemInCategorySaga.dispatch(
        currentCategory.category.id,
        newItem.value
      );
    }
    if (removedItem) {
      removeItemFromCategorySaga.dispatch(
        currentCategory.category.id,
        removedItem.value
      );
    }
  };

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
          onClick={() =>
            open(MODAL_NAMES.MENU_ITEM_FORM, {
              categoryId: currentCategory.category.id,
            })
          }
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
        <MultiSelect
          searchBarValue={itemsSelectSearchValue}
          selected={selectedOptions}
          onSearchBarValueChange={(value) => setItemsSelectSearchValue(value)}
          onChange={(values, newValue, removedValue) =>
            onCategoryItemsChange(values, newValue, removedValue)
          }
          options={itemOptions}
        />
      </div>
      <div className="list">
        {categoryItems.map((categoryItem, index) => (
          <ItemCard
            key={`${categoryItem.id}-${index}`}
            item={categoryItem}
            onRequestToEdit={() =>
              open(MODAL_NAMES.MENU_ITEM_FORM, { categoryItem, category })
            }
            onRequestToDelete={() =>
              open(MODAL_NAMES.CONFIRM_ITEM_DELETION, {
                categoryItem,
                category,
              })
            }
          />
        ))}
      </div>
    </Container>
  );
};
