import { Container } from "./style";
import { Categories } from "./categories";
import { Items } from "./Items";
import { Menu } from "./menu";
import { useSagaStore, menusActions, businessesActions } from "@eachbase/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
export const MenuPageSections = () => {
  const router = useRouter();
  const { restaurantId, menuId } = router.query;

  const getCurrentMenuSaga = useSagaStore(menusActions.getCurrentMenu);
  const getCurrentRestaurantSaga = useSagaStore(
    businessesActions.getCurentBusiness
  );

  useEffect(() => {
    getCurrentRestaurantSaga.dispatch(restaurantId);
    getCurrentMenuSaga.dispatch(menuId);
  }, []);

  return (
    <Container className="container">
      <Menu />
      <Categories />
      <Items />
    </Container>
  );
};
