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
import { Typography, LazyLoad, Loader } from "@eachbase/components";
import { FindLoad } from "../../../utils";

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
    categoryItems: "",
    categoryType: "food",
    categoryId: "",
  });

  // const menuCategories = useSelector(({ food }) => menuCategories);

  useEffect(() => {
    if (
      deleteCategorySaga.status.onSuccess ||
      deleteCategoryFromMenuSaga.status.onSuccess
    ) {
      setSelectedCategory({ ...selectedCategory, categoryId: "" });
    }
  }, [deleteCategoryFromMenuSaga.status, deleteCategorySaga.status]);

  useEffect(() => {
    if (router.query.restaurantId && router.query.menuId) {
      // getCategoriesSaga.dispatch(restaurantId);
      getBusinessItems.dispatch(restaurantId);
      getMenuCategoriesSaga.dispatch(menuId);
      getCurrentRestaurantSaga.dispatch(restaurantId);

      getCurrentMenuSaga.dispatch(menuId);
    }
  }, [router.query.restaurantId && router.query.menuId]);

  const currentMenu = useSelector(({ menus }) => menus);
  const categoriesCheck = selectedCategory.categoryItems
    ? selectedCategory.categoryItems
    : "NO_SELECTED";
  const categoryCheck = currentMenu[selectedCategory.categoryType];

  useEffect(async () => {
    if (currentMenu) {
      if (selectedCategory.categoryId) {
        const newItems = await currentMenu[selectedCategory.categoryType].find(
          (i) => i.id === selectedCategory.categoryId && i.items
        );
        if (newItems) {
          setSelectedCategory({
            categoryItems: newItems.items,
            categoryType: selectedCategory.categoryType,
            categoryId: selectedCategory.categoryId,
          });
        }
      }
    }
  }, [currentMenu]);

  const loader = FindLoad("GET_CURRENT_BUSINESS");

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom,#ffffff,#fdfdfd,#fafafb,#f8f8f8,#f6f5f6,#f5f3f5,#f4f2f3,#f3f0f2,#f2eff1,#f1eef0,#f0edef,#efecee)",
      }}
    >
      <Container className="container">
        {loader.length ? (
          <div className="load-wrapper">
            <Loader />
          </div>
        ) : (
          <>
            <div className="grid">
              <Menu currentMenu={currentMenu} />
            </div>
            <div className="grid">
              <Categories
                currentMenu={currentMenu}
                value={selectedCategory}
                onChange={(categoryItems, categoryType, categoryId) =>
                  setSelectedCategory(categoryItems, categoryType, categoryId)
                }
              />
              {categoryCheck && categoryCheck.length ? (
                <Items
                  categType={selectedCategory.categoryType}
                  currentCategory={selectedCategory.categoryItems}
                  categoryId={selectedCategory.categoryId}
                  categoriesCheck={categoriesCheck}
                  currentMenu={currentMenu}
                />
              ) : (
                ""
              )}
            </div>
            {!currentMenu?.food?.length && !currentMenu?.drinks?.length ? (
              <div className="no-items">
                <Icons.MenuIcon />
                <Typography color="text" size="2rem" weight="bold">
                  No Categories & Menu Items Yet
                </Typography>
              </div>
            ) : null}
          </>
        )}
      </Container>
    </div>
  );
};
