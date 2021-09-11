import { Container } from "./style";
import {Tabs, Button, ProSelect, useModal, ToolTipScreen, HtmlTooltip, SlicedText} from "@eachbase/components";
import { useEffect, useState } from "react";
import { Typography } from "@eachbase/components";
import { IoIosTrash } from "react-icons/io";
import {
  categoriesActions,
  useSagaStore,
  menuCategoriesActions,
} from "@eachbase/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { MODAL_NAMES } from "@eachbase/constants";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Icons} from "@eachbase/theme";
import CreatableSelect from 'react-select/creatable';
export const Categories = ({ value, onChange }) => {
  const { open } = useModal();
  const {
    query: { restaurantId, menuId },
  } = useRouter();

  const [activeTab, setActiveTab] = useState("food");
  const [searchBarValue, setSearchBarValue] = useState("");
  const [categoriesSelectValue, setCategoriesSelectValue] = useState(null);
  const menuCategories = useSelector(({ menuCategories }) => menuCategories);
  const categories = useSelector(({ categories }) => categories);
  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const addCategoryIntoMenuSaga = useSagaStore(
    menuCategoriesActions.addCategory
  );
  const categoryReorderSaga = useSagaStore(menuCategoriesActions.reorder);

  const categoriesOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));


  // useEffect(() => {
  //   if (categories.length && !categoriesSelectValue) {
  //     setCategoriesSelectValue(categories[0].id);
  //   }
  // }, [categories]);

  const createAddCategoryAction = () => {
    const areCategoryInBusiness = categories.find((cCategory) => {
      if (categoriesSelectValue) {
        if (categoriesSelectValue === cCategory.name) {
          return true;
        }
        return false;
      }
      if (categoriesSelectValue === cCategory.id) {
        return true;
      }
      return false;
    });

    if (areCategoryInBusiness) {
      addCategoryIntoMenuSaga.dispatch(
        menuId,
        areCategoryInBusiness.id,
        activeTab
      );
    } else {
      createCategorySaga.dispatch(
        {
          name: categoriesSelectValue.label,
          description: "",
          businessId: restaurantId,
        },
        menuId,
        activeTab
      );
    }
  };

  const onRequestToDelete = (category) => {
    open(MODAL_NAMES.CONFIRM_CATEGORY_DELETION, {
      ...category,
      categoryType: activeTab,
    });
  };

  const addButtonDisableCondition = () => {
    const areCategoryInMenu = !!menuCategories[activeTab].find((item) => {
      if (categoriesSelectValue) {
        return item.category.name === categoriesSelectValue;
      } else if (
          categoriesSelectValue &&
          categoriesSelectValue === item.category.id
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (areCategoryInMenu) {
      return true;
    }
  };

  const onDragEnd = (e, categoryType) => {
    const itemId = e.draggableId;
    const from = e.source.index;
    const to = e.destination ? e.destination.index : null;
    if (to && from !== to) {
      categoryReorderSaga.dispatch(categoryType, itemId, { from, to });
    }
  };

  const foodCategories = menuCategories["food"].reduce((data, current) => {
    data[current.rank] = current;
    return data;
  }, []);

  const drinkCategories = menuCategories["drink"].reduce((data, current) => {
    data[current.rank] = current;
    return data;
  }, []);


  const category = categoriesSelectValue === null ? true :
      categoriesOptions.filter((item) =>(item.label === categoriesSelectValue.label))

  return (
    <Container>
      <Tabs.Wrapper
        activeTab={activeTab}
        onRequestToChange={(newActiveTab) => {
          onChange({ categoryId: "", categoryType: newActiveTab });
          setActiveTab(newActiveTab);
        }}
      >
        <Tabs.TabHeader>
          <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
          <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
        </Tabs.TabHeader>
        <div className="select-create-category">
          <div className="select-wrapper">
            <CreatableSelect
                isClearable
                onChange={(value) => {setCategoriesSelectValue(value);}}
                placeholder={'Select/Create Category'}
                options={categoriesOptions}
            />

            {/*<ProSelect*/}
            {/*  onChange={(value) => {*/}
            {/*    setCategoriesSelectValue(value);*/}
            {/*  }}*/}
            {/*  searchBarValue={searchBarValue}*/}
            {/*  onSearchBarValueChange={(value) => setSearchBarValue(value)}*/}
            {/*  options={categoriesOptions}*/}
            {/*  value={categoriesSelectValue}*/}
            {/*  onSubmit={createAddCategoryAction}*/}
            {/*/>*/}
          </div>
          <Button
              height={'48px'}
              square
              onLoad={addCategoryIntoMenuSaga.status.onLoad || createCategorySaga.status.onLoad}
              disabled={categoriesSelectValue ? category === true ? true : !!category.length : true}
              onClick={() => createAddCategoryAction()}
          >
            Add
          </Button>
        </div>
        <Tabs.TabContent contentOf="food">
          <DragDropContext onDragEnd={(e) => onDragEnd(e, "food")}>
            <Droppable droppableId="food-category-list">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="categories"
                >
                  {foodCategories.map(({ rank, category }) => (
                    <Draggable
                      key={category.id}
                      draggableId={category.id}
                      index={rank}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          key={category.id}
                          className={
                            value.categoryId === category.id ? "selected" : ""
                          }
                          onClick={() =>
                            onChange({ ...value, categoryId: category.id })
                          }
                        >
                          <Typography className="category-name" color="text">
                            <SlicedText type={'name'} size={10} data={category && category.name}/>
                          </Typography>

                          <div className={'delete-arrow'} >
                               <span className="action">
                              <Button
                                  className={'delete-button'}
                                  link
                                  onClick={() =>
                                      onRequestToDelete(category, "food")
                                  }
                              >
                                <span className="icon">
                                      <Icons.DeleteButtonSmall />
                                </span>
                                Delete
                              </Button>
                            </span>
                            <Icons.Forward/>
                          </div>

                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Tabs.TabContent>
        <Tabs.TabContent contentOf="drink">
          <DragDropContext onDragEnd={(e) => onDragEnd(e, "drink")}>
            <Droppable droppableId="drink-category-list">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="categories"
                >
                  {drinkCategories.map(({ rank, category }) => (
                    <Draggable
                      key={category.id}
                      draggableId={category.id}
                      index={rank}
                    >
                      {(provided, _snapshot) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          key={category.id}
                          className={
                            value.categoryId === category.id ? "selected" : ""
                          }
                          onClick={() =>
                            onChange({ ...value, categoryId: category.id })
                          }
                        >
                          <Typography className="category-name" color="text">
                            <SlicedText type={'name'} size={10} data={category && category.name}/>
                          </Typography>

                          <div className={'delete-arrow'} >
                               <span className="action">
                              <Button
                                  className={'delete-button'}
                                  link
                                  onClick={() =>
                                      onRequestToDelete(category, "drink")
                                  }
                              >
                                <span className="icon">
                                      <Icons.DeleteButtonSmall />
                                </span>
                                Delete
                              </Button>
                            </span>
                            <Icons.Forward/>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Tabs.TabContent>
      </Tabs.Wrapper>
    </Container>
  );
};
