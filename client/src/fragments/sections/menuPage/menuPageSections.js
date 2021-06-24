import { useEffect, useState } from "react";
import { Container } from "./style";
import { Categories } from "./categories";
import { Items } from "./Items";
import { Menu } from "./menu";
import {
  useSagaStore,
  menusActions,
  businessesActions,
  categoriesActions,
  menuCategoriesActions,
  itemActions,
} from "@eachbase/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Icons } from "@eachbase/theme";
import { Typography } from "@eachbase/components";

export const MenuPageSections = () => {
  const router = useRouter();
  const { restaurantId, menuId } = router.query;

  const getCategoriesSaga = useSagaStore(categoriesActions.get);
  const getMenuCategoriesSaga = useSagaStore(menuCategoriesActions.get);
  const getCurrentMenuSaga = useSagaStore(menusActions.getCurrentMenu);
  const getBusinessItems = useSagaStore(itemActions.get);
  const getCurrentRestaurantSaga = useSagaStore(
    businessesActions.getCurentBusiness
  );
  const deleteCategoryFromMenuSaga = useSagaStore(menuCategoriesActions.delete);
  const deleteCategorySaga = useSagaStore(categoriesActions.delete);

  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "",
    categoryType: "food",
  });
  const menuCategories = useSelector(({ menuCategories }) => menuCategories);

  useEffect(() => {
    if (
      deleteCategorySaga.status.onSuccess ||
      deleteCategoryFromMenuSaga.status.onSuccess
    ) {
      setSelectedCategory({
        ...selectedCategory,
        categoryId: "",
      });
    }
  }, [deleteCategoryFromMenuSaga.status, deleteCategorySaga.status]);

  useEffect(() => {
    getCategoriesSaga.dispatch(restaurantId);
    getBusinessItems.dispatch(restaurantId);
    getMenuCategoriesSaga.dispatch(menuId);
    getCurrentRestaurantSaga.dispatch(restaurantId);
    getCurrentMenuSaga.dispatch(menuId);
  }, []);

  return (
    <Container className="container">
      <div className="grid">
        <Menu />
      </div>
      <div className="grid">
        <Categories
          value={selectedCategory}
          onChange={(categoryId, categoryType) =>
            setSelectedCategory(categoryId, categoryType)
          }
        />
        <Items category={selectedCategory} />
      </div>
      {!menuCategories.food.length && !menuCategories.drink.length ? (
        <div className="no-items">
          <Icons.MenuIcon />
          <Typography color="text" size="2rem" weight="bold">
            No Categories & Menu Items Yet
          </Typography>
        </div>
      ) : null}
    </Container>
  );
};
