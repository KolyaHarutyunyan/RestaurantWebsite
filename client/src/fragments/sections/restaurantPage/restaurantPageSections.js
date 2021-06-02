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
import { useSagaStore, businessesActions } from "@eachbase/store";
import { Container, HourseMenuContainer } from "./style";
import { useSelector } from "react-redux";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { GoPlus } from "react-icons/go";

export const RestaurantPageSections = () => {
  const business = useSelector(({ businesses }) => businesses);
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const [hourseMenuStatus, setHourseMenuStatus] = useState(false);
  const hourseMenuToggleRef = useRef();
  const { open } = useModal();

  useEffect(() => getBusinessesSaga.dispatch(), []);
  useEffect(() => {
    // if (business !== null && !Object.keys(business).length) {
    //   open(MODAL_NAMES.CREATE_RESTAURANT);
    // }
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
              <div className="value">Not Set</div>
            </li>
            <li>
              <div className="icon">
                <Icons.CallIcon />
              </div>
              <div className="value">{business.phone || "Not Set"}</div>
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
              <HourseMenuContainer>Hello World</HourseMenuContainer>
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
                <Button link inactive>
                  <GoPlus /> Add Menu
                </Button>
              </div>
            </div>
            <MenuCard
              data={{
                name: "Menu",
                description: "Lorem ipsum is a dollar",
                isActive: false,
              }}
            />
            <MenuCard
              data={{
                name: "Menu",
                description: "Lorem ipsum is a dollar",
                isActive: false,
              }}
            />
            <MenuCard
              data={{
                name: "Menu",
                description: "Lorem ipsum is a dollar",
                isActive: false,
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
