import { useEffect, useRef, useState } from "react";
import { Categories } from "./categories";
import { Cover } from "./cover";
import { MobileMockUp } from "./mobileMockUp";
import { Container } from "./style";

import { businessesActions, useSagaStore } from "@eachbase/store";

export const PreviewPageSections = () => {
  const [mounted, setMounted] = useState(false);
  const phoneWrapperRef = useRef();

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
    <Container>
      <div ref={phoneWrapperRef} className="wrapper phone-wrapper">
        <MobileMockUp>
          <Cover />
          <Categories />
        </MobileMockUp>
      </div>
    </Container>
  );
};
