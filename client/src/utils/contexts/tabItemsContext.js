import React from "react";

export const TabItemsContext = React.createContext({
  showDuringSmallSize: true,
  toggleItem: () => {},
  showItem: () => {},
  hideItem: () => {},
});

export const TabItemsContextProvider = ({ children }) => {
  const [showDuringSmallSize, setShowDuringSmallSize] = React.useState(false);

  const toggleItem = () => setShowDuringSmallSize((pS) => !pS);

  const showItem = () => setShowDuringSmallSize(true);

  const hideItem = () => setShowDuringSmallSize(false);

  const context = { showDuringSmallSize, toggleItem, showItem, hideItem };

  return (
    <TabItemsContext.Provider value={context}>
      {children}
    </TabItemsContext.Provider>
  );
};
