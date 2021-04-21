import { Style } from "./style";
import { SideBarStateContext } from "../viewPortContext";
import { useContext } from "react";
import { HiChevronLeft, RiRestaurantLine } from "react-icons/all";
export const Sidebar = () => {
  const { sideBarIsOpen, setSideBarIsOpen } = useContext(SideBarStateContext);
  return (
    <Style.Container isOpen={sideBarIsOpen}>
      <Style.ToggleButton.Wrapper
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
      >
        <Style.ToggleButton.Button sideBarIsOpen={sideBarIsOpen}>
          <HiChevronLeft />
        </Style.ToggleButton.Button>
      </Style.ToggleButton.Wrapper>
      <Style.Menu.Wrapper>
        <Style.Menu.Item.Wrapper>
          <Style.Menu.Item.Logo>
            <RiRestaurantLine />
          </Style.Menu.Item.Logo>
          <Style.Menu.Item.Title>Restaurants</Style.Menu.Item.Title>
        </Style.Menu.Item.Wrapper>
      </Style.Menu.Wrapper>
    </Style.Container>
  );
};
