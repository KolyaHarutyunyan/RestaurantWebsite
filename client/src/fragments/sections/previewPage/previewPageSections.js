import { useEffect, useRef, useState } from "react";
import { Categories } from "./categories";
import { Cover } from "./cover";
import { MobileMockUp } from "./mobileMockUp";
import { Container } from "./style";

import {
  businessesActions,
  useSagaStore,
  previewDataActions,
} from "@eachbase/store";
import { LazyLoad } from "@eachbase/components";

export const PreviewPageSections = () => {
  const [mounted, setMounted] = useState(false);
  const phoneWrapperRef = useRef();

  const getMenuCategoriesAndItemsSaga = useSagaStore(
    previewDataActions.getMenuData
  );
  const getRestaurantSaga = useSagaStore(businessesActions.getBusinesses);

  useEffect(() => {
    setMounted(true);
    getRestaurantSaga.dispatch();
  }, []);

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
            <Cover />
            <Categories />
          </MobileMockUp>
        </div>
      </Container>
    </LazyLoad>
  );
};
