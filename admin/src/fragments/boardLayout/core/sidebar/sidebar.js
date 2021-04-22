import { useContext } from "react";
import { Container } from "./style";
import { ViewPortLayoutContext } from "@eachbase/context";
import { HiChevronLeft, RiRestaurantLine } from "react-icons/all";
export const Sidebar = () => {
  const { sideBarIsOpen, setSideBarIsOpen } = useContext(ViewPortLayoutContext);
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
        <li>
          <div className="logo">
            <RiRestaurantLine />
          </div>
          <div className="title">Restaurants</div>
        </li>
      </ul>
    </Container>
  );
};
