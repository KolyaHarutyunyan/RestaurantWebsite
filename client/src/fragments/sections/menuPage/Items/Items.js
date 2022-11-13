import {
  Typography,
  Button,
  useModal,
  ItemCard,
  MultiSelect,
  Loader,
} from "@eachbase/components";
import { useSagaStore, categoryItemActions } from "@eachbase/store";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Container } from "./style";
import { MODAL_NAMES } from "@eachbase/constants";
import { useRouter } from "next/router";

export const Items = ({
  currentCategory,
  categType,
  categoryId,
  categoriesCheck,
  currentMenu,
}) => {
  const { httpOnLoad } = useSelector((state) => ({
    httpOnLoad: state.httpOnLoad,
  }));

  const loading =
    httpOnLoad.length && httpOnLoad[0] === "GET_CATEGORY_ITEMS"
      ? true
      : httpOnLoad.length && httpOnLoad[0] === "CREATE_ITEM"
      ? true
      : httpOnLoad.length && httpOnLoad[0] === "ADD_CATEGORY_ITEM"
      ? true
      : httpOnLoad.length && httpOnLoad[0] === "REORDER_CATEGORY_ITEM"
      ? true
      : httpOnLoad.length && httpOnLoad[0] === "CREATE_CATEGORY_ITEM";

  const { open } = useModal();
  const router = useRouter();
  const rout = useRouter();

  // const currentCategory = useSelector(({menuCategories}) => {
  //     if (!menuCategories.food.length && !menuCategories.drink.length) {
  //         return "NO_CATEGORIES";
  //     } else if (!category.categoryId) {
  //         return "NO_SElECTION";
  //     } else {
  //         return menuCategories[category.categoryType].find(
  //             (cCategory) => cCategory.category.id === category.categoryId
  //         );
  //     }
  // });

  const items = useSelector(({ items }) => items);
  const categoryItems = useSelector(({ categoryItems }) => categoryItems);

  // const allItems = [...currentMenu.food, ...currentMenu.drinks]
  const itemOptions = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const categoryItemOptions =
    currentCategory &&
    currentCategory.map((item) => ({
      label: item.item.name,
      value: item.item.id,
    }));

  const selectedOptions =
    categoryItemOptions &&
    categoryItemOptions.filter(
      (i) => !!itemOptions.find((cItem) => cItem.value === i.value)
    );

  const [itemsSelectSearchValue, setItemsSelectSearchValue] = useState("");
  const addItemInCategorySaga = useSagaStore(categoryItemActions.add);
  const removeItemFromCategorySaga = useSagaStore(categoryItemActions.delete);
  const itemsReorderSaga = useSagaStore(categoryItemActions.reorder);

  // if (currentCategory === "NO_CATEGORIES") {
  //     return null;
  // }
  if (categoriesCheck === "NO_SELECTED") {
    return (
      <Container className="no-menu-items">
        <Typography weight="bold" size="1.5rem">
          SELECT CATEGORY
        </Typography>
      </Container>
    );
  }

  // if (!currentCategory) {
  //     return <Container/>;
  // }
  const type = categType === "drinks" ? "DRINK" : "FOOD";
  const onCategoryItemsChange = (_options, newItem, removedItem) => {
    if (newItem.length) {
      addItemInCategorySaga.dispatch(
        router.query.menuId,
        categoryId,
        newItem[newItem.length - 1].value,
        type
      );
    }
    if (removedItem) {
      removeItemFromCategorySaga.dispatch(
        currentCategory.category.id,
        removedItem.value
      );
    }
  };

  const onDragEnd = (e) => {
    const from = e.source.index;
    const to = e.destination ? e.destination.index : null;
    itemsReorderSaga.dispatch(router.query.menuId, categoryId, type, {
      from,
      to,
    });
  };

  const item = categoryItems.reduce((data, current) => {
    data[current.rank] = current;
    return data;
  }, []);

  return (
    <Container>
      <div className="choose">
        <div className="head">
          <Typography className="categ-name" color="text" weight="bold">
            {currentCategory?.category?.name}
          </Typography>
          <button
            className="preview"
            // onClick={() => router.push(`/preview/${router.query.menuId}`)}
            onClick={() =>
              router.push(`/preview?menuId=${router.query.menuId}`)
            }
          >
            Preview
          </button>
        </div>
        <div className="add-or-choice">
          <Button
            // onClick={() =>
            //   open(MODAL_NAMES.MENU_ITEM_FORM, {
            //     categoryId: categoryId,
            //     menuId: rout.query.menuId,
            //     categoryType: type,
            //   })
            // }
            link
            color="action"
            className="action-button"
          >
            <div className="circle">
              <AiOutlinePlus />
            </div>
            Create New Menu Item
          </Button>
          <p className="or-style">OR</p>
          {/*<Typography weight="bold" color="text" className='or'>OR</Typography>*/}
          <MultiSelect
            categType={categType}
            categoryItems={currentCategory}
            searchBarValue={itemsSelectSearchValue}
            selected={selectedOptions}
            onSearchBarValueChange={(value) => setItemsSelectSearchValue(value)}
            onChange={(values, newValue, removedValue) =>
              onCategoryItemsChange(values, newValue, removedValue)
            }
            options={itemOptions}
          />
        </div>
      </div>
      {loading ? (
        <div className="loader-section">
          <Loader />
        </div>
      ) : currentCategory && currentCategory.length ? (
        <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
          <Droppable droppableId="category-items-list">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="list"
              >
                {currentCategory.map((categoryItem, index) => (
                  <Draggable
                    key={categoryItem.item.id}
                    draggableId={categoryItem.item.id}
                    index={index}
                  >
                    {(provided) => (
                      <ItemCard
                        categoryId={categoryId}
                        categoryType={type}
                        key={`${categoryItem.item.id}-${index}`}
                        item={categoryItem}
                        // onRequestToEdit={() =>
                        //   open(MODAL_NAMES.MENU_ITEM_FORM, {
                        //     categoryItem,
                        //     currentCategory,
                        //     menuId: rout.query.menuId,
                        //   })
                        // }
                        // onRequestToDelete={() =>
                        //     open(MODAL_NAMES.CONFIRM_ITEM_DELETION, {
                        //         categoryItem,
                        //         currentCategory,
                        //         categoryId,
                        //         menuId : rout.query.menuId,
                        //         type: categType
                        //     })
                        // }
                        // key={`${categoryItem.item.id}-${index}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div className="no-menu-screen">
          <Typography>No Menu Items Yet</Typography>
        </div>
      )}
    </Container>
  );
};
