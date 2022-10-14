import { useState, useEffect } from "react";
import { StyledFoodTabItem } from "./style";
import { CategoryCard, ProductCard } from "@eachbase/components";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { categoriesActions, useSagaStore } from "@eachbase/store";

export const FoodTabItem = () => {
  const [menu, setMenu] = useState({});
  const [foodCategory, setFoodCategory] = useState({});

  const menuById = useSelector((state) => state.menus.menuById);

  const createCategorySaga = useSagaStore(categoriesActions.createCategory);
  const editCategorySaga = useSagaStore(categoriesActions.editCategory);
  const deleteCategorySaga = useSagaStore(categoriesActions.deleteCategory);
  const switchCategorySaga = useSagaStore(categoriesActions.switchCategory);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (menuById) {
      setMenu(menuById);
    }
  }, [menuById]);

  const handleCurrentCategory = (category) => {
    setFoodCategory(category);
  };
  const handleEdit = (data, categoryId) => {
    // kavelacnem heto
    // editCategorySaga.dispatch(data, menu.id, categoryId);
  };
  const handleDelete = (categoryId) => {
    deleteCategorySaga.dispatch(menu.id, categoryId, "FOOD");
  };
  const handleSwitch = (categoryId) => {
    switchCategorySaga.dispatch(menu.id, categoryId);
  };

  const onSubmit = (data) => {
    data = {
      ...data,
      type: "FOOD",
    };
    createCategorySaga.dispatch(data, menu.id);
  };

  return (
    <StyledFoodTabItem>
      <CategoryCard
        categories={menu.food}
        handleCurrentCategory={handleCurrentCategory}
        currentCategory={foodCategory}
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSwitch={handleSwitch}
      />
      <ProductCard products={foodCategory.items} />
    </StyledFoodTabItem>
  );
};
