import { useEffect, useRef, useState } from "react";
import { Categories } from "./categories";
import { Cover } from "./cover";
import { MobileMockUp } from "./mobileMockUp";
import { Container } from "./style";

import {
  businessesActions,
  useSagaStore,
  previewDataActions, menusActions,
} from "@eachbase/store";
import { LazyLoad } from "@eachbase/components";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

export const PreviewPageSections = () => {
  const [mounted, setMounted] = useState(false);
  const phoneWrapperRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

  const getMenuCategoriesAndItemsSaga = useSagaStore(
    previewDataActions.getMenuData
  );
  const getRestaurantSaga = useSagaStore(businessesActions.getBusinesses);

  useEffect(() => {
    setMounted(true);
    getRestaurantSaga.dispatch();
  }, []);


  useEffect(() => {

    if(router.query.restaurantId) {
      dispatch(menusActions.getBusinessMenu(router.query.restaurantId));
    }
  }, [router.query.restaurantId,]);

  useEffect(() => {
    const resizeHandler = () => {
      phoneWrapperRef.current.style.transform = `scale(${
        window.innerWidth / window.outerWidth
      })`;
    };

    window.addEventListener("resize", resizeHandler);
    if (mounted) {
    }

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }
  return (
    <LazyLoad
      loaded={
        !getRestaurantSaga.status.onLoad &&
        !getMenuCategoriesAndItemsSaga.status.onLoad
      }
    >
      <Container>
        <div ref={phoneWrapperRef} className="wrapper phone-wrapper">
          <MobileMockUp>
            <Categories />
          </MobileMockUp>
        </div>
      </Container>
    </LazyLoad>
  );
};
