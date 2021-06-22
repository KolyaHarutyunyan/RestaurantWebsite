import { TabsContext } from "./context";
import { TabContentContainer } from "./style";
import { useContext } from "react";

export const TabContent = ({ contentOf, children }) => {
  const { activeTab } = useContext(TabsContext);

  if (contentOf !== activeTab) {
    return null;
  }
  return <TabContentContainer>{children}</TabContentContainer>;
};
