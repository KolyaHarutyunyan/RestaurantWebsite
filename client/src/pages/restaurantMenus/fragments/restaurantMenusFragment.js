import { MoreDropdown, MyButton, Switch, useModal } from "@eachbase/components";
import { StyledRestaurantMenus } from "./style";
import { formatDate } from "./constants";
import { Images } from "@eachbase/theme/images";
import { MODAL_NAMES } from "@eachbase/constants";
import Router from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSagaStore, menusActions } from "@eachbase/store";

export const RestaurantMenusFragment = () => {
  const { open } = useModal();

  const menusSaga = useSagaStore(menusActions.getMenusByBusiness);
  const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  const createMenuSaga = useSagaStore(menusActions.createMenu);
  const deleteMenuSaga = useSagaStore(menusActions.deleteMenu);

  const restaurant = useSelector((state) => state.businesses);
  const menus = useSelector((state) => state.menus);

  useEffect(() => {
    if (restaurant) {
      menusSaga.dispatch(restaurant.id);
    }
  }, [restaurant]);

  return (
    <>
      <StyledRestaurantMenus>
        <div className="menu-header">
          <h2 className="menu-title">Menus</h2>
          <MyButton
            buttonType={"button"}
            buttonClassName={"add-menu-button"}
            onClickButton={() => open(MODAL_NAMES.MENU_FORM)}
          >
            Add Menu
          </MyButton>
        </div>
        <div className="menus-list-box">
          {menus.map((menu, index) => (
            <div
              key={index}
              className={`menu-item-card ${menu.isActive ? "active" : ""}`}
            >
              <div className="menu-icon-box">
                <Images.Menus />
              </div>
              <div className="menu-name-box">
                <h6 className="menu-name">{menu.name}</h6>
                <Switch
                  status={menu.isActive}
                  onClick={() =>
                    switchMenuStatusSaga.dispatch(menu.id, restaurant?.id)
                  }
                />
              </div>
              <div className="menu-about-box">
                <p className="menu-about-text">{menu.about}</p>
              </div>
              <div className="menu-extra-info-box">
                <span className="menu-extra-info-text">{`${
                  menu.food?.concat(menu.drinks)?.length
                } Items, Last updated on ${formatDate(menu.lastUpdate)}`}</span>
              </div>
              <div className="menu-more-and-settings-box">
                <MoreDropdown
                  handleEdit={() => Router.push("/menus/edit")}
                  handleDuplicate={() =>
                    createMenuSaga.dispatch({
                      businessId: restaurant.id,
                      ...menu,
                    })
                  }
                  handleDelete={() => deleteMenuSaga.dispatch(menu.id)}
                />
                <MyButton
                  buttonType={"button"}
                  buttonClassName="menu-settings-icon-button"
                  onClickButton={() =>
                    Router.push(`/menus/settings?menuId=${menu.id}`)
                  }
                >
                  <Images.MenuSettings />
                </MyButton>
              </div>
            </div>
          ))}
        </div>
      </StyledRestaurantMenus>
    </>
  );
};
