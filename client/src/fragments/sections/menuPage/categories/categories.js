import { Container } from "./style";
import { Tabs, Button, ProSelect } from "@eachbase/components";
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

export const Categories = ({ value, onChange }) => {
  const [activeTab, setActiveTab] = useState("food");
  const [categoriesSelectValue, setCategoriesSelectValue] = useState(null);
  const {
    query: { restaurantId, menuId },
  } = useRouter();

  const menuCategories = useSelector(({ menuCategories }) => menuCategories);
  const categories = useSelector(({ categories }) => categories);
  const categoriesOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  useEffect(() => {
    if (categories.length && !categoriesSelectValue) {
      setCategoriesSelectValue(categories[0].id);
    }
  }, [categories]);

  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const deleteCategoryFromMenuSaga = useSagaStore(menuCategoriesActions.delete);

  const [searchBarValue, setSearchBarValue] = useState("");

  // const createCategoryAction = () => {
  //   if (categoriesSelectValue.value) {
  //   } else {
  //     createCategorySaga.dispatch({
  //       name: searchBarValue,
  //       description: "",
  //       businessId: restaurantId,
  //     });
  //   }
  // };

  const onRequestToDelete = (category, categoryType) => {
    if (window.confirm("Are you sure?")) {
      deleteCategoryFromMenuSaga.dispatch(menuId, category.id, categoryType);
    }
  };

  const addButtonDisableCondition = searchBarValue
    ? categories.find((category) => {
        return category.name.indexOf(searchBarValue) !== -1;
      })
    : !!menuCategories[activeTab].find(
        (option) => option.label === searchBarValue
      ) || searchBarValue;

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
          <Tabs.TabTitle tabName="drink">Drink</Tabs.TabTitle>
        </Tabs.TabHeader>
        <div className="select-create-category">
          <div className="select-wrapper">
            <ProSelect
              onChange={(value) => {
                setCategoriesSelectValue(value);
              }}
              searchBarValue={searchBarValue}
              onSearchBarValueChange={(value) => {
                console.log(value);
                setSearchBarValue(value);
              }}
              options={categoriesOptions}
              value={categoriesSelectValue}
            />
          </div>
          <Button
            disabled={addButtonDisableCondition}
            onClick={() => createCategoryAction()}
          >
            Add
          </Button>
        </div>
        <Tabs.TabContent contentOf="food">
          <ul className="categories">
            {menuCategories["food"].map(({ category }) => (
              <li
                key={category.id}
                className={value.categoryId === category.id ? "selected" : ""}
                onClick={() => onChange({ ...value, categoryId: category.id })}
              >
                <Typography className="category-name" color="text">
                  {category.name}
                  <span className="action">
                    <Button
                      link
                      onClick={() => onRequestToDelete(category, "food")}
                    >
                      <span className="icon">
                        <IoIosTrash />
                      </span>
                      Delete
                    </Button>
                  </span>
                </Typography>
              </li>
            ))}
          </ul>
        </Tabs.TabContent>
        <Tabs.TabContent contentOf="drink">
          <ul className="categories">
            {menuCategories["drink"].map(({ category }) => (
              <li
                key={category.id}
                className={value.categoryId === category.id ? "selected" : ""}
                onClick={() => onChange({ ...value, categoryId: category.id })}
              >
                <Typography className="category-name" color="text">
                  {category.name}
                  <span className="action">
                    <Button
                      link
                      onClick={() => onRequestToDelete(category, "drink")}
                    >
                      <span className="icon">
                        <IoIosTrash />
                      </span>
                      Delete
                    </Button>
                  </span>
                </Typography>
              </li>
            ))}
          </ul>
        </Tabs.TabContent>
      </Tabs.Wrapper>
    </Container>
  );
};
