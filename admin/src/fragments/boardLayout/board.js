import { useEffect, useState } from "react";
import useMedia from "use-media";

import { ViewPortLayoutContext } from "@eachbase/context";
import { Header } from "./core/header";
import { Sidebar } from "./core/sidebar";
import { Content } from "./core/content";
import { Container } from "./style";

export const BoardLayout = ({ children }) => {
  const isTablet = useMedia(`(max-width: 1279px)`);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(!isTablet);

  useEffect(() => {
    setSideBarIsOpen(!isTablet);
  }, [isTablet]);

  return (
    <Container>
      <Header />
      <ViewPortLayoutContext.Provider
        value={{ sideBarIsOpen, setSideBarIsOpen, isTablet }}
      >
        <Sidebar />
        <Content>{children}</Content>
      </ViewPortLayoutContext.Provider>
    </Container>
  );
};
