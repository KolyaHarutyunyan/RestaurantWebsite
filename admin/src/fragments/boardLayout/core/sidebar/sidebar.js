import { useContext } from "react";
import { Container } from "./style";
import { ViewPortLayoutContext } from "@eachbase/context";
import { HiChevronLeft, RiRestaurantLine } from "react-icons/all";
import { useHistory } from "react-router";
export const Sidebar = () => {
  const { sideBarIsOpen, setSideBarIsOpen } = useContext(ViewPortLayoutContext);
  const history = useHistory();
  return (
    <Container sideBarIsOpen={sideBarIsOpen}>
      <div
        className="toggle-button"
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
      >
        <button>
          <HiChevronLeft />
        </button>
      </div>
      <ul className="menu">
        <li onClick={() => history.push("/restaurants")}>
          <div className="logo">
            <RiRestaurantLine />
          </div>
          <div className="title">Restaurants</div>
        </li>
      </ul>
    </Container>
  );
};
