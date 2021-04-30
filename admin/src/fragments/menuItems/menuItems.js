import { SideStaticMenu } from "@eachbase/components";
import { menuItemsActions } from "@eachbase/store";
import { MenuItemCard } from "@eachbase/components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container } from "./style";
export const MenuItems = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { restaurant, menuItems } = useSelector((store) => ({
    restaurant: {
      name: store.restaurant ? store.restaurant.name : "Loading...",
      logo: store.restaurant ? store.restaurant.logoUrl : null,
    },
    menuItems: store.menuItems || [],
  }));

  useEffect(() => {
    dispatch(menuItemsActions.getMenuItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SideStaticMenu
      onRequestToClose={() => history.push("/restaurants")}
      onRequesToGoBack={() => history.goBack()}
    >
      <Container>
        <div className="restaurant">
          {restaurant.logo && <img src={restaurant.logo} alt="" />}
          <div className="name">{restaurant.name}</div>
        </div>
        <div className="content">
          {menuItems.map((menuItem, key) => (
            <MenuItemCard data={menuItem} key={key} />
          ))}
        </div>
      </Container>
    </SideStaticMenu>
  );
};
