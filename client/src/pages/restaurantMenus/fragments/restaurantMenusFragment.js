import { MyButton, Switch } from "@eachbase/components";
import { StyledRestaurantMenus } from "./style";
import { dummyMenus, formatDate } from "./constants";
import { Images } from "@eachbase/theme/images";

export const RestaurantMenusFragment = () => {
  return (
    <StyledRestaurantMenus>
      <div className="menu-header">
        <h2 className="menu-title">Menus</h2>
        <MyButton buttonType={"button"} buttonClassName={"add-menu-button"}>
          Add Menu
        </MyButton>
      </div>
      <div className="menus-list-box">
        {dummyMenus.map((menu, index) => (
          <div
            key={index}
            className={`menu-item-card ${menu.isActive ? "active" : ""}`}
          >
            <div className="menu-icon-box">
              <Images.Menus />
            </div>
            <div className="menu-name-box">
              <h6 className="menu-name">{menu.name}</h6>
              <Switch status={menu.isActive} onClick={() => {}} />
            </div>
            <div className="menu-about-box">
              <p className="menu-about-text">{menu.about}</p>
            </div>
            <div className="menu-extra-info-box">
              <span className="menu-extra-info-text">{`${
                menu.items.length
              } Items, Last updated on ${formatDate(menu.lastUpdate)}`}</span>
            </div>
            <div className="menu-more-and-settings-box">
              <MyButton
                buttonType={"button"}
                buttonClassName="menu-more-icon-button"
                onClickButton={() => {}}
              >
                <Images.MenuMore />
              </MyButton>
              <MyButton
                buttonType={"button"}
                buttonClassName="menu-settings-icon-button"
                onClickButton={() => {}}
              >
                <Images.MenuSettings />
              </MyButton>
            </div>
          </div>
        ))}
      </div>
    </StyledRestaurantMenus>
  );
};
