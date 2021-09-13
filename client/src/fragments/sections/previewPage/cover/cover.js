import { useRef, useState, useEffect } from "react";
import { Container } from "./style";
import {
  useSagaStore,
  businessesActions,
  menusActions,
  previewDataActions,
} from "@eachbase/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const Cover = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const router = useRouter();
  const getMenuCategoriesAndItemsSaga = useSagaStore(
    previewDataActions.getMenuData
  );
  const getBusinessSaga = useSagaStore(businessesActions.getBusinesses);
  const getMenusSaga = useSagaStore(menusActions.getMenusByBusiness);
  const selectRef = useRef();

  const menus = useSelector(({ menus }) => menus);

  // useEffect(() => {
  //   getBusinessSaga.dispatch(router.query.restaurantId);
  //   getMenusSaga.dispatch(router.query.restaurantId);
  // }, []);
  //
  // useEffect(() => {
  //   if (menus.length) {
  //     setSelectedMenu(menus[0].id);
  //   }
  // }, [menus]);
  //
  // useEffect(() => {
  //   if (selectedMenu) {
  //     getMenuCategoriesAndItemsSaga.dispatch(selectedMenu);
  //   }
  // }, [selectedMenu]);
  //
  // const menuCover = selectedMenu
  //   ? menus.find((m) => m.id === selectedMenu).image.originalUrl
  //   : null;

  return (
    <Container img={menus.image}>
      {/*<div className="content" onClick={() => selectRef.current.click()}>*/}
        <select
          // onChange={({ target: { value } }) => setSelectedMenu(value)}
          // ref={selectRef}
        >
          {menus.length && menus.map((menu) => (
            <option value={menu.id} key={menu.id}>
              {menu.name}
            </option>
          ))}
        </select>
      {/*</div>*/}
    </Container>
  );
};
