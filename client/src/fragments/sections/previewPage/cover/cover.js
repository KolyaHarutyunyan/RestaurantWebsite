import { useRef, useState, useEffect } from "react";
import { Container } from "./style";
import {
  useSagaStore,
  businessesActions,
  menusActions,
  menuCategoriesActions,
  categoryItemActions,
} from "@eachbase/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const Cover = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const router = useRouter();
  const getBusinessSaga = useSagaStore(businessesActions.getBusinesses);
  const getMenusSaga = useSagaStore(menusActions.getMenusByBusiness);
  const getMenuCategories = useSagaStore(menuCategoriesActions.get);
  const selectRef = useRef();

  const menus = useSelector(({ menus }) => menus);

  useEffect(() => {
    getBusinessSaga.dispatch(router.query.restaurantId);
    getMenusSaga.dispatch(router.query.restaurantId);
  }, []);

  useEffect(() => {
    if (menus.length) {
      setSelectedMenu(menus[0].id);
    }
  }, [menus]);

  useEffect(() => {
    if (selectedMenu) {
      getMenuCategories.dispatch(selectedMenu);
    }
  }, [selectedMenu]);

  return (
    <Container>
      <div className="content" onClick={() => selectRef.current.click()}>
        <select
          onChange={({ target: { value } }) => setSelectedMenu(value)}
          ref={selectRef}
        >
          {menus.map((menu) => (
            <option value={menu.id} key={menu.id}>
              {menu.name}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
};
