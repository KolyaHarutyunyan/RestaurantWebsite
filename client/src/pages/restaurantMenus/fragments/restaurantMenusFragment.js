import { useEffect } from "react";
import { StyledRestaurantMenus } from "./style";
import { Button, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { useSelector } from "react-redux";
import { useSagaStore, menusActions } from "@eachbase/store";
import { MenuItem } from "./core";

export const RestaurantMenusFragment = () => {
  const { open } = useModal();

  const menusSaga = useSagaStore(menusActions.getMenusByBusiness);

  const restaurant = useSelector((state) => state.businesses);
  const menus = useSelector((state) => state.menus.menus);

  useEffect(() => {
    if (restaurant) {
      menusSaga.dispatch(restaurant.id);
    }
  }, [restaurant]);

  return (
    <StyledRestaurantMenus>
      <div className="menu-header">
        <h2 className="menu-title">Menus</h2>
        <Button
          square
          fullWidth
          maxWidth={"180px"}
          onClick={() => open(MODAL_NAMES.MENU_FORM)}
        >
          Add Menu
        </Button>
      </div>
      <div className="menus-list-box">
        {menus?.map((menu) => (
          <MenuItem key={menu.id} menu={menu} restaurant={restaurant} />
        ))}
      </div>
    </StyledRestaurantMenus>
  );
};
