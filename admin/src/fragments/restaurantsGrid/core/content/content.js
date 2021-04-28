import { Container } from "./style";
import { useHistory } from "react-router-dom";

export const Content = ({ restaurants }) => {
  const history = useHistory();
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <div
          className="row"
          key={restaurant._id}
          onClick={() => history.push(`/restaurants/${restaurant._id}`)}
        >
          <div className="col">{restaurant.owner || ""}</div>
          <div className="col">
            <div className="restaurant-name">
              <div className="title">{restaurant.name || ""}</div>
              {restaurant.logo && (
                <img className="logo" alt="" src={restaurant.logo} />
              )}
            </div>
          </div>
          <div className="col">{restaurant.name || ""}</div>
          <div className="col">{restaurant.name || ""}</div>
        </div>
      ))}
    </Container>
  );
};
