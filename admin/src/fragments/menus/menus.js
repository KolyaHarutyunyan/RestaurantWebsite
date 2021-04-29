import { Container } from "./style";
import { SideStaticMenu } from "@eachbase/components";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import { MenuCard } from "@eachbase/components";

export const Menus = () => {
  const history = useHistory();
  const { restaurantId } = useParams();
  const { restaurant, menus } = useSelector((store) => ({
    restaurant: {
      name: store.restaurant ? store.restaurant.name : "Loading...",
      logo: store.restaurant ? store.restaurant.logoUrl : null,
    },
    menus: store.restaurant ? store.restaurant.menus : [],
  }));

  return (
    <SideStaticMenu onRequestToClose={() => history.push("/restaurants")}>
      <Container>
        <div className="restaurant">
          {restaurant.logo && <img src={restaurant.logo} alt="" />}
          <div className="name">{restaurant.name}</div>
        </div>
        <div className="menus">
          <div className="list-title">Menus</div>
          <div className="list">
            {[
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
              ...menus,
            ].map((menu, index) => (
              <MenuCard
                onTitleClick={() =>
                  history.push(`/restaurants/${restaurantId}/${menu._id}`)
                }
                data={menu}
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </SideStaticMenu>
  );
};
