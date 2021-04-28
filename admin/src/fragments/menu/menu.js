import { Container } from "./style";
import { SideStaticMenu } from "@eachbase/components";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restaurantActions, menuActions } from "@eachbase/store";

export const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { restaurantId } = useParams();

  useEffect(() => {
    dispatch(restaurantActions.getRestaurantById(restaurantId));
    // dispatch(menuActions.getMenusByRestaurantId(restaurantId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SideStaticMenu onRequestToClose={() => history.push("/restaurants")}>
      <Container>Menu</Container>
    </SideStaticMenu>
  );
};
