import { useEffect, useRef, useState } from "react";
import {
  Button,
  Typography,
  Menu,
  useModal,
  MenuCard,
} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { MODAL_NAMES } from "@eachbase/constants";
import { useSagaStore, menusActions, businessesActions } from "@eachbase/store";
import { Container, HourseMenuContainer } from "./style";
import { useSelector } from "react-redux";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { GoPlus } from "react-icons/go";

export const RestaurantPageSections = () => {
  const { open } = useModal();

  const { businesses: business, menus } = useSelector(
    ({ businesses, menus }) => ({
      businesses,
      menus,
    })
  );
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const getMenusSaga = useSagaStore(menusActions.getMenusByBusiness);
  const createMenuSaga = useSagaStore(menusActions.createMenu);
  const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  // const deleteMenusSaga = useSagaStore(menusActions.deleteMenu);

  const [hourseMenuStatus, setHourseMenuStatus] = useState(false);
  const hourseMenuToggleRef = useRef();

  useEffect(() => getBusinessesSaga.dispatch(), []);
  useEffect(() => {
    if (business) {
      getMenusSaga.dispatch(business.id);
    }
  }, [business]);

  if (business === null) {
    return null;
  }

  return (
    <Container className="container">
      <div className="header">
        <Typography size="1.5rem" weight="bold">
          Restaurant
        </Typography>
        <Button color="action" link className="qr-button">
          <IoMdDownload />
          Download QR Code
        </Button>
      </div>
      <div className="content">
        <div className="business-card">
          <div className="header">
            <Typography color="text" size="1.5rem" weight="bold">
              {business.name}
            </Typography>
            <Button onClick={() => open(MODAL_NAMES.EDIT_RESTAURANT)}>
              Edit
            </Button>
          </div>
          <div className="descr">{business.description}</div>
        </div>
        <div className="extra-details-card">
          <div className="header">
            <Typography color="text" size="1.5rem" weight="bold">
              Extra Details
            </Typography>
            <Button
              onClick={() => open(MODAL_NAMES.EDIT_RESTAURANT_EXTRA_DETAILS)}
            >
              Edit
            </Button>
          </div>
          <ul className="list">
            <li>
              <div className="icon">
                <Icons.WWWIcon />
              </div>
              <div className="value">{business.website || "Not Set"}</div>
            </li>
            <li>
              <div className="icon">
                <Icons.CallIcon />
              </div>
              <div className="value">{business.phoneNumber || "Not Set"}</div>
            </li>
            <li>
              <div className="icon">
                <Icons.MapIcon />
              </div>
              <div className="value">{business.address || "Not Set"}</div>
            </li>
            <li
              ref={hourseMenuToggleRef}
              onClick={() => setHourseMenuStatus(!hourseMenuStatus)}
              className="hourse-menu-toggle"
            >
              <div className="icon">
                <Icons.HoursIcon />
              </div>
              <div className="value">
                Hours&nbsp;
                {hourseMenuStatus ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </li>
            <Menu
              positionalElementRef={hourseMenuToggleRef}
              open={hourseMenuStatus}
              width={280}
              onRequestToClose={() => setHourseMenuStatus(false)}
            >
              <HourseMenuContainer>
                <div>
                  <p>MON</p>
                  <ul>
                    {business.hours.mon.status !== "CLOSED" ? (
                      business.hours.mon.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p>TUE</p>
                  <ul>
                    {business.hours.tue.status !== "CLOSED" ? (
                      business.hours.tue.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p>WED</p>
                  <ul>
                    {business.hours.wed.status !== "CLOSED" ? (
                      business.hours.wed.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p>THU</p>
                  <ul>
                    {business.hours.thr.status !== "CLOSED" ? (
                      business.hours.thr.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p>FRI</p>
                  <ul>
                    {business.hours.fri.status !== "CLOSED" ? (
                      business.hours.fri.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p>SAT</p>
                  <ul>
                    {business.hours.sat.status !== "CLOSED" ? (
                      business.hours.sat.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p>SUN</p>
                  <ul>
                    {business.hours.sun.status !== "CLOSED" ? (
                      business.hours.sun.hours.map((item, index) => (
                        <li key={index}>
                          {item.open} - {item.close}
                        </li>
                      ))
                    ) : (
                      <li className="danger">CLOSED</li>
                    )}
                  </ul>
                </div>
              </HourseMenuContainer>
            </Menu>
          </ul>
        </div>
        <div className="menu-list">
          <Typography color="text" size="1.5rem" weight="bold">
            Menus
          </Typography>
          <div className="list">
            <div className="add-card">
              <div className="image">
                <Icons.MenuIcon />
              </div>
              <div className="footer">
                <Button
                  link
                  inactive
                  onClick={() => open(MODAL_NAMES.MENU_FORM)}
                >
                  <GoPlus /> Add Menu
                </Button>
              </div>
            </div>
            {menus.map((menu, index) => (
              <MenuCard
                key={index}
                data={menu}
                onTitleClick={() => history.push("/menu")}
                onRequestToSwitch={() =>
                  switchMenuStatusSaga.dispatch(menu.id, business.id)
                }
                onRequestToDuplicate={() =>
                  createMenuSaga.dispatch({ businessId: business.id, ...menu })
                }
                onRequestToEdit={() =>
                  open(MODAL_NAMES.MENU_FORM, { menuId: menu.id })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
