import { useContext } from "react";
import { TabContainer } from "./styles";
import { Context } from "./context";
export const Tab = ({ children, tName }) => {
  const { activeTab, setActiveTab } = useContext(Context);

  return (
    <TabContainer
      onClick={() => setActiveTab({ name: tName, action: "HEADER" })}
      isActive={tName === activeTab.name}
    >
      {children}
    </TabContainer>
  );
};
