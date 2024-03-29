import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledRestaurantMenus } from "./style";
import { FindLoad } from "@eachbase/utils";
import { Button, Loader, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { useSagaStore, menusActions } from "@eachbase/store";
import { MenuItem } from "./core";

export const RestaurantMenusFragment = () => {
  const { open } = useModal();
  const menusSaga = useSagaStore(menusActions.getMenusByBusiness);
  const restaurant = useSelector((state) => state.businesses);
  const menus = useSelector((state) => state.menus.menus);
  const loader = FindLoad("GET_MENUS");

  useEffect(() => {
    if (restaurant) {
      menusSaga.dispatch(restaurant.id);
    }
  }, [restaurant]);

  return (
    <StyledRestaurantMenus>
      <div className="menu-header">
        <h2 className="menu-title">Menus</h2>
        <Button square fullWidth onClick={() => open(MODAL_NAMES.MENU_FORM)}>
          Add Menu
        </Button>
      </div>
      <div className="menus-list-box">
        {loader?.length ? (
          <Loader height={"60vh"} />
        ) : (
          menus?.map((menu) => (
            <MenuItem key={menu.id} menu={menu} restaurant={restaurant} />
          ))
        )}
      </div>
    </StyledRestaurantMenus>
  );
};
