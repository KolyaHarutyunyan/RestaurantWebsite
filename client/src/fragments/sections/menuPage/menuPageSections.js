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
  const getCurrentRestaurantSaga = useSagaStore(
    businessesActions.getCurentBusiness
  );
  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "",
    categoryType: "food",
  });
  const menuCategories = useSelector(({ menuCategories }) => menuCategories);

  useEffect(() => {
    getCategoriesSaga.dispatch(restaurantId);
    getMenuCategoriesSaga.dispatch(menuId);
    getCurrentRestaurantSaga.dispatch(restaurantId);
    getCurrentMenuSaga.dispatch(menuId);
  }, []);

  return (
    <Container className="container">
      <div className="grid">
        <Menu />
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
