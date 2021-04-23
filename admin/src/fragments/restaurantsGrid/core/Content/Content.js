import { Container } from "./style";

export const Content = ({ restaurants }) => {
  // const history = useHistory();
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <div
          className="row"
          key={
            restaurant.id
          } /* onClick={() => history.push("/restaurants/1/2")} */
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
