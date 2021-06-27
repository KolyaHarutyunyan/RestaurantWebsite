import { useContext, useEffect, useRef } from "react";
import { ContentContainer } from "./styles";
import { Context } from "./context";

export const Container = ({ children }) => {
  const { height, refs, activeTab, setActiveTab } = useContext(Context);

  return <ContentContainer ref={containerRef}>{children}</ContentContainer>;
};
