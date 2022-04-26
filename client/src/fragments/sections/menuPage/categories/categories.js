import { Container } from "./style";
import {Tabs, Button, useModal, SlicedText, Input, Loader} from "@eachbase/components";
import { useEffect, useState } from "react";
import { Typography } from "@eachbase/components";
import {
  categoriesActions,
  useSagaStore,
  menuCategoriesActions,
} from "@eachbase/store";
import { useRouter } from "next/router";
import { useSelector} from "react-redux";
import { MODAL_NAMES } from "@eachbase/constants";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Icons} from "@eachbase/theme";
import {FindLoad} from "../../../../utils";


export const Categories = ({ value, onChange, currentMenu }) => {
  const { open } = useModal();
  const {
    query: { restaurantId, menuId },
  } = useRouter();


  const [activeTab, setActiveTab] = useState("food");
  const [categoriesSelectValue, setCategoriesSelectValue] = useState(null);
  const menuCategories = useSelector(({ menuCategories }) => menuCategories);
  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const addCategoryIntoMenuSaga = useSagaStore(
    menuCategoriesActions.addCategory
  );
  const categoryReorderSaga = useSagaStore(menuCategoriesActions.reorder);


  const { httpOnSuccess } = useSelector((state) => ({
    httpOnSuccess: state.httpOnSuccess,
  }));


  const success = httpOnSuccess.length && httpOnSuccess[0].type === "CREATE_CATEGORY"

  useEffect(() => {
    if (success) {
      setCategoriesSelectValue('')
    }
  }, [success]);

  const createAddCategoryAction = () => {
    const categoryType = activeTab === 'food' ? 'FOOD' : 'DRINK'
      if(categoriesSelectValue) {
        createCategorySaga.dispatch({
              name: categoriesSelectValue,
              type: categoryType,
            },
            menuId,
            activeTab
        );
    }
  };



  const onRequestToDelete = (category) => {
    open(MODAL_NAMES.CONFIRM_CATEGORY_DELETION, {
      ...category, categoryType: activeTab,
    });
  };

  // const addButtonDisableCondition = () => {
  //   const areCategoryInMenu = !!menuCategories[activeTab].find((item) => {
  //     if (categoriesSelectValue) {
  //       return item.category.name === categoriesSelectValue;
  //     } else if (
  //         categoriesSelectValue &&
  //         categoriesSelectValue === item.category.id
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   if (areCategoryInMenu) {
  //     return true;
  //   }
  // };

  const onDragEnd = (e, categoryType) => {
    const itemId = e.draggableId;
    const from = e.source.index;
    const to = e.destination ? e.destination.index : null;
      categoryReorderSaga.dispatch(categoryType, menuId, itemId, { from, to });
  };

  const loader = FindLoad('REORDER_MENU_CATEGORY')
  return (
    <Container>
      <Tabs.Wrapper
        activeTab={activeTab}
        onRequestToChange={(newActiveTab) => {
          onChange({ categoryId: "", categoryType: newActiveTab });
          setActiveTab(newActiveTab);
          sessionStorage.setItem('activeTab',newActiveTab)
        }}
      >
        <Tabs.TabHeader>
          <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
          <Tabs.TabTitle tabName="drinks">Drinks</Tabs.TabTitle>
        </Tabs.TabHeader>
        <div className="select-create-category">

          <div className="select-wrapper">

             <Input
                 className='select-input'
                 type={'no'}
                 variant='outlined'
                 value={categoriesSelectValue}
                 placeholder={'Create Category'}
                 onChange={(ev) => {setCategoriesSelectValue(ev.target.value);}}
             />

          </div>
          <Button
              height={'48px'}
              square
              onLoad={addCategoryIntoMenuSaga.status.onLoad || createCategorySaga.status.onLoad}
              // disabled={categoriesSelectValue ? category === true ? true : !!category.length : true}
              onClick={() => createAddCategoryAction()}
          >
            Add
          </Button>
        </div>
        {loader.length ?
            <div className='loader-section' >
              <Loader/>
            </div>
            :
            <>
              <Tabs.TabContent contentOf="food">
                <DragDropContext onDragEnd={(e) => onDragEnd(e, "food")}>
                  <Droppable droppableId="food-category-list">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="categories"
                        >
                          {currentMenu.food && currentMenu.food.map((category, rank) => (
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
                                            onChange({
                                              ...value,
                                              categoryItems: category.items,
                                              categoryType: 'food',
                                              categoryId: category.id
                                            })
                                        }
                                    >
                                      <Typography className="category-name" color="text">
                                        <SlicedText type={'name'} size={10} data={category.name}/>
                                      </Typography>

                                      <div className={'delete-arrow'}>
                               <span className="action">
                              <Button
                                  className={'delete-button'}
                                  link
                                  onClick={() =>
                                      onRequestToDelete(category, "food")
                                  }
                              >
                                <span className="icon">
                                      <Icons.DeleteButtonSmall/>
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
              <Tabs.TabContent contentOf="drinks">
                <DragDropContext onDragEnd={(e) => onDragEnd(e, "drinks")}>
                  <Droppable droppableId="drinks-category-list">
                    {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="categories"
                        >
                          {currentMenu.drinks && currentMenu.drinks.map((category, rank) => (
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
                                        className={value.categoryId === category.id ? "selected" : ""}
                                        onClick={() =>
                                            onChange({
                                              ...value,
                                              categoryItems: category.items,
                                              categoryType: 'drinks',
                                              categoryId: category.id
                                            })
                                        }
                                    >
                                      <Typography className="category-name" color="text">
                                        <SlicedText type={'name'} size={10} data={category && category.name}/>
                                      </Typography>

                                      <div className={'delete-arrow'}>
                               <span className="action">
                              <Button
                                  className={'delete-button'}
                                  link
                                  onClick={() => onRequestToDelete(category, "drinks")}
                              >
                                <span className="icon">
                                      <Icons.DeleteButtonSmall/>
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
            </>
        }
      </Tabs.Wrapper>
    </Container>
  );
};
