import { useEffect } from "react";
import { StyledEditMenus } from "./style";
import { editMenusTabs, getMenusBreadcrumbs } from "./constants";
import { Button, Loader, MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { itemActions, menusActions, useSagaStore } from "@eachbase/store";
import { FindLoad } from "@eachbase/utils";

export const EditMenusFragment = () => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const menu = useSelector((state) => state.menus.menuById);
  const restaurantMenuSaga = useSagaStore(menusActions.getBusinessMenu);
  const restaurantProductsSaga = useSagaStore(itemActions.get);
  const router = useRouter();
  const menuId = router.query.menuId;
  const loader = FindLoad("GET_BUSINESS_MENU");

  useEffect(() => {
    if (menuId) {
      restaurantMenuSaga.dispatch(menuId);
    }
  }, [menuId]);

  useEffect(() => {
    if (restaurant) {
      restaurantProductsSaga.dispatch(restaurant?.id);
    }
  }, [restaurant]);

  const handlePreview = () => Router.push(`/preview?menuId=${menuId}`);

  if (loader?.length) {
    return <Loader />;
  }

  return (
    <StyledEditMenus>
      <div className="edit-menus-header">
        <MuiBreadcrumbs breadcrumbs={getMenusBreadcrumbs(menu?.name)} />
        <Button square fullWidth maxWidth={"176px"} onClick={handlePreview}>
          Preview
        </Button>
      </div>
      <div className="edit-menus-nav">
        <MuiTabs className={"edit-menus-tabs"} tabs={editMenusTabs} />
      </div>
    </StyledEditMenus>
  );
};
