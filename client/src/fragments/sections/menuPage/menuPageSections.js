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
import { Typography, LazyLoad } from "@eachbase/components";

export const MenuPageSections = () => {
  const router = useRouter();
  const { restaurantId, menuId } = router.query;

  console.log( router.query,' router.query')
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

    if (deleteCategorySaga.status.onSuccess || deleteCategoryFromMenuSaga.status.onSuccess) {
      setSelectedCategory({...selectedCategory, categoryId: "",});
    }
  }, [deleteCategoryFromMenuSaga.status, deleteCategorySaga.status]);

  useEffect(() => {
    if(router.query.restaurantId && router.query.menuId) {
      getCategoriesSaga.dispatch(restaurantId);
      getBusinessItems.dispatch(restaurantId);
      getMenuCategoriesSaga.dispatch(menuId);
      getCurrentRestaurantSaga.dispatch(restaurantId);
      getCurrentMenuSaga.dispatch(menuId);
    }
  }, [router.query.restaurantId && router.query.menuId]);


  const categories = useSelector(({ categories }) => categories);

  return (
      <div style={{ backgroundImage: 'linear-gradient(to bottom,#ffffff,#fdfdfd,#fafafb,#f8f8f8,#f6f5f6,#f5f3f5,#f4f2f3,#f3f0f2,#f2eff1,#f1eef0,#f0edef,#efecee)',}}>
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

          <Items categType={selectedCategory.categoryType} category={selectedCategory} />
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
      </div>
  );
};
