import { useState, useEffect } from "react";
import { StyledFoodTabItem, StyledMenuDrawer } from "./style";
import { CategoryCard, ItemFormCard, ProductCard } from "@eachbase/components";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { categoriesActions, useSagaStore } from "@eachbase/store";
import { CategoryForm, ProductForm } from "./common";
import {
  CATEGORY_FORM,
  getFormCardTitle,
  PRODUCT_FORM_ADD,
  PRODUCT_FORM_EDIT,
} from "./constants";

export const FoodTabItem = () => {
  const menu = useSelector((state) => state.menus.menuById);

  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const editCategorySaga = useSagaStore(categoriesActions.editCategory);
  const deleteCategorySaga = useSagaStore(categoriesActions.deleteCategory);
  const switchCategorySaga = useSagaStore(categoriesActions.switchCategory);

  const [foodCategory, setFoodCategory] = useState(null);
  const [chosenFoodCategory, setChosenFoodCategory] = useState(null);
  const [chosenFoodProduct, setChosenFoodProduct] = useState(null);
  const [drawerPosition, setDrawerPosition] = useState({ right: false });
  const [formContentLabel, setFormContentLabel] = useState("");

  const createCategoryForm = useForm();
  const editCategoryForm = useForm();

  useEffect(() => {
    if (createCategorySaga.status.onSuccess) {
      createCategorySaga.destroy.success();
      createCategoryForm.reset();
    }
  }, [createCategorySaga.status]);

  useEffect(() => {
    if (deleteCategorySaga.status.onSuccess) {
      deleteCategorySaga.destroy.success();
      if (foodCategory?.id === chosenFoodCategory?.id) {
        setFoodCategory(null);
      }
    }
  }, [deleteCategorySaga.status]);

  const toggleDrawer = (anchor, open) => {
    setDrawerPosition({ ...drawerPosition, [anchor]: open });
  };

  const handleCurrentCategory = (category) => {
    setFoodCategory(category);
  };
  const handleCategoryEdit = (category) => {
    setChosenFoodCategory(category);
    setFormContentLabel(CATEGORY_FORM);
    toggleDrawer("right", true);
  };
  const handleCategoryDelete = (category) => {
    setChosenFoodCategory(category);
    deleteCategorySaga.dispatch(menu.id, category.id, "FOOD");
  };
  const handleCategorySwitch = (categoryId) => {
    switchCategorySaga.dispatch(menu.id, categoryId);
  };
  const handleCategoryAdd = (data) => {
    data = {
      ...data,
      type: "FOOD",
    };
    createCategorySaga.dispatch(data, menu.id);
  };

  const handleProductAdd = () => {
    setFormContentLabel(PRODUCT_FORM_ADD);
    toggleDrawer("right", true);
  };
  const handleProductEdit = (product) => {
    setChosenFoodProduct(product);
    setFormContentLabel(PRODUCT_FORM_EDIT);
    toggleDrawer("right", true);
  };
  const handleProductDelete = (product) => {
    setChosenFoodProduct(product);
  };
  const handleProductSwitch = (productId) => {};
  const handleCategorySave = (data) => {
    data = {
      ...data,
      type: "FOOD",
    };
    editCategorySaga.dispatch(data, menu.id, chosenFoodCategory?.id);
  };

  return (
    <>
      <StyledFoodTabItem>
        <CategoryCard
          categories={menu.food}
          handleCurrentCategory={handleCurrentCategory}
          currentCategory={foodCategory}
          loader={createCategorySaga.status.onLoad}
          handleCategoryAdd={createCategoryForm.handleSubmit(handleCategoryAdd)}
          register={createCategoryForm.register}
          handleCategoryEdit={handleCategoryEdit}
          handleCategoryDelete={handleCategoryDelete}
          handleCategorySwitch={handleCategorySwitch}
          noItemsText={"no menu categories yet"}
        />
        <ProductCard
          products={foodCategory?.items}
          currentCategory={foodCategory}
          handleProductAdd={handleProductAdd}
          handleProductEdit={handleProductEdit}
          handleProductDelete={handleProductDelete}
          handleProductSwitch={handleProductSwitch}
          selectText={"select category"}
          noItemsText={"no menu items yet"}
        />
      </StyledFoodTabItem>
      <StyledMenuDrawer
        anchor={"right"}
        open={drawerPosition.right}
        onClose={() => toggleDrawer("right", false)}
      >
        <ItemFormCard
          formCardTitle={getFormCardTitle(formContentLabel)}
          handleClose={() => toggleDrawer("right", false)}
        >
          {formContentLabel === "CATEGORY_FORM" ? (
            <CategoryForm
              chosenCategory={chosenFoodCategory}
              handleCategorySave={editCategoryForm.handleSubmit(
                handleCategorySave
              )}
              register={editCategoryForm.register}
            />
          ) : formContentLabel === "PRODUCT_FORM" ? (
            <ProductForm />
          ) : null}
        </ItemFormCard>
      </StyledMenuDrawer>
    </>
  );
};
