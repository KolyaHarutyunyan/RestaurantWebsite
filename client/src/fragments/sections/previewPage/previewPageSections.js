import { useEffect, useRef, useState } from "react";
import { Categories } from "./categories";
import { Cover } from "./cover";
import { MobileMockUp } from "./mobileMockUp";

import { Container } from "./style";

export const PreviewPageSections = () => {
  const [mounted, setMounted] = useState(false);
  const phoneWrapperRef = useRef();

  useEffect(() => {
    setMounted(true);
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
