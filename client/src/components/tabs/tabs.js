import { TabsContainer } from "./style";
import { TabsContext } from "./context";
export const Tabs = ({ activeTab, onRequestToChange, children }) => {
  return (
    <TabsContainer>
      <TabsContext.Provider value={{ activeTab, onRequestToChange }}>
        {children}
      </TabsContext.Provider>
    </TabsContainer>
  );
};
