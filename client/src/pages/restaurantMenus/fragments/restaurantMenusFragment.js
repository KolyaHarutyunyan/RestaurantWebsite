import { useEffect } from "react";
import { StyledRestaurantMenus } from "./style";
import { Button, Loader, useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { useSelector } from "react-redux";
import { useSagaStore, menusActions } from "@eachbase/store";
import { MenuItem } from "./core";
import { FindLoad } from "@eachbase/utils";

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

  if (FindLoad("GET_MENUS")) {
    return <Loader />;
  }

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
