import { WrapperContainer } from "./styles";
import { Context } from "./context";
import { useState } from "react";

export const VTabs = ({ children, defaultActiveTab, height }) => {
  const [activeTab, setActiveTab] = useState({
    name: defaultActiveTab,
    action: "SCROLL",
  });
  const [refs, setRefs] = useState([]);

  return (
    <Context.Provider
      value={{ height, activeTab, setActiveTab, refs, setRefs }}
    >
      <WrapperContainer>{children}</WrapperContainer>
    </Context.Provider>
  );
};
