import { StyledMenuItem } from "./style";
import { formatDate } from "../constants";
import { Images } from "@eachbase/theme/images";
import Router from "next/router";
import { MoreDropdown, Switch } from "@eachbase/components";
import { useSagaStore, menusActions } from "@eachbase/store";

export const MenuItem = ({ menu, restaurant }) => {
  const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  const deleteMenuSaga = useSagaStore(menusActions.deleteMenu);

  const handleSwitch = () =>
    switchMenuStatusSaga.dispatch(menu?.id, restaurant?.id);

  const handleEdit = () => Router.push(`/menus/edit?menuId=${menu?.id}`);

  const handleDelete = () =>
    deleteMenuSaga.dispatch({
      businessId: restaurant?.id,
      menuId: menu?.id,
    });

  const handleSettings = () =>
    Router.push(`/menus/settings?menuId=${menu?.id}`);

  return (
    <StyledMenuItem>
      <div className={`menu-item-card ${menu?.isActive ? "active" : ""}`}>
        <div className="menu-icon-box">
          <Images.Menus />
        </div>
        <div className="menu-name-box">
          <h6 className="menu-name">{menu?.name}</h6>
          <Switch status={menu?.isActive} onClick={handleSwitch} />
        </div>
        <div className="menu-about-box">
          <p className="menu-about-text">{menu?.about}</p>
        </div>
        <div className="menu-extra-info-box">
          <span className="menu-extra-info-text">{`${
            menu?.food?.concat(menu?.drinks)?.length
          } Items, Last updated on ${formatDate(menu?.lastUpdate)}`}</span>
        </div>
        <div className="menu-more-and-settings-box">
          <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          <button
            type="button"
            className="menu-settings-icon-button"
            onClick={handleSettings}
          >
            <Images.MenuSettings />
          </button>
        </div>
      </div>
    </StyledMenuItem>
  );
};
