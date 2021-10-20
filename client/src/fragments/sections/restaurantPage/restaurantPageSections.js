import { useEffect, useRef, useState } from "react";
import {
  Button,
  Typography,
  Menu,
  useModal,
  MenuCard, SmallButton, Loader,
} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { MODAL_NAMES } from "@eachbase/constants";
import { useSagaStore, menusActions, businessesActions } from "@eachbase/store";
import { Container, HourseMenuContainer } from "./style";
import { useSelector } from "react-redux";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import { GoPlus } from "react-icons/go";
import { useRouter } from "next/router";
import { saveAs } from 'file-saver'
import {restaurantStile} from "./uiStyle";


export const RestaurantPageSections = () => {
  const classes =restaurantStile()
  const { open } = useModal();
  const router = useRouter();
  const { businesses: business, menus } = useSelector(
    ({ businesses, menus }) => ({
      businesses,
      menus,
    })
  );

  const [hourseMenuStatus, setHourseMenuStatus] = useState(false);
  const hourseMenuToggleRef = useRef();
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const getMenusSaga = useSagaStore(menusActions.getMenusByBusiness);
  const createMenuSaga = useSagaStore(menusActions.createMenu);
  const switchMenuStatusSaga = useSagaStore(menusActions.switchMenuStatus);
  const deleteMenuSaga = useSagaStore(menusActions.deleteMenu);
  const {httpOnLoad,} = useSelector((state) => ({
    httpOnLoad: state.httpOnLoad,
  }));

  const loading = httpOnLoad.length && httpOnLoad[0] === 'GET_MENUS'

  useEffect(() => getBusinessesSaga.dispatch(), []);
  useEffect(() => {
    if (business && Object.keys(business).length) {
      getMenusSaga.dispatch(business.id);
    } else if (business && !Object.keys(business).length) {
      open(MODAL_NAMES.CREATE_RESTAURANT);
    }
  }, [business]);

  if (business === null || !Object.keys(business).length) {
    return null;
  }


    const download = () => {

        saveAs( business.qrUrl, 'image.jpg') // Put your image url here.
      // }
      // let element = document.createElement("a");
      // let file = new Blob(
      //     [
      //       business.qrUrl
      //     ],
      //     { type: "image/*" }
      // );
      //
      // element.href = URL.createObjectURL(file);
      // element.download = "image/png";
      // element.click();
  }

  return (
      <div style={{ background: 'linear-gradient(to bottom,#ffffff,#fdfdfd,#fafafb,#f8f8f8,#f6f5f6,#f5f3f5,#f4f2f3,#f3f0f2,#f2eff1,#f1eef0,#f0edef,#efecee)'}}>
      <Container className="container">
        <div className='title-download-content'>
        <div className="header-title">
          <Typography className='restaurantTitle' color="text" weight="bold">
            Restaurant
          </Typography>
          <Button
              onClick={download}
              color="action" link className="qr-button">
            <Icons.DownloadIcon />
            Download QR Code
          </Button>
        </div>
        </div>
        <div className="content">
          <div className="business-card">
            <div className="header">
              <Typography className="title" color="text" weight="bold">
                {business.logo ? (
                  <span
                    style={{
                      backgroundImage: `url(${business.logo.originalUrl})`,
                    }}
                    className="logo"
                  />
                ) :
               <div className='classes-no-image'>
                <Icons.BuildingIcon/>
               </div>
                }
             <span className='restaurant-name'> { business.name}</span>
              </Typography>
              <div>
                <SmallButton
                  handleClick={() => open(MODAL_NAMES.EDIT_RESTAURANT)}
                  text={'Edit'}
                />
              </div>
            </div>
            <div className="descr">{ business.description }</div>
          </div>
          <div className="extra-details-card">
            <div className="contact-header">
              <Typography className='extra-details' color="text" size="1.5rem" weight="bold">
                Contact Details
              </Typography>
              <SmallButton
                  handleClick={() => open(MODAL_NAMES.EDIT_RESTAURANT_EXTRA_DETAILS)}
                  text={'Edit'}
              />
            </div>
            <ul className="list">
              <li>
                <div className="icon">
                  <Icons.WWWIcon />
                </div>
                <p className={business.website  ?  classes.value : classes.valueNotSet}>{business.website || "Not Set"}</p>
              </li>
              <li>
                <div className="icon">
                  <Icons.CallIcon />
                </div>
                <p className={business.phoneNumber  ?  classes.value : classes.valueNotSet}>{business.phoneNumber || "Not Set"}</p>
              </li>
              <li>
                <div className="icon">
                  <Icons.MapIcon />
                </div>
                <p className={business.address  ? classes.value : classes.valueNotSet} >{business.address && business.address.formattedAddress || "Not Set"}</p>
              </li>
              {/*Hour page button and menu*/}

              {/*<li*/}
              {/*  ref={hourseMenuToggleRef}*/}
              {/*  onClick={() => setHourseMenuStatus(!hourseMenuStatus)}*/}
              {/*  className="hourse-menu-toggle"*/}
              {/*>*/}
              {/*  <div className="icon">*/}
              {/*    <Icons.HoursIcon />*/}
              {/*  </div>*/}
              {/*  <div className="value">*/}
              {/*    Hours&nbsp;*/}
              {/*    {hourseMenuStatus ? <BsChevronUp /> : <BsChevronDown />}*/}
              {/*  </div>*/}
              {/*</li>*/}
              {/*<Menu*/}
              {/*  positionalElementRef={hourseMenuToggleRef}*/}
              {/*  open={hourseMenuStatus}*/}
              {/*  width={280}*/}
              {/*  onRequestToClose={() => setHourseMenuStatus(false)}*/}
              {/*>*/}
              {/*  <HourseMenuContainer>*/}
              {/*    <div>*/}
              {/*      <p>MON</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.mon.status !== "CLOSED" ? (*/}
              {/*          business.hours.mon.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <p>TUE</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.tue.status !== "CLOSED" ? (*/}
              {/*          business.hours.tue.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <p>WED</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.wed.status !== "CLOSED" ? (*/}
              {/*          business.hours.wed.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <p>THU</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.thr.status !== "CLOSED" ? (*/}
              {/*          business.hours.thr.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <p>FRI</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.fri.status !== "CLOSED" ? (*/}
              {/*          business.hours.fri.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <p>SAT</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.sat.status !== "CLOSED" ? (*/}
              {/*          business.hours.sat.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div>*/}
              {/*      <p>SUN</p>*/}
              {/*      <ul>*/}
              {/*        {business.hours && business.hours.sun.status !== "CLOSED" ? (*/}
              {/*          business.hours.sun.hours.map((item, index) => (*/}
              {/*            <li key={index}>*/}
              {/*              {item.open} - {item.close}*/}
              {/*            </li>*/}
              {/*          ))*/}
              {/*        ) : (*/}
              {/*          <li className="danger">CLOSED</li>*/}
              {/*        )}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*  </HourseMenuContainer>*/}
              {/*</Menu>*/}
            </ul>
          </div>
          <div className="menu-list">
            <Typography className="menus-title" color="text" weight="bold">
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
              {loading ?

                  <div className={'loader-section'}>
                  <Loader/>
                  </div>
                  :
                  menus.length && menus.map((menu, index) => (
                <MenuCard
                  key={index}
                  data={menu}
                  onTitleClick={() =>
                    router.push(`/menu/${business.id}/${menu.id}`)
                  }
                  onRequestToSwitch={() =>
                    switchMenuStatusSaga.dispatch(menu.id, business.id)
                  }
                  onRequestToDuplicate={() =>
                    createMenuSaga.dispatch({
                      businessId: business.id,
                      ...menu,
                    })
                  }
                  onRequestToEdit={() =>
                    open(MODAL_NAMES.MENU_FORM, { menuId: menu.id })
                  }
                  onRequestToDelete={() => {deleteMenuSaga.dispatch(menu.id);}}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      </div>
    // </LazyLoad>
  );
};
