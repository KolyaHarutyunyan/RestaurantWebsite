import { useContext } from "react";
import { Container } from "./style";
import { ViewPortLayoutContext } from "@eachbase/context";
import { HiChevronLeft, RiRestaurantLine } from "react-icons/all";
import { history } from "@eachbase/utils";
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
        <li onClick={() => history.push("/restaurants")}>
          <div className="logo">
            <RiRestaurantLine />
          </div>
          <div className="title">Owners</div>
        </li>
      </ul>
    </Container>
  );
};
