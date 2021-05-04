import { Container } from "./style";
import { Switch } from "@eachbase/components";
import { useHistory } from "react-router-dom";
import { BsChevronRight, IoTrash } from "react-icons/all";
import { restaurantsActions } from "@eachbase/store";
import { useDispatch } from "react-redux";
export const Content = ({ restaurants }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const statusLabel = (status) => (status ? "Deactivate" : "Activate");

  const onRequestToChangeStatus = (restaurant) => {
    dispatch(
      restaurantsActions.editRestaurant({
        ...restaurant,
        status: !restaurant.status,
      })
    );
  };

  const onRequestToDelete = (restaurantId) => {
    if (window.confirm("Are you sure?. you cannot revert it later")) {
      dispatch(restaurantsActions.deleteRestaurant(restaurantId));
    }
  };

  return (
    <Container>
      {restaurants.map((restaurant) => (
        <div
          className="row"
          key={restaurant._id}
          onClick={() => history.push(`/restaurants/${restaurant._id}`)}
        >
          <div className="col">
            {restaurant.owner ? restaurant.owner.fullName : ""}
          </div>
          <div className="col">
            <div className="restaurant-name">
              <div className="title">{restaurant.name || ""}</div>
              {restaurant.logo && (
                <img className="logo" alt="" src={restaurant.logo} />
              )}
              <BsChevronRight className="chevron-icon" />
            </div>
          </div>
          <div className="col">
            Delete
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onRequestToDelete(restaurant._id);
              }}
            >
              <IoTrash />
            </button>
          </div>
          <div className="col">
            {statusLabel(restaurant.status)}{" "}
            <Switch
              status={restaurant.status}
              onClick={(e) => {
                e.stopPropagation();
                onRequestToChangeStatus(restaurant);
              }}
            />
          </div>
        </div>
      ))}
    </Container>
  );
};
