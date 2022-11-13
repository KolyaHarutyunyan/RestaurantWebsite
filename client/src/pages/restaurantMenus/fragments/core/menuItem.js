import { useEffect, useState } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { Images } from "@eachbase/theme/images";
import { MoreDropdown, Switch } from "@eachbase/components";
import { useSagaStore, menusActions } from "@eachbase/store";
import { FindLoad, FindSuccess } from "@eachbase/utils";
import { StyledMenuItem } from "./style";
import { formatDate } from "../constants";
import PulseLoader from "react-spinners/PulseLoader";
import { colors } from "@eachbase/theme";
import { httpRequestsOnSuccessActions } from "../../../../store/http_requests_on_success";

export const MenuItem = ({ menu, restaurant }) => {
  const dispatch = useDispatch();
  const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  const deleteMenuSaga = useSagaStore(menusActions.deleteMenu);
  const [selectedId, setSelectedId] = useState("");
  const menuItems = [].concat(
    ...menu?.food?.map((item) => item.items),
    ...menu?.drinks?.map((item) => item.items)
  );
  const loader = FindLoad("SWITCH_MENU_STATUS");
  const success = FindSuccess("SWITCH_MENU_STATUS");

  useEffect(() => {
    if (success) {
      setSelectedId("");
      dispatch(httpRequestsOnSuccessActions.removeSuccess("SWITCH_MENU_STATUS"));
    }
  }, [success]);

  const handleSwitch = (event) => {
    event?.stopPropagation();
    setSelectedId(menu?.id);
    switchMenuStatusSaga.dispatch(menu?.id, restaurant?.id);
  };

  const handleDelete = () =>
    deleteMenuSaga.dispatch({
      businessId: restaurant?.id,
      menuId: menu?.id
    });

  const handleEdit = () => Router.push(`/menus/edit?menuId=${menu?.id}`);

  const handleSettings = () => Router.push(`/menus/settings?menuId=${menu?.id}`);

  return (
    <StyledMenuItem>
      <div
        className={`menu-item-card ${menu?.isActive ? "active" : ""}`}
        onClick={handleEdit}
      >
        <div className="menu-icon-box">
          <Images.Menus />
        </div>
        <div className="menu-name-box">
          <h6 className="menu-name">{menu?.name}</h6>
          {selectedId === menu?.id && loader?.length ?
            <PulseLoader
              size={7}
              className="loader"
              color={colors.yellowOrange}
            />
            :
            <Switch status={menu?.isActive} onClick={(e) => handleSwitch(e)} />
          }
        </div>
        <div className="menu-about-box">
          <p className="menu-about-text">{menu?.about}</p>
        </div>
        <div className="menu-extra-info-box">
          <span className="menu-extra-info-text">{`${
            menuItems?.length
          } Items, Last updated on ${formatDate(menu?.lastUpdate)}`}</span>
        </div>
        <div className="menu-more-and-settings-box">
          <MoreDropdown
            handleEdit={handleSettings}
            handleDelete={handleDelete}
          />

          {/* <button
            type="button"
            className="menu-settings-icon-button"
            onClick={handleSettings}
          >
            <Images.MenuSettings />
          </button> */}
        </div>
      </div>
    </StyledMenuItem>
  );
};
