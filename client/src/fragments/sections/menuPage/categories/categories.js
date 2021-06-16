import { Container } from "./style";
import { Tabs, Button, ProSelect } from "@eachbase/components";
import { useEffect, useState } from "react";
import { Typography } from "@eachbase/components";
import { IoIosTrash } from "react-icons/io";
import { categoriesActions, useSagaStore } from "@eachbase/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export const Categories = () => {
  const [activeTab, setActiveTab] = useState("food");
  const [categoriesSelect, setCategoriesSelect] = useState({
    value: null,
    options: [],
  });
  const {
    query: { restaurantId, menuId },
  } = useRouter();
  const [searchBarValue, setSearchBarValue] = useState("");

  const categoriesList = useSelector(({ categories }) =>
    categories ? categories[activeTab] : []
  );
  const createCategorySaga = useSagaStore(categoriesActions.createCategory);

  const createCategoryAction = () =>
    createCategorySaga.dispatch(
      {
        name: searchBarValue,
        description: "",
        businessId: restaurantId,
      },
      menuId,
      activeTab
    );

  useEffect(() => {
    if (categoriesList.length) {
      setCategoriesSelect({
        value: categoriesList[categoriesList.length - 1].category.id,
        options: categoriesList.map(({ category }) => ({
          label: category.name,
          value: category.id,
        })),
      });
    }
  }, [categoriesList]);
  useEffect(() => {
    if (createCategorySaga.status.onSuccess) {
      setSearchBarValue("");
    }
  }, [createCategorySaga.status]);

  return (
    <Container>
      <Tabs.Wrapper
        activeTab={activeTab}
        onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
      >
        <Tabs.TabHeader>
          <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
          <Tabs.TabTitle tabName="drink">Drink</Tabs.TabTitle>
        </Tabs.TabHeader>
        <div className="select-create-category">
          <div className="select-wrapper">
            <ProSelect
              onChange={(value, options) => {
                setCategoriesSelect({
                  value,
                  options,
                });
              }}
              onSearchBarValueChange={(value) => setSearchBarValue(value)}
              options={categoriesSelect.options}
              value={categoriesSelect.value}
            />
          </div>
          <Button
            disabled={
              !searchBarValue ||
              !!categoriesSelect.options.find(
                (option) => option.label === searchBarValue
              )
            }
            onClick={() => createCategoryAction()}
          >
            Add
          </Button>
        </div>
        <Tabs.TabContent contentOf="food">
          <ul className="categories">
            {categoriesList.map(({ category }) => (
              <li key={category.id}>
                <Typography className="category-name" color="text">
                  {category.name}
                  <span className="action">
                    <Button link>
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
            {categoriesList.map(({ category }) => (
              <li key={category.id}>
                <Typography className="category-name" color="text">
                  {category.name}
                  <span className="action">
                    <Button link>
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
