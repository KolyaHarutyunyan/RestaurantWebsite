import React from "react";

export const TabItemsContext = React.createContext({
  showDuringSmallSize: true,
  toggleTabItems: () => {},
});

export const TabItemsContextProvider = ({ children }) => {
  const [showDuringSmallSize, setShowDuringSmallSize] = React.useState(false);

  const toggleTabItems = () => setShowDuringSmallSize((pS) => !pS);

  const context = { showDuringSmallSize, toggleTabItems };

  return (
    <TabItemsContext.Provider value={context}>
      {children}
    </TabItemsContext.Provider>
  );
};
