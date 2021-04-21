import { useEffect, useState } from "react";
import useMedia from "use-media";
import { breakPoints } from "@eachbase/theme";

import { Style } from "./style";
import { SideBarStateContext } from "./core/viewPortContext";
import { Header } from "./core/header";
import { Sidebar } from "./core/sidebar";
import { Main } from "./core/main";

export const Board = () => {
  const isTablet = useMedia(`(max-width: 1280px)`);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(!isTablet);

  useEffect(() => {
    setSideBarIsOpen(!isTablet);
  }, [isTablet]);

  return (
    <Style.Container>
      <Header />
      <SideBarStateContext.Provider
        value={{ sideBarIsOpen, setSideBarIsOpen, isTablet }}
      >
        <Sidebar />
        <Main>Board</Main>
      </SideBarStateContext.Provider>
    </Style.Container>
  );
};
