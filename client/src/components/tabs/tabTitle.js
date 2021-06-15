import { useContext } from "react";
import { TabTitleContainer } from "./style";
import { TabsContext } from "./context";
export const TabTitle = ({ children, tabName }) => {
  const { activeTab, onRequestToChange } = useContext(TabsContext);

  return (
    <TabTitleContainer
      activeTab={activeTab === tabName}
      onClick={() => onRequestToChange(tabName)}
    >
      {children}
    </TabTitleContainer>
  );
};
