import { useHistory } from "react-router";
import { Container } from "./style";

export const Content = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="row" onClick={() => history.push("/restaurants/1")}>
        <div className="col">Restaurant Owner</div>
        <div className="col">Restaurant</div>
        <div className="col">Action</div>
        <div className="col">Status</div>
      </div>
      <div className="row" onClick={() => history.push("/restaurants/1/2")}>
        <div className="col">Restaurant Owner</div>
        <div className="col">Restaurant</div>
        <div className="col">Action</div>
        <div className="col">Status</div>
      </div>
      <div className="row" onClick={() => history.push("/restaurants/1/2/3")}>
        <div className="col">Restaurant Owner</div>
        <div className="col">Restaurant</div>
        <div className="col">Action</div>
        <div className="col">Status</div>
      </div>
      <div className="row">
        <div className="col">Restaurant Owner</div>
        <div className="col">Restaurant</div>
        <div className="col">Action</div>
        <div className="col">Status</div>
      </div>
      <div className="row">
        <div className="col">Restaurant Owner</div>
        <div className="col">Restaurant</div>
        <div className="col">Action</div>
        <div className="col">Status</div>
      </div>
      <div className="row">
        <div className="col">Restaurant Owner</div>
        <div className="col">Restaurant</div>
        <div className="col">Action</div>
        <div className="col">Status</div>
      </div>
    </Container>
  );
};
