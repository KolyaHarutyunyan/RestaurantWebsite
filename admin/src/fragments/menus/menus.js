import { Container } from "./style";
import { SideStaticMenu } from "@eachbase/components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MenuCard } from "@eachbase/components";
import { menusActions } from "@eachbase/store";
import { history } from "@eachbase/utils";
import { useEffect } from "react";

export const Menus = () => {
  const { restaurantId } = useParams();
  const { restaurant, menus } = useSelector((store) => ({
    restaurant: {
      name: store.restaurant ? store.restaurant.name : "Loading...",
      logo: store.restaurant ? store.restaurant.logoUrl : null,
    },
    menus:
      store.menus.filter((menu) => menu.restaurantId === restaurantId) || [],
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menusActions.getMenuItems());
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
        <div className="menus">
          <div className="list-title">Menus</div>
          <div className="list">
            {menus.map((menu, index) => (
              <MenuCard data={menu} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </SideStaticMenu>
  );
};
