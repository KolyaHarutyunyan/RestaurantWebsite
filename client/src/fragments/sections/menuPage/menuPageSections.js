import { Container } from "./style";
import { Categories } from "./categories";
import { Items } from "./Items";
import { Menu } from "./menu";
import {
  useSagaStore,
  menusActions,
  businessesActions,
  categoriesActions,
} from "@eachbase/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
export const MenuPageSections = () => {
  const router = useRouter();
  const { restaurantId, menuId } = router.query;

  const getCurrentMenuSaga = useSagaStore(menusActions.getCurrentMenu);
  const getCurrentRestaurantSaga = useSagaStore(
    businessesActions.getCurentBusiness
  );
  const getMenuCategoriesSaga = useSagaStore(categoriesActions.getCategories);

  useEffect(() => {
    getCurrentRestaurantSaga.dispatch(restaurantId);
    getCurrentMenuSaga.dispatch(menuId);
    getMenuCategoriesSaga.dispatch(menuId);
  }, []);

  return (
    <Container className="container">
      <Menu />
      <Categories />
      <Items />
    </Container>
  );
};
