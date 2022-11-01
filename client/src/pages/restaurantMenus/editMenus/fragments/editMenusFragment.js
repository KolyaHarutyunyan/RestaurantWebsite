import { useContext, useEffect } from "react";
import { StyledEditMenus } from "./style";
import { editMenusTabs, getMenusBreadcrumbs } from "./constants";
import { Button, Loader, MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { itemActions, menusActions, useSagaStore } from "@eachbase/store";
import { FindLoad, TabItemsContext } from "@eachbase/utils";
import { Images } from "@eachbase/theme/images";

export const EditMenusFragment = () => {
  const restaurant = useSelector(({ businesses }) => businesses);
  const menu = useSelector((state) => state.menus.menuById);
  const restaurantMenuSaga = useSagaStore(menusActions.getBusinessMenu);
  const restaurantProductsSaga = useSagaStore(itemActions.get);
  const router = useRouter();
  const menuId = router.query.menuId;
  const loader = FindLoad("GET_BUSINESS_MENU");
  const { showDuringSmallSize, toggleTabItems } = useContext(TabItemsContext);

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

  // if (loader?.length) {
  //   return <Loader />;
  // }

  return (
    <StyledEditMenus>
      <div className="edit-menus-header">
        <div
          className={`back-arrow-icon ${showDuringSmallSize ? "shown" : ""}`}
          onClick={toggleTabItems}
        >
          <Images.GoBackArrow />
        </div>
        <MuiBreadcrumbs
          breadcrumbs={getMenusBreadcrumbs(menu?.name)}
          className={`edit-menus-breadcrumb ${
            showDuringSmallSize ? "hidden" : ""
          }`}
        />
        <Button
          square
          fullWidth
          onClick={handlePreview}
          className={`preview-button ${showDuringSmallSize ? "hidden" : ""}`}
        >
          Preview
        </Button>
      </div>

      {loader?.length ?
        <Loader height={'60vh'} />
        :
        <div className="edit-menus-nav">
          <MuiTabs
            className={`edit-menus-tabs ${showDuringSmallSize ? "hidden" : ""}`}
            tabs={editMenusTabs}
          />
        </div>
      }

    </StyledEditMenus>
  );
};
